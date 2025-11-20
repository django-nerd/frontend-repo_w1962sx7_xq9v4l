import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/services', label: 'Services' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-md shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold">Flames Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-slate-200/80 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-md font-medium hover:bg-slate-100 transition-colors">
            Start a Project
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-slate-200/80 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-md font-medium hover:bg-slate-100 transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
