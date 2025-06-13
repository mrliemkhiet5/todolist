import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Check, X, Star } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for individuals and small teams getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        "Up to 3 projects",
        "Up to 5 team members",
        "Basic task management",
        "List and Kanban views",
        "Mobile app access",
        "Email support"
      ],
      limitations: [
        "No advanced analytics",
        "No time tracking",
        "No custom fields",
        "No API access"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      description: "Ideal for growing teams that need advanced features",
      price: { monthly: 12, annual: 120 },
      features: [
        "Unlimited projects",
        "Up to 25 team members",
        "All view types (List, Kanban, Calendar, Gantt)",
        "Advanced analytics",
        "Time tracking",
        "Custom fields",
        "Priority support",
        "Integrations",
        "Guest access"
      ],
      limitations: [
        "No white-label options",
        "No advanced security features"
      ],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Business",
      description: "For larger teams requiring enterprise-grade features",
      price: { monthly: 24, annual: 240 },
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced security & compliance",
        "SSO integration",
        "Custom workflows",
        "API access",
        "Advanced reporting",
        "Dedicated account manager",
        "Phone support",
        "Custom integrations"
      ],
      limitations: [],
      popular: false,
      cta: "Start Business Trial"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: { monthly: "Custom", annual: "Custom" },
      features: [
        "Everything in Business",
        "White-label options",
        "On-premise deployment",
        "Custom development",
        "24/7 premium support",
        "Training & onboarding",
        "SLA guarantees",
        "Advanced security audits",
        "Unlimited integrations",
        "Custom contracts"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 30 days after cancellation. You can export all your data during this period."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer 50% discounts for qualified non-profit organizations. Contact our sales team for more information."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
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
              Simple, Transparent{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose the perfect plan for your team. Start free and scale as you grow.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  Save 17%
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`card p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {typeof plan.price.monthly === 'number' ? '$' : ''}
                      {isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {typeof plan.price.monthly === 'number' && (
                      <span className="text-gray-500 text-sm">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/auth'}
                  className={`w-full btn-primary text-center block ${
                    plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using TaskFlow to boost their productivity.
            </p>
            <Link 
              to="/auth"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Start Your Free Trial</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;