import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Code, 
  Book, 
  Zap, 
  Shield,
  Copy,
  ExternalLink,
  ChevronRight,
  Terminal
} from 'lucide-react';

const ApiDocsPage = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('tasks');

  const endpoints = [
    {
      id: 'tasks',
      title: 'Tasks',
      description: 'Create, read, update, and delete tasks',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Manage projects and their settings',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
    {
      id: 'users',
      title: 'Users',
      description: 'User management and authentication',
      methods: ['GET', 'POST', 'PUT']
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      description: 'Real-time event notifications',
      methods: ['GET', 'POST', 'DELETE']
    }
  ];

  const codeExamples = {
    tasks: {
      curl: `curl -X GET "https://api.taskflow.com/v1/tasks" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      javascript: `const response = await fetch('https://api.taskflow.com/v1/tasks', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const tasks = await response.json();`,
      python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.taskflow.com/v1/tasks', headers=headers)
tasks = response.json()`
    }
  };

  const quickStart = [
    {
      step: 1,
      title: "Get Your API Key",
      description: "Generate an API key from your TaskFlow dashboard settings."
    },
    {
      step: 2,
      title: "Make Your First Request",
      description: "Use your API key to authenticate and fetch your tasks."
    },
    {
      step: 3,
      title: "Handle the Response",
      description: "Process the JSON response and integrate with your application."
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "RESTful API",
      description: "Clean, predictable URLs and standard HTTP methods"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-time Webhooks",
      description: "Get instant notifications when data changes"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure Authentication",
      description: "OAuth 2.0 and API key authentication options"
    },
    {
      icon: <Book className="w-8 h-8 text-purple-600" />,
      title: "Comprehensive Docs",
      description: "Detailed documentation with examples and SDKs"
    }
  ];

  const sdks = [
    { name: "JavaScript/Node.js", status: "Available", link: "#" },
    { name: "Python", status: "Available", link: "#" },
    { name: "PHP", status: "Available", link: "#" },
    { name: "Ruby", status: "Available", link: "#" },
    { name: "Go", status: "Coming Soon", link: "#" },
    { name: "Java", status: "Coming Soon", link: "#" }
  ];

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
                <Terminal className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TaskFlow{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                API
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build powerful integrations with our comprehensive REST API. Access all TaskFlow features programmatically with simple, well-documented endpoints.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>REST API</span>
              <span>•</span>
              <span>OAuth 2.0</span>
              <span>•</span>
              <span>Rate Limited</span>
              <span>•</span>
              <span>99.9% Uptime</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need to build powerful integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-xl text-gray-600">
              Get up and running with the TaskFlow API in minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {quickStart.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Explorer */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Explorer</h2>
            <p className="text-xl text-gray-600">
              Try our API endpoints with interactive examples.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Endpoints</h3>
                <div className="space-y-2">
                  {endpoints.map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => setActiveEndpoint(endpoint.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeEndpoint === endpoint.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{endpoint.title}</div>
                      <div className="text-sm text-gray-500">{endpoint.description}</div>
                      <div className="flex space-x-1 mt-2">
                        {endpoint.methods.map((method) => (
                          <span
                            key={method}
                            className={`text-xs px-2 py-1 rounded ${
                              method === 'GET' ? 'bg-green-100 text-green-700' :
                              method === 'POST' ? 'bg-blue-100 text-blue-700' :
                              method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="border-b border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900">Code Examples</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {Object.entries(codeExamples[activeEndpoint as keyof typeof codeExamples] || codeExamples.tasks).map(([language, code]) => (
                      <div key={language}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 capitalize">{language}</h4>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-600">
              Use our official SDKs to integrate TaskFlow into your applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                className="card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{sdk.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      sdk.status === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {sdk.status}
                    </span>
                  </div>
                  {sdk.status === 'Available' && (
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Rate Limits & Authentication</h2>
              <p className="text-xl text-gray-600 mb-6">
                Our API is designed to be fast, reliable, and secure. We implement rate limiting to ensure fair usage and optimal performance for all users.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">1,000 requests per hour for free plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">10,000 requests per hour for paid plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">OAuth 2.0 and API key authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">HTTPS encryption for all requests</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">API Status</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Uptime</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-semibold">&lt; 100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>API Version</span>
                    <span className="font-semibold">v1.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Status</span>
                    <span className="font-semibold text-green-300">Operational</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link 
                    to="/status"
                    className="text-white hover:text-blue-100 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>View Status Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
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
              Ready to start building?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your API key and start integrating TaskFlow into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/auth"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
              >
                Get API Key
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocsPage;