import { motion } from 'framer-motion'

const highlights = [
  { title: 'Astra Nova 3D Debut', date: 'May 2025', desc: 'A dazzling 3D showcase with live band collab.' },
  { title: 'HRCOME FES', date: 'Aug 2025', desc: 'An online festival featuring all talents.' },
  { title: 'Cross-Agency Collab', date: 'Nov 2025', desc: 'Massive collab stream with top VTubers.' },
]

export default function Highlights() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A]">Event & Stream Highlights</h2>
          <p className="text-sm text-[#0D0E1A]/70">Big moments from our universe</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 bg-white/70 border border-white/60 shadow-[0_10px_40px_rgba(13,14,26,0.08)] backdrop-blur-md"
            >
              <div className="text-xs font-medium text-[#6D5DFB]">{h.date}</div>
              <div className="mt-2 font-semibold text-[#0D0E1A]">{h.title}</div>
              <p className="mt-2 text-sm text-[#0D0E1A]/75">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
