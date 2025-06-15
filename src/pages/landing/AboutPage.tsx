import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Nguyễn Xuân Lĩnh",
      role: "CEO & Co-founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenXuanLinh&backgroundColor=b6e3f4&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      bio: "Former VP of Product at Slack with 10+ years in productivity software."
    },
    {
      name: "Trần Khánh",
      role: "CTO & Co-founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranKhanh&backgroundColor=c0aede&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Blue01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      bio: "Ex-Google engineer passionate about building scalable, user-friendly platforms."
    },
    {
      name: "Ngô Lập",
      role: "Head of Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=NgoLap&backgroundColor=ffd93d&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      bio: "Award-winning designer focused on creating intuitive user experiences."
    },
    {
      name: "Ngô Nhân",
      role: "Head of Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=NgoNhan&backgroundColor=ffdfbf&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      bio: "Full-stack engineer with expertise in distributed systems and AI."
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "People First",
      description: "We believe great software starts with understanding people's needs and creating solutions that truly help them succeed."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Focus on Impact",
      description: "Every feature we build is designed to have a meaningful impact on productivity and team collaboration."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality product with attention to every detail."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Passion",
      description: "We're passionate about productivity and helping teams achieve their goals more efficiently."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "TaskFlow was founded with a vision to revolutionize team productivity."
    },
    {
      year: "2021",
      title: "First 1,000 Users",
      description: "Reached our first milestone of 1,000 active users within 6 months."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M Series A to accelerate product development and team growth."
    },
    {
      year: "2023",
      title: "100,000 Users",
      description: "Crossed 100,000 users and launched enterprise features."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched AI-powered features to enhance productivity and automation."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding globally with offices in Europe and Asia."
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
              Building the Future of{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Productivity
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're on a mission to help teams work smarter, not harder. Learn about our story, values, and the people behind TaskFlow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe that great work happens when teams have the right tools to collaborate effectively. TaskFlow was born from the frustration of juggling multiple apps, losing track of important tasks, and struggling with inefficient workflows.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to create a unified workspace that adapts to how teams actually work, not the other way around. We're building more than just a task manager – we're creating a platform that empowers teams to achieve their best work.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people building the future of productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform productivity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100K+", label: "Active Users" },
              { number: "50+", label: "Team Members" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of the productivity revolution. Start using TaskFlow today and experience the future of team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/auth?mode=signup"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover-lift text-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/careers"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;