/*
  # Comprehensive Authentication Fix

  1. Fix Issues
    - Drop and recreate all auth-related functions and triggers
    - Ensure proper RLS policies for profiles table
    - Add proper error handling for profile creation
    - Fix any potential constraint conflicts

  2. Security
    - Maintain RLS policies
    - Ensure proper permissions for profile creation
*/

-- First, let's clean up any existing problematic triggers and functions
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user() CASCADE;

-- Recreate the profiles table with proper constraints if needed
-- (This will only run if the table doesn't exist)
DO $$ 
BEGIN
    -- Check if we need to modify the profiles table structure
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'profiles'
    ) THEN
        CREATE TABLE profiles (
            id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
            email text UNIQUE NOT NULL,
            name text NOT NULL,
            avatar_url text,
            created_at timestamptz DEFAULT now(),
            updated_at timestamptz DEFAULT now()
        );
    END IF;
END $$;

-- Ensure RLS is enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies and recreate them
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Enable read access for own profile" ON profiles;
DROP POLICY IF EXISTS "Enable update for own profile" ON profiles;

-- Create comprehensive RLS policies
CREATE POLICY "Enable insert for authenticated users only"
    ON profiles FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable read access for own profile"
    ON profiles FOR SELECT
    TO authenticated
    USING (auth.uid() = id);

CREATE POLICY "Enable update for own profile"
    ON profiles FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Create a more robust function to handle new user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_name text;
BEGIN
    -- Extract name from metadata or use email prefix
    user_name := COALESCE(
        NEW.raw_user_meta_data->>'name',
        NEW.raw_user_meta_data->>'full_name',
        split_part(NEW.email, '@', 1)
    );
    
    -- Insert the profile with proper error handling
    INSERT INTO public.profiles (id, email, name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        user_name,
        NEW.raw_user_meta_data->>'avatar_url'
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        name = COALESCE(EXCLUDED.name, profiles.name),
        avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url),
        updated_at = now();
    
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- Log the error but don't fail the user creation
        RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON public.profiles TO authenticated;

-- Ensure the function has proper permissions
GRANT EXECUTE ON FUNCTION handle_new_user() TO authenticated;

-- Create an index for better performance
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles(email);