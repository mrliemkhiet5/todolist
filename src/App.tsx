import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import FeaturesPage from './pages/landing/FeaturesPage';
import PricingPage from './pages/landing/PricingPage';
import SecurityPage from './pages/landing/SecurityPage';
import IntegrationsPage from './pages/landing/IntegrationsPage';
import AboutPage from './pages/landing/AboutPage';
import BlogPage from './pages/landing/BlogPage';
import CareersPage from './pages/landing/CareersPage';
import HelpCenterPage from './pages/landing/HelpCenterPage';
import ApiDocsPage from './pages/landing/ApiDocsPage';
import StatusPage from './pages/landing/StatusPage';
import CommunityPage from './pages/landing/CommunityPage';
import PrivacyPolicyPage from './pages/landing/PrivacyPolicyPage';
import TermsOfServicePage from './pages/landing/TermsOfServicePage';
import CookiePolicyPage from './pages/landing/CookiePolicyPage';
import ContactPage from './pages/landing/ContactPage';
import { useAuthStore } from './store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/api-docs" element={<ApiDocsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />} 
        />
        <Route 
          path="/dashboard/*" 
          element={user ? <DashboardPage /> : <Navigate to="/auth" replace />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;