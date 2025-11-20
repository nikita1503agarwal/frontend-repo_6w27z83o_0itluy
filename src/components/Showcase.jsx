import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const talentsItems = [
  { name: 'Astra Nova', role: 'Singer • Variety', color: 'from-[#6D5DFB] to-[#FF4FD8]' },
  { name: 'Kiri Hoshino', role: 'Gaming • FPS', color: 'from-[#5DFBD3] to-[#6D5DFB]' },
  { name: 'Noir Ritsu', role: 'Music Producer', color: 'from-[#6D5DFB] to-[#9B5DFB]' },
  { name: 'Mira Luna', role: 'Chatting • Karaoke', color: 'from-[#FF4FD8] to-[#6D5DFB]' },
]

const staffItems = [
  { name: 'Eve Akari', role: 'Agency Director', color: 'from-[#6D5DFB] to-[#FF4FD8]' },
  { name: 'Kai Morino', role: 'Talent Manager', color: 'from-[#5DFBD3] to-[#6D5DFB]' },
  { name: 'Rina Solace', role: 'Producer', color: 'from-[#FF74E6] to-[#A07CFF]' },
  { name: 'Tomo Hikari', role: 'Audio Engineer', color: 'from-[#6D5DFB] to-[#9B5DFB]' },
]

function Card({ it, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/60 hover:border-white shadow-[0_10px_40px_rgba(13,14,26,0.08)] group"
    >
      <div className={`h-28 bg-gradient-to-br ${it.color} opacity-90`} />
      <div className="p-5">
        <h3 className="font-semibold text-[#0D0E1A]">{it.name}</h3>
        <p className="text-sm text-[#0D0E1A]/70">{it.role}</p>
        <button className="mt-4 text-sm font-medium text-[#6D5DFB] hover:text-[#4b3ffb]">View Profile →</button>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_center,rgba(109,93,251,0.25),transparent_40%)]" />
    </motion.div>
  )
}

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Talents section */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A]">Featured Talents</h2>
              <p className="text-sm text-[#0D0E1A]/70">Futuristic creators shaping tomorrow</p>
            </div>
            <Link to="/talents" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 border border-white/60 text-[#6D5DFB] font-medium hover:bg-white transition">Show all →</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentsItems.map((it, i) => (
              <Card key={`t-${i}`} it={it} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Staff section */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A]">Featured Staff</h2>
              <p className="text-sm text-[#0D0E1A]/70">Production, management, and support</p>
            </div>
            <Link to="/staff" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 border border-white/60 text-[#6D5DFB] font-medium hover:bg-white transition">Show all →</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffItems.map((it, i) => (
              <Card key={`s-${i}`} it={it} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
