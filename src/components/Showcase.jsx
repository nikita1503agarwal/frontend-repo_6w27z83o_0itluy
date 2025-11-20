import { motion } from 'framer-motion'

const items = [
  { name: 'Astra Nova', role: 'Singer • Variety', color: 'from-[#6D5DFB] to-[#FF4FD8]' },
  { name: 'Kiri Hoshino', role: 'Gaming • FPS', color: 'from-[#5DFBD3] to-[#6D5DFB]' },
  { name: 'Noir Ritsu', role: 'Music Producer', color: 'from-[#6D5DFB] to-[#9B5DFB]' },
  { name: 'Mira Luna', role: 'Chatting • Karaoke', color: 'from-[#FF4FD8] to-[#6D5DFB]' },
]

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A]">Featured Talents & Staff</h2>
          <p className="text-sm text-[#0D0E1A]/70">Futuristic creators shaping tomorrow</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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
          ))}
        </div>
      </div>
    </section>
  )
}
