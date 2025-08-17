import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './components/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ParticleBackground />
        <ThemeToggle />
        <Navbar />
        <Hero />
        <About />
        <TechSkills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
