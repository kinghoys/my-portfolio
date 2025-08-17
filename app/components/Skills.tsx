'use client'

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Cloud, Brain, Settings } from 'lucide-react'

const skills = [
  {
    category: "Programming & Development",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "Dart"]
  },
  {
    category: "Frameworks & Libraries",
    icon: Settings,
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS"]
  },
  {
    category: "Databases & Backend",
    icon: Database,
    skills: ["SQL", "DBMS", "Firebase"]
  },
  {
    category: "Tools & Platforms",
    icon: Cloud,
    skills: ["Git", "GitHub"]
  },
  {
    category: "Core Strengths",
    icon: Brain,
    skills: ["Problem Solving", "Clean Code", "Fast Learning"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-primary-400 mr-3" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
