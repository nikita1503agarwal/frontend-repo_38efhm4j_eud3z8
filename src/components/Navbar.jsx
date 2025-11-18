import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative grid place-items-center">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 blur-sm opacity-80 group-hover:opacity-100 transition" />
                <Sparkles className="absolute h-4 w-4 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Rian <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">Digits</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-2">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition"
              >
                Start a project
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-slate-200 hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-1">
              <NavLink href="#services" onClick={close}>Services</NavLink>
              <NavLink href="#work" onClick={close}>Work</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <a
                href="#contact"
                onClick={close}
                className="block text-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition"
              >
                Start a project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
