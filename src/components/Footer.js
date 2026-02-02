'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
  ]

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Software Development', href: '/services' },
        { name: 'Cloud Solutions', href: '/services' },
        { name: 'Mobile Development', href: '/services' },
        { name: 'IT Consulting', href: '/services' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions' },
        { name: 'Startups', href: '/solutions' },
        { name: 'Digital Transformation', href: '/solutions' },
        { name: 'Custom Software', href: '/solutions' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
      ]
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container-custom section-padding">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center">
                  <img src="/intellosoft-logosss.png" alt="Intellosoft logo" className="block w-auto h-16 md:h-20 lg:h-24 object-contain" />
                </div>
                <span className="sr-only">Intellosoft Infotech</span>
              </div>
              
              <p className="text-lg gradient-text font-semibold">
                Intelligent Solutions. Infinite Possibilities.
              </p>
              
              <p className="text-gray-400">
                Leading software consulting firm providing cutting-edge IT services and innovative solutions to transform businesses.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    Block - 1, Mahendra Business Square,<br />
                    Bawadiya Kalan, Bhopal, MP 462039
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary-400" />
                  <a href="mailto:gourav@intellosoft.io" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    gourav@intellosoft.io
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex  md:flex-row flex-col md:items-start items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 w-fit rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 focus:border-primary-500 focus:outline-none transition-colors text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r w-fit md:mt-0 mt-2 from-primary-600 to-secondary-600 rounded-full font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © {currentYear} Intellosoft Infotech Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}