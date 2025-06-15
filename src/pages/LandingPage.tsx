import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Calendar, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight,
  Play,
  Star,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Smart Task Management",
      description: "Organize tasks with intuitive drag-and-drop, smart prioritization, and automated scheduling."
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Multiple Views",
      description: "Switch between List, Kanban, Calendar, and Gantt views to match your workflow preferences."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Track productivity trends, project progress, and team performance with detailed insights."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Collaboration",
      description: "Share projects, assign tasks, and collaborate in real-time with your team members."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "AI-Powered Assistant",
      description: "Get intelligent suggestions, automated planning, and smart content generation."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications."
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Xuân Lĩnh",
      role: "Product Manager at TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenXuanLinh&backgroundColor=b6e3f4&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      content: "TaskFlow transformed how our team manages projects. The AI suggestions are incredibly accurate."
    },
    {
      name: "Trần Khánh",
      role: "Design Lead at StartupXYZ",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranKhanh&backgroundColor=c0aede&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Blue01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      content: "The Gantt charts and timeline view help us stay on track with complex design projects."
    },
    {
      name: "Ngô Lập",
      role: "Founder at InnovateLab",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NgoLap&backgroundColor=ffd93d&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      content: "Best productivity tool we've used. The interface is beautiful and incredibly intuitive."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">TaskFlow</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link to="/security" className="text-gray-600 hover:text-gray-900 transition-colors">Security</Link>
              <Link to="/integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth" className="text-gray-600 hover:text-gray-900 transition-colors">
                Log in
              </Link>
              <Link 
                to="/auth?mode=signup" 
                className="btn-primary flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
                <Link to="/security" className="text-gray-600 hover:text-gray-900 transition-colors">Security</Link>
                <Link to="/integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
                <hr className="border-gray-200" />
                <Link to="/auth" className="text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
                <Link to="/auth?mode=signup" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Productivity{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Workspace
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transform your team's productivity with TaskFlow - a beautiful, AI-powered task management platform that adapts to your workflow.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/auth?mode=signup" 
                className="btn-primary text-lg px-8 py-3 flex items-center space-x-2 hover-lift"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="btn-secondary text-lg px-8 py-3 flex items-center space-x-2 hover-lift">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>5.0 rating</span>
              </div>
              <span>•</span>
              <span>10,000+ happy users</span>
              <span>•</span>
              <span>No credit card required</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="container-custom mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-strong border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-500">TaskFlow Dashboard</div>
              </div>
              <div className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop" 
                  alt="TaskFlow Dashboard Preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to stay productive
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost team collaboration.
            </p>
          </div>

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
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience with TaskFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have transformed their workflow with TaskFlow.
            </p>
            <Link 
              to="/auth?mode=signup"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">TaskFlow</span>
              </Link>
              <p className="text-gray-400 mb-4">
                The productivity workspace that adapts to your team's unique workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/api-docs" className="hover:text-white transition-colors">API Docs</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 TaskFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;