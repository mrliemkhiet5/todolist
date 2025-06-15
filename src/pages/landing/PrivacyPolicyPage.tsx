import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Shield, Eye, Lock, Globe } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Account Information",
          text: "When you create an account, we collect your name, email address, and password. This information is necessary to provide you with access to TaskFlow services."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you use TaskFlow, including features accessed, time spent, and interaction patterns. This helps us improve our service and user experience."
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about the device you use to access TaskFlow, including IP address, browser type, operating system, and device identifiers."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve TaskFlow services, including task management, collaboration features, and customer support."
        },
        {
          subtitle: "Communication",
          text: "We may use your email address to send you service-related notifications, updates, and marketing communications (which you can opt out of at any time)."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our service is used and to identify areas for improvement and new feature development."
        }
      ]
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who help us operate TaskFlow, such as hosting providers and analytics services."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of TaskFlow, our users, or others."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Encryption",
          text: "All data is encrypted in transit using TLS and at rest using AES-256 encryption. We implement industry-standard security measures to protect your information."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls and regularly audit our systems to ensure that only authorized personnel can access user data."
        },
        {
          subtitle: "Security Monitoring",
          text: "We continuously monitor our systems for security threats and vulnerabilities, and we have incident response procedures in place."
        }
      ]
    },
    {
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Portability",
          text: "You have the right to access your personal data and request a copy of the information we hold about you in a portable format."
        },
        {
          subtitle: "Correction and Deletion",
          text: "You can update your account information at any time and request deletion of your account and associated data."
        },
        {
          subtitle: "Opt-out",
          text: "You can opt out of marketing communications and certain data processing activities through your account settings."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies that are necessary for the operation of TaskFlow, including authentication and security cookies."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics cookies to understand how users interact with our service and to improve user experience."
        },
        {
          subtitle: "Cookie Management",
          text: "You can manage cookie preferences through your browser settings, though disabling certain cookies may affect functionality."
        }
      ]
    }
  ];

  const principles = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Data Minimization",
      description: "We only collect data that is necessary to provide our services."
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Security First",
      description: "We implement robust security measures to protect your data."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Global Compliance",
      description: "We comply with GDPR, CCPA, and other privacy regulations."
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
              Privacy{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </motion.p>

            <motion.div 
              className="text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Last updated: {lastUpdated}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600">
              These principles guide how we handle your personal information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. Specific retention periods include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Usage Analytics:</strong> Aggregated and anonymized data may be retained indefinitely</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Support Communications:</strong> Retained for 2 years for quality assurance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  TaskFlow operates globally, and your information may be transferred to and processed in countries other than your own. We ensure that all international transfers comply with applicable data protection laws through:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Standard Contractual Clauses approved by the European Commission</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Adequacy decisions for transfers to countries with adequate protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Additional safeguards including encryption and access controls</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@taskflow.com</p>
                    <p><strong>Address:</strong> TaskFlow Inc., 123 Privacy Street, San Francisco, CA 94105</p>
                    <p><strong>Data Protection Officer:</strong> dpo@taskflow.com</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We will respond to your inquiry within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
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
              Questions About Privacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our privacy team is here to help. Contact us with any questions or concerns about how we handle your data.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Contact Privacy Team</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;