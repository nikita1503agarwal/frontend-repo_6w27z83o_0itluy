import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-[#BDE3FF]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest font-orbitron text-[#0D0E1A]/70 uppercase">Virtual Idol Agency</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-orbitron font-extrabold leading-tight text-[#0D0E1A] drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
            HRCOME — Futuristic VTuber Talent Agency
          </h1>
          <p className="mt-6 text-[#0D0E1A]/80 text-lg sm:text-xl">
            We craft virtual idols with professional values, cutting-edge tech, and global entertainment impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/talents" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#6D5DFB] text-white font-semibold shadow-[0_10px_30px_rgba(109,93,251,0.5)] hover:brightness-110 transition">
              Meet Our Talents
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FF4FD8] text-white font-semibold shadow-[0_10px_30px_rgba(255,79,216,0.4)] hover:brightness-110 transition">
              Join Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-[radial-gradient(ellipse_at_center,rgba(109,93,251,0.35),transparent_60%)] blur-2xl" />
    </section>
  )
}
