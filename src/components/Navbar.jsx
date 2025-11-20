import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-[#0D0E1A] bg-white/90' : 'text-white/90 hover:text-white'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-[#6D5DFB] to-[#FF4FD8] shadow-[0_0_20px_rgba(109,93,251,0.6)]" />
            <span className="text-xl font-orbitron tracking-widest text-white drop-shadow">HRCOME</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/talents" className={linkClasses}>Talents</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact / Apply</NavLink>
          </nav>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2 bg-white/20 backdrop-blur-md rounded-xl p-3">
              <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/talents" className={linkClasses} onClick={() => setOpen(false)}>Talents</NavLink>
              <NavLink to="/about" className={linkClasses} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/contact" className={linkClasses} onClick={() => setOpen(false)}>Contact / Apply</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
