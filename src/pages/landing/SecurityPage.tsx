import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  FileText, 
  Users,
  Globe,
  AlertTriangle,
  Award,
  Zap
} from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption standards."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "SOC 2 Type II Compliant",
      description: "Independently audited and certified for security, availability, and confidentiality."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "Zero-Knowledge Architecture",
      description: "We can't see your data even if we wanted to. Your privacy is guaranteed."
    },
    {
      icon: <Server className="w-8 h-8 text-orange-600" />,
      title: "Secure Infrastructure",
      description: "Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "GDPR Compliant",
      description: "Full compliance with GDPR, CCPA, and other international privacy regulations."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Role-Based Access Control",
      description: "Granular permissions and access controls to protect sensitive information."
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, Availability, and Confidentiality",
      icon: <Award className="w-12 h-12 text-blue-600" />
    },
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: <Shield className="w-12 h-12 text-green-600" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      icon: <Globe className="w-12 h-12 text-purple-600" />
    },
    {
      name: "HIPAA",
      description: "Healthcare Information Protection",
      icon: <FileText className="w-12 h-12 text-red-600" />
    }
  ];

  const securityPractices = [
    "Regular security audits and penetration testing",
    "24/7 security monitoring and incident response",
    "Multi-factor authentication (MFA) support",
    "Single Sign-On (SSO) integration",
    "Regular security training for all employees",
    "Secure development lifecycle (SDLC)",
    "Data backup and disaster recovery plans",
    "Vulnerability management program"
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Enterprise-Grade{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Security
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your data security is our top priority. Learn about our comprehensive security measures and compliance certifications.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with Security in Mind
            </h2>
            <p className="text-xl text-gray-600">
              Every aspect of TaskFlow is designed with security and privacy at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of compliance and security certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
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
                Our Security Practices
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We implement industry-leading security practices to protect your data and ensure business continuity.
              </p>
              
              <div className="space-y-4">
                {securityPractices.map((practice, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
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
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Security First</h3>
                    <p className="text-blue-100">Always on, always protected</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Uptime</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Centers</span>
                    <span className="font-semibold">Global</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Encryption</span>
                    <span className="font-semibold">AES-256</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monitoring</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Report */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparency Report
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We believe in transparency. Download our latest security report to learn more about our security posture.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/contact"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Security Report</span>
                </Link>
                
                <Link 
                  to="/contact"
                  className="btn-secondary flex items-center space-x-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Report Security Issue</span>
                </Link>
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
              Ready to secure your workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of security-conscious teams who trust TaskFlow with their most important work.
            </p>
            <Link 
              to="/auth"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Start Secure Trial</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;