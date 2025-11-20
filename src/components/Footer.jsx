export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-orbitron text-[#0D0E1A]">HRCOME</div>
            <p className="mt-2 text-sm text-[#0D0E1A]/70">Futuristic VTuber agency crafting virtual idols for a global audience.</p>
          </div>
          <div>
            <div className="font-semibold text-[#0D0E1A]">Follow</div>
            <ul className="mt-2 space-y-2 text-sm text-[#0D0E1A]/75">
              <li>Twitter / X</li>
              <li>YouTube</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#0D0E1A]">Contact</div>
            <p className="mt-2 text-sm text-[#0D0E1A]/75">business@hrcome.agency</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-[#0D0E1A]/60">© {new Date().getFullYear()} HRCOME Agency. All rights reserved.</div>
      </div>
    </footer>
  )
}
