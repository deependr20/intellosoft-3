'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Visit Us',
      content: ['Block - 1, Mahendra Business Square', 'Bawadiya Kalan, Bhopal', 'Madhya Pradesh 462039, India'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      content: ['gourav@intellosoft.io', 'info@intellosoft.io'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      content: ['Available during business hours', 'Mon - Fri: 9:00 AM - 6:00 PM IST'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock size={28} />,
      title: 'Business Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    },
  ]

  const services = [
    'Custom Software Development',
    'Cloud Solutions',
    'Mobile App Development',
    'Data Analytics',
    'Cybersecurity',
    'IT Consulting',
    'Web Development',
    'DevOps',
    'Other'
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
                <MessageSquare className="text-white" size={40} />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-dark-600 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and 
              we'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 card-hover"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {info.icon}
                </div>
                <h4 className="text-lg font-bold text-dark-900 mb-3">{info.title}</h4>
                {info.content.map((line, idx) => (
                  <p key={idx} className="text-dark-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-dark-900 mb-2">Send us a Message</h3>
                <p className="text-dark-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-dark-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-dark-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-64">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary-600 mx-auto mb-4" />
                    <p className="text-dark-700 font-semibold">Bhopal, India</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl shadow-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Quick Response</h4>
                <p className="mb-6 text-white/90">
                  Need immediate assistance? We're here to help!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Email Response</p>
                      <p className="font-semibold">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Phone Support</p>
                      <p className="font-semibold">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h4 className="text-2xl font-bold text-dark-900 mb-4">Why Contact Us?</h4>
                <ul className="space-y-3">
                  {[
                    'Free consultation',
                    'No obligation quote',
                    'Expert advice',
                    'Flexible engagement',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-dark-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. A typical web application takes 3-6 months, while mobile apps take 4-8 months. We provide detailed timelines during consultation.'
              },
              {
                q: 'Do you work with startups?',
                a: 'Absolutely! We love working with startups and offer flexible engagement models and competitive pricing to help bring your vision to life.'
              },
              {
                q: 'What is your development process?',
                a: 'We follow agile methodology with regular sprints, daily standups, and continuous client involvement. This ensures transparency and timely delivery.'
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly after launch.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-dark-900 mb-2">{faq.q}</h4>
                <p className="text-dark-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
