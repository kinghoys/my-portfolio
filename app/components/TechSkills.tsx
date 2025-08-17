'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Database, Smartphone, Cloud, Brain, Palette } from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  color: string
  description: string
}

const skills: Skill[] = [
  {
    name: 'React/Next.js',
    level: 95,
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-600',
    description: 'Modern web development with cutting-edge features'
  },
  {
    name: 'Node.js',
    level: 90,
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-green-400 to-green-600',
    description: 'Scalable backend solutions and APIs'
  },
  {
    name: 'Python',
    level: 85,
    icon: <Brain className="w-6 h-6" />,
    color: 'from-yellow-400 to-yellow-600',
    description: 'AI/ML development and data processing'
  },
  {
    name: 'Flutter',
    level: 88,
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-cyan-400 to-cyan-600',
    description: 'Cross-platform mobile applications'
  },
  {
    name: 'MongoDB',
    level: 92,
    icon: <Database className="w-6 h-6" />,
    color: 'from-emerald-400 to-emerald-600',
    description: 'NoSQL database design and optimization'
  },
  {
    name: 'UI/UX Design',
    level: 87,
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-400 to-purple-600',
    description: 'Modern, responsive and user-centric designs'
  }
]

export default function TechSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hover over each skill to see detailed proficiency levels and descriptions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="glass-card p-6 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                <motion.p
                  className="text-sm text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
            animate={{ x: [0, -80, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  )
}
