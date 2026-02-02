'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Smartphone, Database, Shield, Cog, Globe, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your unique business requirements',
      features: [
        'Full-stack web development',
        'Enterprise application development',
        'Legacy system modernization',
        'API development & integration',
      ],
      color: 'from-blue-500 to-blue-600',
      technologies: ['React', 'Node.js', 'Python', '.NET', 'Java']
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions & Migration',
      description: 'Scalable cloud infrastructure and seamless migration services',
      features: [
        'Cloud strategy & consulting',
        'Cloud-native application development',
        'Infrastructure as Code (IaC)',
        'Multi-cloud & hybrid solutions',
      ],
      color: 'from-purple-500 to-purple-600',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that delight users',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'Progressive Web Apps (PWA)',
      ],
      color: 'from-pink-500 to-pink-600',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS/Android']
    },
    {
      icon: <Database size={48} />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights and competitive advantage',
      features: [
        'Business intelligence solutions',
        'Data warehousing',
        'Predictive analytics',
        'Real-time dashboards',
      ],
      color: 'from-green-500 to-green-600',
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Apache Spark']
    },
    {
      icon: <Shield size={48} />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: [
        'Security audits & assessments',
        'Penetration testing',
        'Security architecture design',
        'Compliance management',
      ],
      color: 'from-red-500 to-red-600',
      technologies: ['OWASP', 'SIEM', 'IAM', 'Zero Trust', 'SOC']
    },
    {
      icon: <Cog size={48} />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic technology consulting to align IT with business objectives',
      features: [
        'Digital transformation',
        'Technology roadmap planning',
        'IT infrastructure optimization',
        'Vendor selection & management',
      ],
      color: 'from-orange-500 to-orange-600',
      technologies: ['TOGAF', 'ITIL', 'Agile', 'DevOps', 'Lean']
    },
    {
      icon: <Globe size={48} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'Web portal development',
      ],
      color: 'from-cyan-500 to-cyan-600',
      technologies: ['Next.js', 'React', 'Vue.js', 'WordPress', 'Shopify']
    },
    {
      icon: <Zap size={48} />,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Monitoring & logging',
        'Performance optimization',
      ],
      color: 'from-yellow-500 to-yellow-600',
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus']
    },
    {
      icon: <Users size={48} />,
      title: 'Staff Augmentation',
      description: 'Scale your team with our experienced professionals',
      features: [
        'Dedicated development teams',
        'Project-based resources',
        'Skill-specific hiring',
        'Flexible engagement models',
      ],
      color: 'from-indigo-500 to-indigo-600',
      technologies: ['Full-stack', 'Frontend', 'Backend', 'QA', 'DevOps']
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, challenges, and requirements',
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'Create a comprehensive plan and design that aligns with your vision',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and rigorously test the solution using agile methodologies',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launch your solution and provide ongoing maintenance and support',
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
                <Cog className="text-white" size={40} />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-dark-600 leading-relaxed mb-8">
              Comprehensive IT services and software solutions designed to accelerate your 
              digital transformation journey and drive business growth.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-dark-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-dark-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className={`p-6 bg-gradient-to-r ${service.color} bg-opacity-10`}>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="section-subtitle">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 -ml-4"></div>
                )}

                <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h4>
                  <p className="text-dark-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-dark-900 mb-6">
                Why Choose <span className="gradient-text">Intellosoft?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: 'Experienced team of certified professionals' },
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: 'Proven track record with 500+ successful projects' },
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: 'Agile methodologies for faster delivery' },
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: 'Transparent communication and reporting' },
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: 'Competitive pricing with no hidden costs' },
                  { icon: <CheckCircle className="text-primary-600" size={24} />, text: '24/7 support and maintenance services' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {item.icon}
                    <span className="text-lg text-dark-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                  alt="Team working"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all"
                >
                  View Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
