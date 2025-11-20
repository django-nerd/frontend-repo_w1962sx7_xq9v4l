import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 bg-blue-400/10 border border-blue-300/20 px-3 py-1 rounded-full mb-4">
            Premium Web Apps • React • FastAPI • Tailwind
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We design, build, and launch products your customers love
          </h1>
          <p className="text-slate-300 mt-4 text-lg">
            A boutique team crafting fast, accessible, and beautiful web experiences with a focus on business impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-md font-semibold border border-white/10 hover:bg-slate-700 transition-colors">
              See Our Work
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-400">
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
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
            <img src="/hero-showcase.png" alt="Showcase" className="rounded-lg w-full h-auto" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
