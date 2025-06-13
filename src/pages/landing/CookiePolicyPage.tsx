import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Cookie, Settings, Eye, BarChart3, Shield, Globe } from 'lucide-react';

const CookiePolicyPage = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const lastUpdated = "January 1, 2025";

  const cookieTypes = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Essential Cookies",
      description: "Required for the website to function properly",
      required: true,
      examples: [
        "Authentication and security",
        "Session management",
        "Load balancing",
        "CSRF protection"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      required: false,
      examples: [
        "Page views and user behavior",
        "Performance monitoring",
        "Error tracking",
        "Usage statistics"
      ]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      required: false,
      examples: [
        "Targeted advertising",
        "Social media integration",
        "Conversion tracking",
        "Retargeting campaigns"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Preference Cookies",
      description: "Remember your settings and preferences",
      required: false,
      examples: [
        "Language preferences",
        "Theme settings",
        "Layout customizations",
        "Notification preferences"
      ]
    }
  ];

  const cookieDetails = [
    {
      name: "taskflow_session",
      purpose: "Authentication and session management",
      type: "Essential",
      duration: "Session",
      domain: "taskflow.com"
    },
    {
      name: "csrf_token",
      purpose: "Cross-site request forgery protection",
      type: "Essential",
      duration: "Session",
      domain: "taskflow.com"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "2 years",
      domain: ".taskflow.com"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "24 hours",
      domain: ".taskflow.com"
    },
    {
      name: "theme_preference",
      purpose: "Remember user's theme choice",
      type: "Preference",
      duration: "1 year",
      domain: "taskflow.com"
    },
    {
      name: "language",
      purpose: "Remember user's language preference",
      type: "Preference",
      duration: "1 year",
      domain: "taskflow.com"
    }
  ];

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save preferences to localStorage or send to server
    console.log('Saving cookie preferences:', cookiePreferences);
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">TaskFlow</span>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Cookie className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cookie{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn about how we use cookies and similar technologies to improve your experience on TaskFlow.
            </motion.p>

            <motion.div 
              className="text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Last updated: {lastUpdated}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  TaskFlow uses cookies and similar technologies (such as web beacons and pixels) to enhance your experience, provide our services, and understand how our website is used.
                </p>
                <p>
                  We are committed to being transparent about our use of cookies and giving you control over your preferences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600">
              We use different types of cookies for various purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{type.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                      {type.required && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-8">
                You can control which cookies we use by adjusting your preferences below. Note that disabling certain cookies may affect the functionality of our website.
              </p>

              <div className="space-y-6">
                {[
                  { key: 'essential', label: 'Essential Cookies', required: true },
                  { key: 'analytics', label: 'Analytics Cookies', required: false },
                  { key: 'marketing', label: 'Marketing Cookies', required: false },
                  { key: 'preferences', label: 'Preference Cookies', required: false }
                ].map((cookie) => (
                  <div key={cookie.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{cookie.label}</h3>
                      {cookie.required && (
                        <p className="text-sm text-gray-500">Required for website functionality</p>
                      )}
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={cookiePreferences[cookie.key as keyof typeof cookiePreferences]}
                        onChange={() => handleCookieToggle(cookie.key)}
                        disabled={cookie.required}
                      />
                      <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 ${cookie.required ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={savePreferences}
                  className="btn-primary"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Details Table */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Cookie Information</h2>
                <p className="text-gray-600">
                  Below is a comprehensive list of all cookies used on our website.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {cookie.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {cookie.purpose}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.type === 'Essential' ? 'bg-green-100 text-green-800' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            cookie.type === 'Marketing' ? 'bg-purple-100 text-purple-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {cookie.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {cookie.domain}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Browser Settings */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Browser Cookie Settings</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  You can also control cookies through your browser settings. Most browsers allow you to:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "View and delete cookies",
                    "Block cookies from specific websites",
                    "Block third-party cookies",
                    "Clear all cookies when you close the browser",
                    "Set up exceptions for trusted websites"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Browser-Specific Instructions:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Chrome:</p>
                      <p className="text-gray-600">Settings → Privacy and security → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Firefox:</p>
                      <p className="text-gray-600">Options → Privacy & Security → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Safari:</p>
                      <p className="text-gray-600">Preferences → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Edge:</p>
                      <p className="text-gray-600">Settings → Cookies and site permissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@taskflow.com</p>
                    <p><strong>Address:</strong> TaskFlow Inc., 123 Cookie Street, San Francisco, CA 94105</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We will respond to your inquiry within 30 days and help you understand how we use cookies and how to manage your preferences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience TaskFlow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how TaskFlow can transform your team's productivity.
            </p>
            <Link 
              to="/auth"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Start Free Trial</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;