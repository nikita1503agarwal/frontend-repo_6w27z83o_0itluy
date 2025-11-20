import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-[#0D0E1A] bg-white/90' : 'text-[#0D0E1A]/80 hover:text-[#0D0E1A]'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Glass/neon boxed header */}
        <div className="rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(109,93,251,0.25)]">
          <div className="flex items-center justify-between h-14 px-3 sm:px-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-[#6D5DFB] to-[#FF4FD8] shadow-[0_0_20px_rgba(109,93,251,0.6)]" />
              <span className="text-xl font-orbitron tracking-widest text-[#0D0E1A]">HRCOME</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={linkClasses}>Home</NavLink>
              <NavLink to="/talents" className={linkClasses}>Talent</NavLink>
              <NavLink to="/staff" className={linkClasses}>Staff</NavLink>
              <NavLink to="/about" className={linkClasses}>About</NavLink>
              <NavLink to="/contact" className={linkClasses}>Contact/Apply</NavLink>
            </nav>

            <button className="md:hidden p-2 text-[#0D0E1A]" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-3 sm:px-4 pb-3">
              <div className="flex flex-col gap-2 bg-white/30 backdrop-blur-md rounded-xl p-3 border border-white/50">
                <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/talents" className={linkClasses} onClick={() => setOpen(false)}>Talent</NavLink>
                <NavLink to="/staff" className={linkClasses} onClick={() => setOpen(false)}>Staff</NavLink>
                <NavLink to="/about" className={linkClasses} onClick={() => setOpen(false)}>About</NavLink>
                <NavLink to="/contact" className={linkClasses} onClick={() => setOpen(false)}>Contact/Apply</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
