'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Eye, X } from 'lucide-react'

const projects = [
  // ✅ Freelance Projects
  {
    title: "ZPPSS African School",
    category: "Freelance",
    description: "Built & maintained a MERN-stack website for school management. Achieved 95% device compatibility & 20% faster load times.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://zppss.vercel.app",
    github: "https://github.com/kinghoys/zppss",
    image: "/zppss-screenshot.png",
    category: "Freelance"
  },
  {
    title: "MarkPro Premium",
    category: "Freelance",
    description: "Advanced Flutter application for educational institutions with premium features for managing student marks, records, and analytics.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://markpro-plus.web.app/",
    github: "https://github.com/kinghoys/MarkPro-premium",
    image: "/markpro-screenshot.png",
    category: "Freelance"
  },
  {
    title: "Vizag Travels",
    category: "Freelance",
    description: "A modern travel booking platform offering tours, rentals, and hotels with curated packages and responsive design.",
    tech: ["React.js", "Material-UI", "Context API"],
    link: "https://vizag-travels-booking.vercel.app",
    github: "https://github.com/kinghoys/vizag-travels",
    image: "/vizag-travels-screenshot.png",
    category: "Freelance"
  },
  {
    title: "Brushes & Palettes",
    category: "Freelance",
    description: "An art e-commerce website with visualization tool for testing artwork in real spaces. Features custom commissions and framing.",
    tech: ["Next.js 14", "React", "Tailwind CSS"],
    link: "https://brushes-n-palettes.vercel.app",
    github: "https://github.com/kinghoys/Brushes-N-Palettes",
    image: "/brushes-palets-screenshot.png",
    category: "Freelance"
  },

  // ✅ Personal Projects (Main 3)
  {
    title: "Offline AI Chatbot",
    category: "Personal",
    description: "A self-contained AI assistant that runs 100% offline. Features PDF/DOCX analysis, customizable UI, privacy-first design.",
    tech: ["JavaScript", "Node.js", "Ollama (LLaMA 3)"],
    link: "https://offline-ai-chatbot-demo.netlify.app",
    github: "https://github.com/kinghoys/Offline-AI-Chatbot",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Offline+AI+Chatbot",
    category: "Personal"
  },
  {
    title: "Smart Air Quality Monitoring",
    category: "Personal",
    description: "Real-time air quality monitoring platform combining mobile + fixed sensors with healthcare integration and interactive visualizations.",
    tech: ["React.js", "Framer Motion", "Styled Components", "Interactive Charts"],
    link: "https://air-quality-demo.netlify.app",
    github: "https://github.com/kinghoys/Air-Quality-Monitor",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Air+Quality+Monitor",
    category: "Personal"
  },
  {
    title: "NeuroVista + EduVerse",
    category: "Personal",
    description: "Immersive VR learning platform where neuroscience meets VR. 3D, AI, and VR-powered education transforming STEM learning.",
    tech: ["React", "Three.js", "Material-UI", "Framer Motion"],
    link: "https://neurovista-demo.netlify.app",
    github: "https://github.com/kinghoys/NeuroVista-EduVerse",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=NeuroVista+EduVerse",
    category: "Personal"
  },

  // ✅ Side Projects (4-5 Projects)
  {
    title: "Advance Document Processor",
    category: "Side",
    description: "Intelligent document processing tool for handling and analyzing structured/unstructured text efficiently with automation.",
    tech: ["Python", "NLP", "Automation Scripts"],
    link: "https://document-processor-demo.netlify.app",
    github: "https://github.com/kinghoys/Advance-Document-Processor",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Document+Processor",
    category: "Side"
  },
  {
    title: "New Way of Voting",
    category: "Side",
    description: "AI-driven voting solution enhancing transparency, scalability, and security in elections with blockchain concepts.",
    tech: ["Blockchain Concepts", "AI Models", "Web Integration"],
    link: "https://voting-system-demo.netlify.app",
    github: "https://github.com/kinghoys/New-Way-of-Voting",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=AI+Voting+System",
    category: "Side"
  },
  {
    title: "Design System",
    category: "Side",
    description: "Reusable design system for building consistent, scalable UI components across multiple projects with modern patterns.",
    tech: ["React", "Tailwind CSS", "Styled Components"],
    link: "https://design-system-demo.netlify.app",
    github: "https://github.com/kinghoys/Design-System",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Design+System",
    category: "Side"
  },
  {
    title: "LawGPT",
    category: "Side",
    description: "Legal AI assistant for answering law-related queries using document-trained models with custom prompt engineering.",
    tech: ["LLMs", "NLP", "Custom Prompt Engineering"],
    link: "https://lawgpt-demo.netlify.app",
    github: "https://github.com/kinghoys/LawGPT",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=LawGPT",
    category: "Side"
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work with live demos and GitHub repositories
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Freelance', 'Personal', 'Side Project'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 hover-lift flex flex-col h-full group"
    >
      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}