import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Download, 
  Upload,
  Key,
  Trash2,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';

const SettingsPage = () => {
  const { user, profile, updatePassword, isLoading, error, clearError } = useAuthStore();
  const { tasks, projects } = useTaskStore();
  const [activeTab, setActiveTab] = useState('profile');
  const [showApiKey, setShowApiKey] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="w-4 h-4" /> },
    { id: 'integrations', label: 'Integrations', icon: <Globe className="w-4 h-4" /> },
    { id: 'data', label: 'Data & Privacy', icon: <Download className="w-4 h-4" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      alert('New password must be at least 6 characters');
      return;
    }

    await updatePassword(formData.currentPassword, formData.newPassword);
    
    // Clear form on success
    if (!error) {
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    }
  };

  const exportData = (type: 'tasks' | 'projects' | 'all') => {
    let data: any;
    let filename: string;

    switch (type) {
      case 'tasks':
        data = tasks.map(task => ({
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority,
          start_date: task.start_date,
          due_date: task.due_date,
          progress: task.progress,
          created_at: task.created_at,
        }));
        filename = 'taskflow-tasks.csv';
        break;
      case 'projects':
        data = projects;
        filename = 'taskflow-projects.json';
        break;
      case 'all':
        data = { tasks, projects, profile };
        filename = 'taskflow-all-data.json';
        break;
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        console.log('Imported data:', data);
        alert('Data imported successfully! (This is a demo - actual import functionality would be implemented here)');
      } catch (error) {
        alert('Error parsing file. Please ensure it\'s a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input focus-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input focus-ring"
              disabled
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
        <div className="flex items-center space-x-4">
          <img 
            src={profile?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} 
            alt={profile?.name || user?.email}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <button className="btn-secondary">Change Photo</button>
            <p className="text-sm text-gray-500 mt-1">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn-primary flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
        <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="input focus-ring"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="input focus-ring"
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="input focus-ring"
              required
              minLength={6}
            />
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Authenticator App</h4>
              <p className="text-sm text-gray-500">Use an authenticator app to generate verification codes</p>
            </div>
            <button className="btn-secondary">Enable</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'light', label: 'Light', preview: 'bg-white border-2 border-gray-200' },
            { id: 'dark', label: 'Dark', preview: 'bg-gray-900 border-2 border-gray-700' },
            { id: 'system', label: 'System', preview: 'bg-gradient-to-r from-white to-gray-900 border-2 border-gray-300' },
          ].map((theme) => (
            <label key={theme.id} className="cursor-pointer">
              <input type="radio" name="theme" value={theme.id} className="sr-only peer" defaultChecked={theme.id === 'light'} />
              <div className="p-4 border-2 border-gray-200 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
                <div className={`w-full h-20 rounded-md mb-3 ${theme.preview}`} />
                <h4 className="font-medium text-gray-900">{theme.label}</h4>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Accent Color</h3>
        <div className="flex space-x-3">
          {[
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F97316'
          ].map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Display Options</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Compact mode</h4>
              <p className="text-sm text-gray-500">Reduce spacing and padding for a more compact interface</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Data</h3>
        <div className="space-y-3">
          <button 
            onClick={() => exportData('tasks')}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Tasks (CSV)</span>
          </button>
          <button 
            onClick={() => exportData('projects')}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Projects (JSON)</span>
          </button>
          <button 
            onClick={() => exportData('all')}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export All Data</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Data</h3>
        <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 mb-2">Drop your CSV or JSON file here</p>
          <input
            type="file"
            accept=".json,.csv"
            onChange={handleFileImport}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="btn-secondary cursor-pointer">
            Choose File
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Account</h3>
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <div className="flex items-start space-x-3">
            <Trash2 className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-red-900">Delete your account</h4>
              <p className="text-sm text-red-700 mt-1">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="mt-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { id: 'task-assigned', label: 'Task assigned to me', description: 'Get notified when a task is assigned to you' },
            { id: 'task-completed', label: 'Task completed', description: 'Get notified when someone completes a task' },
            { id: 'project-updates', label: 'Project updates', description: 'Get notified about project milestones and updates' },
            { id: 'deadline-reminders', label: 'Deadline reminders', description: 'Get reminded about upcoming deadlines' },
            { id: 'weekly-summary', label: 'Weekly summary', description: 'Receive a weekly summary of your productivity' },
          ].map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{notification.label}</h4>
                <p className="text-sm text-gray-500">{notification.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Assistant</h3>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-medium text-gray-900">OpenAI API Key</h4>
              <p className="text-sm text-gray-500">Connect your OpenAI account to enable AI features</p>
            </div>
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex space-x-3">
            <input
              type={showApiKey ? 'text' : 'password'}
              placeholder="sk-..."
              className="flex-1 input focus-ring"
            />
            <button className="btn-primary">Save</button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Apps</h3>
        <div className="space-y-3">
          {[
            { name: 'Slack', description: 'Get notifications in Slack', connected: true },
            { name: 'Google Calendar', description: 'Sync tasks with your calendar', connected: false },
            { name: 'GitHub', description: 'Link commits to tasks', connected: true },
            { name: 'Figma', description: 'Attach design files to tasks', connected: false },
          ].map((app, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{app.name}</h4>
                <p className="text-sm text-gray-500">{app.description}</p>
              </div>
              <button className={`${app.connected ? 'btn-secondary' : 'btn-primary'}`}>
                {app.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab();
      case 'notifications':
        return renderNotificationsTab();
      case 'security':
        return renderSecurityTab();
      case 'appearance':
        return renderAppearanceTab();
      case 'integrations':
        return renderIntegrationsTab();
      case 'data':
        return renderDataTab();
      default:
        return renderProfileTab();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;