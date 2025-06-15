import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, FileText, Scale, Shield, Users } from 'lucide-react';

const TermsOfServicePage = () => {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using TaskFlow, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Description of Service",
      content: "TaskFlow is a productivity and task management platform that allows users to organize, track, and collaborate on projects and tasks. The service includes web and mobile applications, API access, and related features."
    },
    {
      title: "User Accounts",
      content: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You are responsible for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account."
      ]
    },
    {
      title: "Acceptable Use",
      content: [
        "You may not use the service for any illegal or unauthorized purpose.",
        "You may not violate any laws in your jurisdiction when using the service.",
        "You may not transmit any worms, viruses, or any code of a destructive nature.",
        "You may not attempt to gain unauthorized access to our systems or networks."
      ]
    },
    {
      title: "User Content",
      content: [
        "You retain ownership of all content you submit to TaskFlow.",
        "You grant us a license to use, store, and display your content as necessary to provide the service.",
        "You are responsible for ensuring you have the right to share any content you upload.",
        "We reserve the right to remove content that violates these terms or our policies."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using TaskFlow, you agree to the collection and use of information in accordance with our Privacy Policy."
    },
    {
      title: "Subscription and Billing",
      content: [
        "Paid subscriptions are billed in advance on a monthly or annual basis.",
        "All fees are non-refundable except as required by law or as specified in our refund policy.",
        "We reserve the right to change our pricing with 30 days notice.",
        "You can cancel your subscription at any time through your account settings."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "TaskFlow and its original content, features, and functionality are owned by TaskFlow Inc.",
        "The service is protected by copyright, trademark, and other laws.",
        "You may not reproduce, distribute, or create derivative works without our permission.",
        "All trademarks, service marks, and logos used in the service are our property or the property of their respective owners."
      ]
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall TaskFlow Inc., its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your account immediately for any breach of these terms.",
        "You may terminate your account at any time by contacting us or using account settings.",
        "Upon termination, your right to use the service will cease immediately.",
        "We will provide you with a reasonable opportunity to retrieve your data before deletion."
      ]
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use of the service after such modifications constitutes acceptance of the updated terms."
    },
    {
      title: "Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms will be resolved in the courts of San Francisco County, California."
    }
  ];

  const highlights = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Clear Terms",
      description: "Our terms are written in plain language to be easily understood."
    },
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Fair Usage",
      description: "We believe in fair and reasonable terms for all users."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Data Protection",
      description: "Your data rights and our responsibilities are clearly defined."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "User Rights",
      description: "We respect your rights and provide clear guidelines for usage."
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
              Terms of{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              These terms govern your use of TaskFlow and outline the rights and responsibilities of both users and our company.
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

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600">
              We believe in transparent, fair, and user-friendly terms of service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card p-8 border-l-4 border-blue-500 bg-blue-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Effective Date:</strong> These terms are effective as of {lastUpdated} and apply to all users of TaskFlow.
                </p>
                <p>
                  <strong>Updates:</strong> We may update these terms from time to time. We will notify you of any material changes via email or through our service.
                </p>
                <p>
                  <strong>Questions:</strong> If you have any questions about these terms, please contact our legal team at legal@taskflow.com.
                </p>
                <p>
                  <strong>Severability:</strong> If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@taskflow.com</p>
                    <p><strong>Address:</strong> TaskFlow Inc., 123 Legal Street, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For general support questions, please visit our <Link to="/help" className="text-blue-600 hover:text-blue-700">Help Center</Link> or contact our support team.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              By using TaskFlow, you agree to these terms. Join thousands of teams already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/auth"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg"
              >
                Contact Legal Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;