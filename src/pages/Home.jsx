import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div>
      <motion.div style={{ y }} className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </motion.div>
      <Hero />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}
