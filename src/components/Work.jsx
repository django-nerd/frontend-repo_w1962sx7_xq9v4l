import { useEffect, useState } from 'react'

export default function Work() {
  const [projects, setProjects] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/projects`).then(r => r.json()).then(setProjects).catch(() => {})
  }, [])

  return (
    <section id="work" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-blue-300 hover:text-white transition-colors">Work with us</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 transition-colors">
              {p.image && <img src={p.image} alt={p.title} className="aspect-video object-cover w-full" />}
              <div className="p-4">
                <h3 className="text-white font-semibold group-hover:text-blue-200 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.description}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-slate-300">{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-slate-400">No projects yet. Use the seed action in the admin or add your own.</div>
          )}
        </div>
      </div>
    </section>
  )
}
