'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, Building } from 'lucide-react'

const experiences = [
  {
    title: "Web Development Intern",
    company: "Web Development Company",
    duration: "1 Month",
    description: "Contributed to frontend & backend web projects, learned professional dev workflows, improved skills in React & database integration.",
    type: "Internship"
  },
  {
    title: "Research Intern",
    company: "BDL (DRDL) - Bharat Dynamics Limited",
    duration: "1 Month",
    description: "Gained exposure to defense tech systems and contributed to small-scale development tasks. Learned secure system design principles and problem-solving in critical environments.",
    type: "Internship"
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Independent",
    duration: "Ongoing",
    description: "Independently delivered 4 freelance projects (school website, education app, travel platform, and art gallery). Worked with clients to design, build, and deploy scalable solutions.",
    type: "Freelance"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 md:p-8 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{experience.title}</h3>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      experience.type === 'Internship' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-green-500/20 text-green-300'
                    }`}>
                      {experience.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
