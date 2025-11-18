import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pt-28">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to improve text contrast; pointer-events-none so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950/80" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]"
              >
                Building digital experiences from the future
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-6 text-lg sm:text-xl text-slate-200/85 max-w-2xl"
              >
                Rian Digits is a technology-first agency crafting immersive products, brands, and platforms. We blend strategy, design, and code to ship work that feels one step ahead.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/40 transition"
                >
                  Start a project
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 backdrop-blur transition"
                >
                  See our work
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative hidden lg:block">
                <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-indigo-500/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { k: 'Years', v: '7+' },
                      { k: 'Products', v: '120+' },
                      { k: 'Clients', v: '60+' },
                    ].map((item) => (
                      <div key={item.k} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                        <p className="text-2xl font-bold text-white">{item.v}</p>
                        <p className="text-slate-300/70 text-sm">{item.k}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
