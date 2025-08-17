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
    github: "https://github.com/kinghoys/schoolwebsite",
    image: "/zppss.png"
  },
  {
    title: "MarkPro Premium",
    category: "Freelance",
    description: "Advanced Flutter application for educational institutions with premium features for managing student marks, records, and analytics.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://markpro-plus.web.app/",
    github: "https://github.com/kinghoys/MarkPro-premium",
    image: "/markpro-screenshot.png"
  },
  {
    title: "Vizag Travels",
    category: "Freelance",
    description: "A modern travel booking platform offering tours, rentals, and hotels with curated packages and responsive design.",
    tech: ["React.js", "Material-UI", "Context API"],
    link: "https://vizag-travels-booking.vercel.app",
    github: "https://github.com/kinghoys/vizag-travels",
    image: "/vizag-travels-screenshot.png"
  },
  {
    title: "Brushes & Palettes",
    category: "Freelance",
    description: "An art e-commerce website with visualization tool for testing artwork in real spaces. Features custom commissions and framing.",
    tech: ["Next.js 14", "React", "Tailwind CSS"],
    link: "https://brushes-n-palettes.vercel.app",
    github: "https://github.com/kinghoys/Brushes-N-Palettes",
    image: "/brushes-palets-screenshot.png"
  },

  // ✅ Personal Projects (Main 3)
  {
    title: "Offline AI Chatbot",
    category: "Personal",
    description: "A self-contained AI assistant that runs 100% offline. Features PDF/DOCX analysis, customizable UI, privacy-first design.",
    tech: ["JavaScript", "Node.js", "Ollama (LLaMA 3)"],
    link: "https://github.com/kinghoys/offline-chatbot",
    github: "https://github.com/kinghoys/offline-chatbot",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Offline+AI+Chatbot"
  },
  {
    title: "Smart Air Quality Monitoring",
    category: "Personal",
    description: "Real-time air quality monitoring platform combining mobile + fixed sensors with healthcare integration and interactive visualizations.",
    tech: ["React.js", "Framer Motion", "Styled Components", "Interactive Charts"],
    link: "https://air-quality-monitor-joae.vercel.app/",
    github: "https://github.com/kinghoys/Air-Quality-Monitor",
    image: "/air-quality-monitor.png"
  },
  {
    title: "NeuroVista + EduVerse",
    category: "Personal",
    description: "Immersive VR learning platform where neuroscience meets VR. 3D, AI, and VR-powered education transforming STEM learning.",
    tech: ["React", "Three.js", "Material-UI", "Framer Motion"],
    link: "https://github.com/kinghoys/Neuro-Vista",
    github: "https://github.com/kinghoys/Neuro-Vista",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=NeuroVista+EduVerse"
  },

  // ✅ Side Projects (4-5 Projects)
  {
    title: "Advance Document Processor",
    category: "Side",
    description: "Intelligent document processing tool for handling and analyzing structured/unstructured text efficiently with automation.",
    tech: ["Python", "NLP", "Automation Scripts"],
    link: "https://github.com/kinghoys/advance-docuement-processor",
    github: "https://github.com/kinghoys/advance-docuement-processor",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Document+Processor"
  },
  {
    title: "New Way of Voting",
    category: "Side",
    description: "AI-driven voting solution enhancing transparency, scalability, and security in elections with blockchain concepts.",
    tech: ["Blockchain Concepts", "AI Models", "Web Integration"],
    link: "https://github.com/kinghoys/updated-ai-voting-system",
    github: "https://github.com/kinghoys/updated-ai-voting-system",
    image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=AI+Voting+System"
  },
  {
    title: "Design System",
    category: "Side",
    description: "Reusable design system for building consistent, scalable UI components across multiple projects with modern patterns.",
    tech: ["React", "Tailwind CSS", "Styled Components"],
    link: "https://design-system-hoys.vercel.app/",
    github: "https://github.com/kinghoys/Design-System",
    image: "/desing-sysytem.png"
  },
  {
    title: "LawGPT",
    category: "Side",
    description: "Legal AI assistant for answering law-related queries using document-trained models with custom prompt engineering.",
    tech: ["LLMs", "NLP", "Custom Prompt Engineering"],
    link: "https://huggingface.co/spaces/harshitv804/LawGPT",
    github: "https://github.com/kinghoys/LawGPT",
    image: "/law-gpt.png"
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 hover-lift flex flex-col h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Hover Preview */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Fast Hover Preview */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Live Preview</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 mt-auto">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>

      {/* Fast Modal on Hover */}
      {isHovered && project.link && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[80vh] overflow-hidden"
            onMouseEnter={(e) => {
              e.stopPropagation();
              setIsHovered(true);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setIsHovered(false);
            }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">{project.title} - Live Preview</h3>
              <div className="flex items-center space-x-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={() => setIsHovered(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative w-full h-[60vh]">
              <iframe
                src={project.link}
                className="w-full h-full border-0"
                title={project.title}
                sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}