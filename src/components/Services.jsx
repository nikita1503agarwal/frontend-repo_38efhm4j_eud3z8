import { Code2, Rocket, Palette, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Product Engineering',
    icon: Code2,
    desc: 'Full‑stack web and mobile apps built with modern architectures and relentless attention to detail.'
  },
  {
    title: 'Brand & Visual',
    icon: Palette,
    desc: 'Identity systems, design languages and interfaces that feel premium and unmistakably you.'
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    desc: 'From prototypes to production—integrate AI to accelerate ops and unlock new experiences.'
  },
  {
    title: 'Launch & Growth',
    icon: Rocket,
    desc: 'Go‑to‑market, optimization and iteration to scale your product with confidence.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            What we do
          </motion.h2>
          <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
            Strategy, design and engineering working as one—turning ambitious ideas into polished realities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur hover:border-fuchsia-500/30 hover:bg-slate-900/60 transition"
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative h-12 w-12 grid place-items-center rounded-xl bg-white/5 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300/80 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
