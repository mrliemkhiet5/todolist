import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Zap, Globe, Code, Smartphone } from 'lucide-react';

const IntegrationsPage = () => {
  const integrationCategories = [
    {
      title: "Communication",
      description: "Stay connected with your team",
      integrations: [
        { name: "Slack", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Get notifications and updates in Slack" },
        { name: "Microsoft Teams", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Collaborate seamlessly with Teams" },
        { name: "Discord", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Connect with your Discord community" },
        { name: "Zoom", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Schedule and join meetings directly" }
      ]
    },
    {
      title: "Development",
      description: "Streamline your development workflow",
      integrations: [
        { name: "GitHub", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Link commits and pull requests to tasks" },
        { name: "GitLab", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Sync issues and merge requests" },
        { name: "Bitbucket", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Track code changes and deployments" },
        { name: "Jira", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Sync tickets and project data" }
      ]
    },
    {
      title: "Design",
      description: "Connect your design tools",
      integrations: [
        { name: "Figma", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Attach designs to tasks and projects" },
        { name: "Adobe Creative Cloud", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Link creative assets and files" },
        { name: "Sketch", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Share designs and prototypes" },
        { name: "InVision", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Connect prototypes and feedback" }
      ]
    },
    {
      title: "Productivity",
      description: "Enhance your productivity suite",
      integrations: [
        { name: "Google Workspace", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Sync with Gmail, Drive, and Calendar" },
        { name: "Microsoft 365", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Integrate with Office apps" },
        { name: "Notion", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Connect your knowledge base" },
        { name: "Evernote", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Link notes and documents" }
      ]
    },
    {
      title: "Time Tracking",
      description: "Track time and manage resources",
      integrations: [
        { name: "Toggl", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Automatic time tracking for tasks" },
        { name: "Harvest", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Track billable hours and expenses" },
        { name: "RescueTime", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Monitor productivity and focus" },
        { name: "Clockify", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Free time tracking for teams" }
      ]
    },
    {
      title: "Analytics",
      description: "Data and business intelligence",
      integrations: [
        { name: "Google Analytics", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Track project performance metrics" },
        { name: "Mixpanel", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Analyze user behavior and events" },
        { name: "Tableau", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Create advanced data visualizations" },
        { name: "Power BI", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop", description: "Business intelligence and reporting" }
      ]
    }
  ];

  const apiFeatures = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "RESTful API",
      description: "Full REST API access to all TaskFlow features and data"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Webhooks",
      description: "Real-time notifications for events and updates"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "GraphQL",
      description: "Flexible queries for efficient data fetching"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "SDKs",
      description: "Official SDKs for popular programming languages"
    }
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
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connect Everything{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                You Use
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TaskFlow integrates with 100+ tools and services to create a seamless workflow experience. Connect your favorite apps and automate your processes.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>100+ Integrations</span>
              <span>•</span>
              <span>REST API</span>
              <span>•</span>
              <span>Webhooks</span>
              <span>•</span>
              <span>Custom Workflows</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect TaskFlow with the tools your team already loves.
            </p>
          </div>

          <div className="space-y-16">
            {integrationCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="card p-6 hover-lift text-center"
                    >
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="w-12 h-12 mx-auto mb-4 rounded-lg"
                      />
                      <h4 className="font-semibold text-gray-900 mb-2">{integration.name}</h4>
                      <p className="text-sm text-gray-600">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful API & Developer Tools
            </h2>
            <p className="text-xl text-gray-600">
              Build custom integrations and automate workflows with our comprehensive API.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/api-docs"
              className="btn-primary mr-4"
            >
              View API Documentation
            </Link>
            <Link 
              to="/contact"
              className="btn-secondary"
            >
              Request Integration
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Automate Your Workflow
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Create powerful automations that trigger actions across your connected tools. Save time and reduce manual work with intelligent workflows.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Trigger actions based on task status changes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automatically create tasks from external events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Sync data between multiple platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Send notifications to team channels</span>
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
                <h3 className="text-xl font-semibold mb-6">Popular Automations</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Slack Notifications</h4>
                    <p className="text-sm text-blue-100">Get notified when tasks are completed or deadlines approach</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-medium mb-2">GitHub Integration</h4>
                    <p className="text-sm text-blue-100">Automatically create tasks from GitHub issues and PRs</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Calendar Sync</h4>
                    <p className="text-sm text-blue-100">Sync task deadlines with your Google Calendar</p>
                  </div>
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
              Ready to connect your tools?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start integrating TaskFlow with your favorite tools and create powerful automated workflows.
            </p>
            <Link 
              to="/auth"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Start Integrating</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;