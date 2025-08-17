'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-300 border-t border-white/10">
      <div className="container-padding max-w-7xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-gray-400">Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400">by Y Hoysala Patel</span>
          </div>
          
          <p className="text-gray-400">
            © {currentYear} Y Hoysala Patel. All rights reserved.
          </p>
          
          <div className="mt-4 text-sm text-gray-500">
            Ready to bring your ideas to life? Let's create something amazing together!
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
