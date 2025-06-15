import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Calendar, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Smartphone,
  Clock,
  Target,
  Layers,
  MessageSquare
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Smart Task Management",
      description: "Organize tasks with intuitive drag-and-drop, smart prioritization, and automated scheduling.",
      details: [
        "Drag-and-drop task organization",
        "Smart priority suggestions",
        "Automated deadline reminders",
        "Task dependencies tracking"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Multiple Views",
      description: "Switch between List, Kanban, Calendar, and Gantt views to match your workflow preferences.",
      details: [
        "List view for detailed task management",
        "Kanban boards for visual workflow",
        "Calendar view for deadline tracking",
        "Gantt charts for project timelines"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Track productivity trends, project progress, and team performance with detailed insights.",
      details: [
        "Real-time productivity metrics",
        "Project completion tracking",
        "Team performance analytics",
        "Custom reporting dashboards"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Collaboration",
      description: "Share projects, assign tasks, and collaborate in real-time with your team members.",
      details: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Team member permissions",
        "Project sharing capabilities"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "AI-Powered Assistant",
      description: "Get intelligent suggestions, automated planning, and smart content generation.",
      details: [
        "Smart task suggestions",
        "Automated project planning",
        "Content generation assistance",
        "Predictive analytics"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications.",
      details: [
        "End-to-end encryption",
        "Single Sign-On (SSO)",
        "GDPR compliance",
        "Regular security audits"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Global Accessibility",
      description: "Access your workspace from anywhere with multi-language support and offline capabilities.",
      details: [
        "Multi-language interface",
        "Offline mode support",
        "Cross-platform compatibility",
        "Global CDN for fast loading"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
      title: "Mobile Optimized",
      description: "Native mobile apps for iOS and Android with full feature parity.",
      details: [
        "Native iOS and Android apps",
        "Push notifications",
        "Offline synchronization",
        "Touch-optimized interface"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: "Time Tracking",
      description: "Built-in time tracking with detailed reports and productivity insights.",
      details: [
        "Automatic time tracking",
        "Manual time entry",
        "Detailed time reports",
        "Productivity insights"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-600" />,
      title: "Goal Setting",
      description: "Set and track personal and team goals with milestone tracking.",
      details: [
        "Personal goal setting",
        "Team objectives tracking",
        "Milestone management",
        "Progress visualization"
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-emerald-600" />,
      title: "Project Templates",
      description: "Pre-built templates for common project types to get started quickly.",
      details: [
        "Industry-specific templates",
        "Custom template creation",
        "Template sharing",
        "Quick project setup"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-violet-600" />,
      title: "Communication Hub",
      description: "Integrated chat, comments, and file sharing for seamless team communication.",
      details: [
        "Real-time messaging",
        "Task comments and mentions",
        "File sharing and storage",
        "Video call integration"
      ]
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
              Powerful Features for{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover all the tools and capabilities that make TaskFlow the ultimate productivity platform for teams of all sizes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Ready to experience these features?
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

export default FeaturesPage;