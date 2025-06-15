import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowLeft, 
  Users, 
  MessageSquare, 
  Heart, 
  Star,
  Github,
  Twitter,
  Youtube,
  BookOpen,
  Calendar,
  Award,
  Zap,
  Coffee
} from 'lucide-react';

const CommunityPage = () => {
  const communityStats = [
    { number: "50K+", label: "Community Members", icon: <Users className="w-6 h-6" /> },
    { number: "1.2K", label: "GitHub Stars", icon: <Star className="w-6 h-6" /> },
    { number: "500+", label: "Contributors", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Community Support", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  const platforms = [
    {
      name: "Discord",
      description: "Join our Discord server for real-time discussions, support, and community events.",
      members: "15,000+ members",
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      link: "#",
      featured: true
    },
    {
      name: "GitHub",
      description: "Contribute to our open-source projects, report issues, and suggest features.",
      members: "1,200+ stars",
      icon: <Github className="w-8 h-8 text-gray-900" />,
      link: "#",
      featured: false
    },
    {
      name: "Twitter",
      description: "Follow us for product updates, tips, and community highlights.",
      members: "25,000+ followers",
      icon: <Twitter className="w-8 h-8 text-blue-500" />,
      link: "#",
      featured: false
    },
    {
      name: "YouTube",
      description: "Watch tutorials, feature demos, and community-created content.",
      members: "8,000+ subscribers",
      icon: <Youtube className="w-8 h-8 text-red-600" />,
      link: "#",
      featured: false
    }
  ];

  const events = [
    {
      title: "TaskFlow Community Meetup",
      date: "January 25, 2025",
      time: "2:00 PM PST",
      type: "Virtual",
      description: "Monthly community meetup featuring product updates, user showcases, and Q&A.",
      attendees: 150
    },
    {
      title: "Productivity Workshop",
      date: "February 8, 2025",
      time: "11:00 AM EST",
      type: "Workshop",
      description: "Learn advanced TaskFlow features and productivity techniques from power users.",
      attendees: 75
    },
    {
      title: "Open Source Contribution Day",
      date: "February 15, 2025",
      time: "10:00 AM PST",
      type: "Hackathon",
      description: "Contribute to TaskFlow's open-source projects and help shape the future.",
      attendees: 50
    }
  ];

  const contributors = [
    {
      name: "Alex Chen",
      role: "Core Contributor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      contributions: "120+ commits",
      specialty: "Frontend Development"
    },
    {
      name: "Sarah Kim",
      role: "Documentation Lead",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      contributions: "50+ docs",
      specialty: "Technical Writing"
    },
    {
      name: "Marcus Johnson",
      role: "Community Moderator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      contributions: "1000+ helped",
      specialty: "User Support"
    },
    {
      name: "Elena Rodriguez",
      role: "Plugin Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      contributions: "15+ plugins",
      specialty: "Integrations"
    }
  ];

  const resources = [
    {
      title: "Community Guidelines",
      description: "Learn about our community standards and how to participate respectfully.",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      link: "#"
    },
    {
      title: "Contribution Guide",
      description: "Step-by-step guide to contributing code, documentation, and ideas.",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      link: "#"
    },
    {
      title: "Feature Requests",
      description: "Submit and vote on feature requests from the community.",
      icon: <Star className="w-6 h-6 text-purple-600" />,
      link: "#"
    },
    {
      title: "Bug Reports",
      description: "Report bugs and help us improve TaskFlow for everyone.",
      icon: <Award className="w-6 h-6 text-green-600" />,
      link: "#"
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
                <Users className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join Our{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Community
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with thousands of productivity enthusiasts, share ideas, get support, and help shape the future of TaskFlow.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>50K+ Members</span>
              <span>•</span>
              <span>Open Source</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>Global Community</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 text-blue-600">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Connect</h2>
            <p className="text-xl text-gray-600">
              Join us on your favorite platform and become part of the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className={`card p-8 hover-lift ${platform.featured ? 'ring-2 ring-blue-500' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {platform.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Active
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{platform.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{platform.members}</span>
                      <button className="btn-primary">Join Now</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join our community events to learn, share, and connect with fellow users.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <span>{event.time}</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="btn-primary">Register</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Heroes</h2>
            <p className="text-xl text-gray-600">
              Meet some of our amazing community contributors who help make TaskFlow better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={contributor.avatar} 
                  alt={contributor.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{contributor.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{contributor.role}</p>
                <p className="text-gray-600 text-sm mb-2">{contributor.contributions}</p>
                <p className="text-gray-500 text-xs">{contributor.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Resources</h2>
            <p className="text-xl text-gray-600">
              Everything you need to get involved and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Involved?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Whether you're a developer, designer, writer, or just passionate about productivity, there's a place for you in our community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-100">Contribute to open-source projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-100">Help other users in our forums</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-100">Share your productivity tips and tricks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-100">Participate in community events</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Coffee className="w-16 h-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Join the Conversation</h3>
                <p className="text-blue-100 mb-8">
                  Connect with like-minded individuals and be part of something amazing.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                    Join Discord Community
                  </button>
                  <button className="w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    View on GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;