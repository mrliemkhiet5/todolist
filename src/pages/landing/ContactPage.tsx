import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  Send,
  Globe,
  Users,
  Headphones,
  FileText
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@taskflow.com",
      availability: "24/7 response"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available on website",
      availability: "24/7 for paid plans"
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Office Address",
      description: "Visit us in person",
      contact: "123 Productivity St, San Francisco, CA 94105",
      availability: "Mon-Fri, 9AM-5PM PST"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
    { value: 'sales', label: 'Sales & Pricing', icon: <Users className="w-5 h-5" /> },
    { value: 'support', label: 'Technical Support', icon: <Headphones className="w-5 h-5" /> },
    { value: 'partnership', label: 'Partnership', icon: <Globe className="w-5 h-5" /> },
    { value: 'media', label: 'Media & Press', icon: <FileText className="w-5 h-5" /> },
    { value: 'legal', label: 'Legal & Compliance', icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Productivity Street\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@taskflow.com"
    },
    {
      city: "New York",
      address: "456 Innovation Avenue\nNew York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@taskflow.com"
    },
    {
      city: "London",
      address: "789 Collaboration Lane\nLondon, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@taskflow.com"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setIsSubmitting(false);
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
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have questions about TaskFlow? Need help getting started? Our team is here to help you succeed.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <span>•</span>
              <span>Response within 24 hours</span>
              <span>•</span>
              <span>Global offices</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600">
              Choose the best way to get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-gray-900 mb-2">{method.contact}</p>
                <p className="text-xs text-gray-500">{method.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.inquiryType === type.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {type.icon}
                        <span className="text-sm font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input focus-ring"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input focus-ring"
                      required
                    />
                  </div>
                </div>

                {/* Company and Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input focus-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="input focus-ring"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="input focus-ring resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Response Time */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">General Inquiries</span>
                    <span className="font-medium text-green-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sales Questions</span>
                    <span className="font-medium text-green-600">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Technical Support</span>
                    <span className="font-medium text-green-600">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Critical Issues</span>
                    <span className="font-medium text-green-600">Within 1 hour</span>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-gray-900 mb-2">{office.city}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="whitespace-pre-line">{office.address}</p>
                        <p>{office.phone}</p>
                        <p>{office.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <div className="card p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="text-xl font-semibold mb-4">Need Quick Answers?</h3>
                <p className="mb-4">
                  Check out our Help Center for instant answers to common questions.
                </p>
                <Link 
                  to="/help"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span>Visit Help Center</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions before you reach out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly will I receive a response?",
                answer: "We aim to respond to all inquiries within 24 hours. Sales and technical support requests typically receive faster responses during business hours."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, we offer phone support for paid plan customers during business hours (Mon-Fri, 9AM-6PM PST). Free plan users can access email and chat support."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! Contact our sales team to schedule a personalized demo of TaskFlow. We'll show you how our platform can meet your specific needs."
              },
              {
                question: "What information should I include in my message?",
                answer: "Please include as much detail as possible about your question or issue. For technical problems, include your account email, browser information, and steps to reproduce the issue."
              }
            ].map((faq, index) => (
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
    </div>
  );
};

export default ContactPage;