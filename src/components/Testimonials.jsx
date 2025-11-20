import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/testimonials`).then(r => r.json()).then(setItems).catch(() => {})
  }, [])

  return (
    <section id="testimonials" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Clients love working with us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <figure key={idx} className="rounded-xl border border-white/10 p-6 bg-slate-900/60">
              <blockquote className="text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                {t.avatar && <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name} />}
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  {t.role && <p className="text-slate-400 text-sm">{t.role}</p>}
                </div>
              </figcaption>
            </figure>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-slate-400">Add testimonials in the admin or via seed to display here.</div>
          )}
        </div>
      </div>
    </section>
  )
}
