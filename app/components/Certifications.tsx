'use client'

import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  { name: "Arrays – CodeChef", date: "Nov 2024", issuer: "CodeChef" },
  { name: "Brainovision Hackathon – Data Science & ML", date: "Jun 2023", issuer: "Brainovision" },
  { name: "vHack '25 – Participation", date: "Mar 2025", issuer: "Vignan Institute" },
  { name: "Responsive Web Design", date: "Feb 2025", issuer: "freeCodeCamp" },
  { name: "Programming in Java", date: "Apr 2024", issuer: "NPTEL" },
  { name: "Python Essentials", date: "May 2024", issuer: "Cisco" },
  { name: "DevOps Tools", date: "Nov 2024", issuer: "Simplilearn" },
  { name: "Modern AI", date: "Apr 2025", issuer: "Cisco" },
  { name: "Azure Basics", date: "Nov 2024", issuer: "Microsoft" }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-dark-300">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start mb-4">
                  <Award className="w-8 h-8 text-primary-400 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <div className="flex items-center text-sm text-gray-400 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-sm text-gray-400">{cert.issuer}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
