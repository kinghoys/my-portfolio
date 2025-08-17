'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yhoysala2244@gmail.com",
      href: "mailto:yhoysala2244@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9177939246",
      href: "tel:+919177939246"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "y-hoysala-patel",
      href: "https://linkedin.com/in/y-hoysala-patel"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kinghoys",
      href: "https://github.com/kinghoys"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <info.icon className="w-5 h-5 text-primary-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-400 focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
