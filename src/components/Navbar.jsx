import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-300 to-sky-200 border border-white/60 shadow-inner" />
            <span className="font-semibold tracking-tight text-zinc-800">Clear7Flow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
            >
              Start a project
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-zinc-900 text-white px-4 py-2 text-sm text-center"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
