import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/90 bg-blue-400/10 border border-blue-300/30 px-3 py-1 rounded-full mb-4">
            Premium Web Apps • React • FastAPI • Tailwind
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We design, build, and launch products your customers love
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-300 mt-4 text-lg">
            A boutique team crafting fast, accessible, and beautiful web experiences with a focus on business impact.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 text-slate-900 px-5 py-3 rounded-md font-semibold hover:from-cyan-200 hover:via-blue-300 hover:to-indigo-400 transition-colors">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/work" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-md font-semibold border border-white/10 hover:bg-slate-700 transition-colors">
              See Our Work
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 flex items-center gap-6 text-slate-300">
            <div>
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-xs uppercase tracking-widest">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-xs uppercase tracking-widest">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5.0</p>
              <p className="text-xs uppercase tracking-widest">Avg Rating</p>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <Spline scene="https://prod.spline.design/6jF2C12H8r4d0b2n/scene.splinecode" />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
