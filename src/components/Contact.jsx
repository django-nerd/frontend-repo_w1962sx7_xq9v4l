import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', budget: '', timeline: '', service: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${baseUrl}/api/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: data.message, error: null })
      setForm({ name: '', email: '', company: '', phone: '', budget: '', timeline: '', service: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tell us about your project</h2>
            <p className="text-slate-300 mt-3">Fill out the form and we’ll schedule a discovery call within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>• Average 2–4 week delivery</li>
              <li>• Fixed-price, milestone-based contracts</li>
              <li>• Transparent communication and weekly demos</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 p-6 bg-slate-900/80">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required value={form.name} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input name="email" type="email" required value={form.email} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Company</label>
                <input name="company" value={form.company} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500" placeholder="+1 555 123 4567" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Budget</label>
                <select name="budget" value={form.budget} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option value="">Select</option>
                  <option>Under $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Timeline</label>
                <select name="timeline" value={form.timeline} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option value="">Select</option>
                  <option>ASAP</option>
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Service</label>
                <select name="service" value={form.service} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white">
                  <option value="">Select</option>
                  <option>Design & Frontend</option>
                  <option>Web App Development</option>
                  <option>API & Integrations</option>
                  <option>Product Strategy</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Project Details</label>
                <textarea name="message" rows="4" value={form.message} onChange={onChange} className="w-full bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500" placeholder="Share goals, scope, and any references..." />
              </div>
            </div>
            <button disabled={status.loading} className="mt-4 w-full bg-white text-slate-900 font-semibold px-4 py-3 rounded-md hover:bg-slate-100 transition-colors">
              {status.loading ? 'Sending...' : 'Request Proposal'}
            </button>
            {status.success && <p className="mt-3 text-green-300">{status.success}</p>}
            {status.error && <p className="mt-3 text-red-300">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
