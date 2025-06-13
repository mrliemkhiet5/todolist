import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Search, 
  Book, 
  MessageCircle, 
  Video, 
  FileText,
  ChevronRight,
  HelpCircle,
  Zap,
  Users,
  Settings
} from 'lucide-react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Getting Started",
      description: "Learn the basics of TaskFlow",
      articleCount: 12,
      articles: [
        "Creating your first project",
        "Adding team members",
        "Setting up your workspace",
        "Understanding task statuses"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Team Collaboration",
      description: "Work effectively with your team",
      articleCount: 8,
      articles: [
        "Assigning tasks to team members",
        "Using comments and mentions",
        "Sharing projects and permissions",
        "Real-time collaboration features"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Advanced Features",
      description: "Master TaskFlow's powerful tools",
      articleCount: 15,
      articles: [
        "Custom fields and templates",
        "Automation and workflows",
        "Advanced reporting",
        "API integration"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Account & Billing",
      description: "Manage your subscription",
      articleCount: 6,
      articles: [
        "Upgrading your plan",
        "Managing billing information",
        "Understanding usage limits",
        "Canceling your subscription"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to create and organize projects",
      category: "Getting Started",
      readTime: "3 min read"
    },
    {
      title: "Setting up team permissions and roles",
      category: "Team Collaboration",
      readTime: "5 min read"
    },
    {
      title: "Using keyboard shortcuts for faster navigation",
      category: "Tips & Tricks",
      readTime: "2 min read"
    },
    {
      title: "Integrating TaskFlow with Slack",
      category: "Integrations",
      readTime: "4 min read"
    },
    {
      title: "Understanding TaskFlow's pricing plans",
      category: "Account & Billing",
      readTime: "3 min read"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: <Video className="w-8 h-8 text-green-600" />,
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      availability: "50+ videos",
      action: "Watch Now"
    },
    {
      icon: <Book className="w-8 h-8 text-purple-600" />,
      title: "Documentation",
      description: "Comprehensive guides and references",
      availability: "Always updated",
      action: "Browse Docs"
    }
  ];

  const faqs = [
    {
      question: "How do I invite team members to my workspace?",
      answer: "You can invite team members by going to your workspace settings and clicking 'Invite Members'. Enter their email addresses and select their role permissions."
    },
    {
      question: "Can I use TaskFlow offline?",
      answer: "TaskFlow requires an internet connection for real-time collaboration features. However, you can view and edit tasks offline, and changes will sync when you're back online."
    },
    {
      question: "How do I export my data?",
      answer: "You can export your data from the Settings > Data Export section. We support CSV, JSON, and PDF formats for different types of data."
    },
    {
      question: "What's the difference between projects and workspaces?",
      answer: "A workspace is your organization's main container that holds multiple projects. Projects are specific initiatives or goals within your workspace."
    },
    {
      question: "How do I set up automated workflows?",
      answer: "Go to your project settings and click on 'Automation'. You can create rules that trigger actions based on task status changes, due dates, or other conditions."
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
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              How can we{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                help you?
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find answers, get support, and learn how to make the most of TaskFlow.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600">
              Choose the best way to get the help you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
                <button className="btn-primary w-full">{option.action}</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Find detailed guides and tutorials organized by topic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{category.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      {category.articles.map((article, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                          <ChevronRight className="w-3 h-3" />
                          <span>{article}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600">
              The most helpful articles from our knowledge base.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                className="card p-6 hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
              >
                Contact Support
              </Link>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg">
                Start Live Chat
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;