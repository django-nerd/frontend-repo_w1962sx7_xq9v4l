import { Lightbulb, Palette, Server } from 'lucide-react'
import { useEffect, useState } from 'react'

const IconMap = { Lightbulb, Palette, Server }

export default function Services() {
  const [services, setServices] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/services`).then(r => r.json()).then(setServices).catch(() => {})
  }, [])

  return (
    <section id="services" className="py-20 border-t border-white/10 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = IconMap[s.icon] || Lightbulb
            return (
              <div key={idx} className="rounded-xl border border-white/10 p-6 bg-slate-900/60">
                <Icon className="w-8 h-8 text-blue-300" />
                <h3 className="text-white font-semibold mt-3">{s.name}</h3>
                <p className="text-slate-400 text-sm mt-2">{s.description}</p>
              </div>
            )
          })}
          {services.length === 0 && (
            <div className="col-span-full text-slate-400">Add services in the admin or via seed to display here.</div>
          )}
        </div>
      </div>
    </section>
  )
}
