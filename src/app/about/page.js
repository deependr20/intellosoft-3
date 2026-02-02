'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, Heart, Lightbulb, Shield, Zap, CheckCircle, Globe } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart size={40} />,
      title: 'Integrity',
      description: 'Transparency and honesty in every client interaction',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality work',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  const team = [
    {
      name: 'Gourav Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
      description: 'Visionary leader with 15+ years in software development'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
      description: 'Tech innovator specializing in cloud architecture'
    },
    {
      name: 'Rahul Verma',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
      description: 'Expert in agile methodologies and team leadership'
    },
    {
      name: 'Anjali Reddy',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
      description: 'Creative mind behind our user-centered designs'
    },
  ]

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2012', title: 'First Major Client', description: 'Secured partnership with leading enterprise organization' },
    { year: '2015', title: 'Team Expansion', description: 'Grew to 50+ talented professionals' },
    { year: '2018', title: 'International Presence', description: 'Expanded services to global markets' },
    { year: '2020', title: 'Innovation Award', description: 'Recognized for excellence in software development' },
    { year: '2024', title: '500+ Projects', description: 'Delivered successful solutions across industries' },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Users className="text-white" size={40} />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              About <span className="gradient-text">Intellosoft</span>
            </h1>
            <p className="text-xl text-dark-600 leading-relaxed">
              We are a modern, innovation-driven software consulting firm dedicated to helping businesses 
              leverage technology to accelerate growth, improve efficiency, and maintain a competitive edge 
              in today's rapidly evolving digital landscape.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-dark-600">
                <p className="text-lg">
                  Founded in 2009, Intellosoft Infotech began with a simple yet powerful vision: to bridge 
                  the gap between businesses and technology. What started as a small team of passionate developers 
                  has grown into a full-service software consulting firm serving clients across the globe.
                </p>
                <p className="text-lg">
                  Over the years, we've successfully delivered 500+ projects, helping businesses of all sizes 
                  achieve their digital transformation goals. Our commitment to excellence, innovation, and 
                  client success has made us a trusted technology partner.
                </p>
                <p className="text-lg">
                  Today, we continue to push boundaries, embrace new technologies, and deliver solutions that 
                  make a real difference in our clients' businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, 
                and create lasting value. We strive to be more than just a service provider—we aim to be a trusted 
                partner in our clients' success journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-12 text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be recognized globally as the leading software consulting firm that consistently delivers 
                exceptional value through innovation, expertise, and unwavering commitment to client success. 
                We envision a future where technology seamlessly transforms businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block p-4 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6`}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-dark-900 mb-3">{value.title}</h4>
                <p className="text-dark-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="section-subtitle">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-dark-900 mb-2">{member.name}</h4>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-dark-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Key milestones that shaped our story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[15px] top-8 w-0.5 h-full bg-gradient-to-b from-primary-600 to-secondary-600"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={16} />
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 ml-6">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">{milestone.title}</h4>
                  <p className="text-dark-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Success Story
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking for a technology partner or want to join our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all"
                >
                  Start a Project
                </motion.button>
              </Link>
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all"
                >
                  View Careers
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
