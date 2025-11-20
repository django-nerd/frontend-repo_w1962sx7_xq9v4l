import { motion } from 'framer-motion'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <div className="pt-6">
      <section className="relative overflow-hidden py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
          <p className="text-slate-300 mt-3">From strategy to ship — full-stack product development tailored to your goals.</p>
        </motion.div>
      </section>
      <Services />
    </div>
  )
}
