import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Activity, 
  AlertTriangle, 
  Clock,
  Server,
  Database,
  Globe,
  Zap
} from 'lucide-react';

const StatusPage = () => {
  const services = [
    {
      name: "API",
      status: "operational",
      uptime: "99.98%",
      responseTime: "89ms",
      description: "Core API endpoints and authentication"
    },
    {
      name: "Web Application",
      status: "operational",
      uptime: "99.99%",
      responseTime: "245ms",
      description: "TaskFlow web interface and dashboard"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.97%",
      responseTime: "12ms",
      description: "Primary database and data storage"
    },
    {
      name: "File Storage",
      status: "operational",
      uptime: "99.95%",
      responseTime: "156ms",
      description: "File uploads and attachment storage"
    },
    {
      name: "Email Service",
      status: "operational",
      uptime: "99.92%",
      responseTime: "2.3s",
      description: "Notification emails and system messages"
    },
    {
      name: "Webhooks",
      status: "degraded",
      uptime: "98.45%",
      responseTime: "1.2s",
      description: "Real-time event notifications"
    }
  ];

  const incidents = [
    {
      id: 1,
      title: "Webhook delivery delays",
      status: "investigating",
      severity: "minor",
      startTime: "2025-01-15 14:30 UTC",
      description: "We're experiencing delays in webhook delivery. API and web application remain fully operational.",
      updates: [
        {
          time: "2025-01-15 15:15 UTC",
          message: "We've identified the issue and are working on a fix. Webhooks are being queued and will be delivered once resolved."
        },
        {
          time: "2025-01-15 14:45 UTC",
          message: "We're investigating reports of delayed webhook deliveries."
        }
      ]
    }
  ];

  const metrics = [
    {
      title: "Overall Uptime",
      value: "99.96%",
      period: "Last 30 days",
      icon: <Activity className="w-6 h-6 text-green-600" />
    },
    {
      title: "Average Response Time",
      value: "127ms",
      period: "Last 24 hours",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Active Incidents",
      value: "1",
      period: "Currently",
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Scheduled Maintenance",
      value: "0",
      period: "Next 7 days",
      icon: <Clock className="w-6 h-6 text-purple-600" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'degraded':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'outage':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              System{' '}
              <span className="text-gradient bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Status
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real-time status and performance metrics for all TaskFlow services.
            </motion.p>

            <motion.div 
              className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">All Systems Operational</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{metric.title}</div>
                <div className="text-xs text-gray-500">{metric.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Incidents */}
      {incidents.length > 0 && (
        <section className="py-20 bg-yellow-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Incidents</h2>
              <p className="text-xl text-gray-600">
                We're actively monitoring and resolving these issues.
              </p>
            </div>

            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          incident.status === 'investigating' ? 'bg-yellow-100 text-yellow-700' :
                          incident.status === 'identified' ? 'bg-blue-100 text-blue-700' :
                          incident.status === 'monitoring' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          incident.severity === 'critical' ? 'bg-red-100 text-red-700' :
                          incident.severity === 'major' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </span>
                        <span className="text-gray-500">Started: {incident.startTime}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{incident.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Updates</h4>
                    {incident.updates.map((update, idx) => (
                      <div key={idx} className="border-l-2 border-blue-200 pl-4">
                        <div className="text-sm text-gray-500 mb-1">{update.time}</div>
                        <div className="text-gray-700">{update.message}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Status */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-xl text-gray-600">
              Current status of all TaskFlow services and components.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(service.status)}
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Uptime:</span> {service.uptime}
                    </div>
                    <div>
                      <span className="font-medium">Response:</span> {service.responseTime}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Data */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Performance</h2>
            <p className="text-xl text-gray-600">
              Performance metrics and uptime history over the past 90 days.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Uptime History</h3>
              <div className="space-y-3">
                {[
                  { period: "Last 24 hours", uptime: "100%" },
                  { period: "Last 7 days", uptime: "99.98%" },
                  { period: "Last 30 days", uptime: "99.96%" },
                  { period: "Last 90 days", uptime: "99.94%" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.period}</span>
                    <span className="font-semibold text-green-600">{item.uptime}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Trends</h3>
              <div className="space-y-3">
                {[
                  { period: "Last 24 hours", time: "127ms" },
                  { period: "Last 7 days", time: "134ms" },
                  { period: "Last 30 days", time: "142ms" },
                  { period: "Last 90 days", time: "156ms" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.period}</span>
                    <span className="font-semibold text-blue-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and get notified about incidents, maintenance, and service improvements.
            </p>
            
            <div className="max-w-md mx-auto flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;