import { motion } from 'framer-motion'
import Testimonials from '../components/Testimonials'

export default function TestimonialsPage() {
  return (
    <div className="pt-6">
      <section className="relative overflow-hidden py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Testimonials</h1>
          <p className="text-slate-300 mt-3">Real results and lasting partnerships — hear it from our clients.</p>
        </motion.div>
      </section>
      <Testimonials />
    </div>
  )
}
