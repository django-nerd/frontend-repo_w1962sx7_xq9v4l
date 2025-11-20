import { motion } from 'framer-motion'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="pt-6">
      <section className="relative overflow-hidden py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Start a Project</h1>
          <p className="text-slate-300 mt-3">Tell us about your idea — we’ll respond within one business day.</p>
        </motion.div>
      </section>
      <Contact />
    </div>
  )
}
