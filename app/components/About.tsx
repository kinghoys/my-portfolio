'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-300">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm Y Hoysala Patel, a Computer Science Engineering student and freelance developer who thrives on turning ideas into impact. From freelanced projects to personal innovations, I bring code to life with creativity and precision.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Tech isn't just my field—it's my playground, and I'm ready to build solutions that make a real difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary-400 mb-2">4+</div>
                <div className="text-gray-300">Freelance Projects</div>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary-400 mb-2">8+</div>
                <div className="text-gray-300">Personal Projects</div>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary-400 mb-2">9+</div>
                <div className="text-gray-300">Certifications</div>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
                <div className="text-gray-300">Internships</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
