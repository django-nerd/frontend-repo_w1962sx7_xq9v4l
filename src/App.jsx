import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Flames Studio — Crafting high-impact web apps.
      </footer>
    </div>
  )
}

export default App
