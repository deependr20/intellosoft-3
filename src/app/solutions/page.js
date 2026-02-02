'use client'

import { motion } from 'framer-motion'
import { Building2, Rocket, ShoppingCart, Heart, GraduationCap, Landmark, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      icon: <Building2 size={48} />,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise software for large organizations',
      features: [
        'ERP system implementation',
        'CRM solutions',
        'Supply chain management',
        'Business process automation',
      ],
      color: 'from-blue-500 to-blue-600',
      industries: ['Manufacturing', 'Retail', 'Logistics']
    },
    {
      icon: <Rocket size={48} />,
      title: 'Startup Solutions',
      description: 'Agile MVP development to launch your startup fast',
      features: [
        'Rapid MVP development',
        'Product strategy consulting',
        'Scalable architecture',
        'Cost-effective solutions',
      ],
      color: 'from-purple-500 to-purple-600',
      industries: ['SaaS', 'E-commerce', 'FinTech']
    },
    {
      icon: <ShoppingCart size={48} />,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms to grow your online business',
      features: [
        'Multi-vendor marketplaces',
        'Payment gateway integration',
        'Inventory management',
        'Mobile commerce apps',
      ],
      color: 'from-green-500 to-green-600',
      industries: ['Retail', 'Fashion', 'Food & Beverage']
    },
    {
      icon: <Heart size={48} />,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant healthcare technology solutions',
      features: [
        'Electronic health records (EHR)',
        'Telemedicine platforms',
        'Patient management systems',
        'Healthcare analytics',
      ],
      color: 'from-red-500 to-red-600',
      industries: ['Hospitals', 'Clinics', 'Health Tech']
    },
    {
      icon: <GraduationCap size={48} />,
      title: 'Education Solutions',
      description: 'Modern learning management and education platforms',
      features: [
        'Learning management systems (LMS)',
        'Virtual classroom solutions',
        'Student information systems',
        'Educational content delivery',
      ],
      color: 'from-yellow-500 to-yellow-600',
      industries: ['Schools', 'Universities', 'EdTech']
    },
    {
      icon: <Landmark size={48} />,
      title: 'Financial Solutions',
      description: 'Secure fintech and banking software solutions',
      features: [
        'Digital banking platforms',
        'Payment processing systems',
        'Trading platforms',
        'Blockchain solutions',
      ],
      color: 'from-indigo-500 to-indigo-600',
      industries: ['Banking', 'Insurance', 'FinTech']
    },
  ]

  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'Leading Retail Chain',
      challenge: 'Outdated legacy system limiting online growth',
      solution: 'Modern cloud-based e-commerce platform with mobile apps',
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '99.9% uptime achieved'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'
    },
    {
      title: 'Healthcare Management System',
      client: 'Multi-Specialty Hospital',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Integrated EHR system with patient portal',
      results: ['40% faster patient processing', '80% reduction in paperwork', 'Improved patient satisfaction'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
    },
    {
      title: 'FinTech Mobile App',
      client: 'Digital Payment Startup',
      challenge: 'Need for secure, user-friendly payment solution',
      solution: 'Cross-platform mobile app with advanced security',
      results: ['1M+ downloads in 6 months', '4.8 star rating', 'Zero security breaches'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
    },
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Rocket className="text-white" size={40} />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-dark-600 leading-relaxed mb-8">
              Tailored software solutions designed for your industry's unique challenges and opportunities
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Discuss Your Project
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
              >
                <div className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-4 rounded-xl bg-gradient-to-br ${solution.color} text-white mb-6`}
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">{solution.title}</h3>
                  <p className="text-dark-600 mb-6">{solution.description}</p>

                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-dark-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-dark-500 mb-2">Ideal for:</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-dark-700 text-sm rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="section-subtitle">
              Real results from real clients across industries
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20"></div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="relative rounded-3xl shadow-2xl w-full"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    {study.client}
                  </div>
                  <h3 className="text-3xl font-bold text-dark-900 mb-4">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-2">Challenge:</h4>
                      <p className="text-dark-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-2">Solution:</h4>
                      <p className="text-dark-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span className="text-dark-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary-600 font-semibold flex items-center gap-2"
                    >
                      Start Your Success Story
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
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
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Solution
            </h2>
            <p className="text-xl mb-8">
              Every business is unique. Let's create a custom solution that fits your specific needs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
