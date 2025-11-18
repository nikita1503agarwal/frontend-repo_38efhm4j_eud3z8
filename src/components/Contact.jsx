import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Let’s build something remarkable
            </motion.h2>
            <p className="text-slate-300/80 mb-6">
              Tell us about your goals and timelines. We’ll reply within 24 hours with next steps.
            </p>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-200 text-sm">Name</label>
                    <input required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="text-slate-200 text-sm">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="jane@company.com" />
                  </div>
                </div>
                <div>
                  <label className="text-slate-200 text-sm">Project type</label>
                  <select className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40">
                    <option className="bg-slate-900">Product build</option>
                    <option className="bg-slate-900">Brand & website</option>
                    <option className="bg-slate-900">AI & automation</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-200 text-sm">Message</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Tell us a bit about the project" />
                </div>
                <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/40 transition">
                  {sent ? 'Thanks! We’ll be in touch' : 'Send message'}
                </button>
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-indigo-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur">
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white">hello@riandigits.com</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">HQ</p>
                  <p className="text-white">Remote — Global</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />
                <p className="text-slate-300/80 text-sm">
                  We’re a distributed team of strategists, designers and engineers shipping at startup speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
