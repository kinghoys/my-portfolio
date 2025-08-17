'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-700/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-700/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image & Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-50" />
                <div className="relative w-full h-full rounded-full border-4 border-primary-400 overflow-hidden">
                  <img
                    src="/profile-image.jpg"
                    alt="Y Hoysala Patel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/api/placeholder/400/400'
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Y Hoysala Patel</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Freelance Developer & AI Innovator
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              I Don't Just Code, I Create Value | The Candidate You Don't Want to Miss
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-400 text-primary-400 px-8 py-3 rounded-full font-semibold hover:bg-primary-400 hover:text-white transition-all"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Hire Me
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 mt-8"
            >
              <motion.a
                href="https://github.com/kinghoys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/y-hoysala-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="mailto:yhoysala2244@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">9+</div>
              <div className="text-gray-300">Certifications</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
              <div className="text-gray-300">Internships</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}