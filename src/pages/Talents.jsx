import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const female = [
  { name: 'Astra Nova', genre: 'Singing / Variety', color: 'bg-gradient-to-br from-[#FF4FD8] to-[#6D5DFB]' },
  { name: 'Mira Luna', genre: 'Chatting / Karaoke', color: 'bg-gradient-to-br from-[#FF74E6] to-[#A07CFF]' },
]

const male = [
  { name: 'Noir Ritsu', genre: 'Music / Production', color: 'bg-gradient-to-br from-[#6D5DFB] to-[#9B5DFB]' },
  { name: 'Kiri Hoshino', genre: 'Gaming / FPS', color: 'bg-gradient-to-br from-[#5DFBD3] to-[#6D5DFB]' },
]

function Card({ t, onView }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/70 border border-white/60 backdrop-blur">
      <div className={`${t.color} h-32`} />
      <div className="p-5">
        <div className="font-semibold text-[#0D0E1A]">{t.name}</div>
        <div className="text-sm text-[#0D0E1A]/70">{t.genre}</div>
        <button onClick={onView} className="mt-4 text-sm font-medium text-[#6D5DFB]">View Profile →</button>
      </div>
    </div>
  )
}

export default function Talents() {
  const [tab, setTab] = useState('female')
  return (
    <div className="min-h-screen bg-[#BDE3FF] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_20%,white,transparent_35%),radial-gradient(circle_at_50%_80%,white,transparent_40%)]" />
      <Navbar />
      <main className="relative pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-orbitron text-[#0D0E1A]">Talents</h1>
        <div className="mt-6 inline-flex rounded-xl p-1 bg-white/70 border border-white/60">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='female'?'bg-white shadow':'text-[#0D0E1A]/70'}`} onClick={()=>setTab('female')}>Female 💖</button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='male'?'bg-white shadow':'text-[#0D0E1A]/70'}`} onClick={()=>setTab('male')}>Male 💫</button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(tab==='female'?female:male).map((t,i)=> (
            <Card key={i} t={t} onView={()=>alert('Profile modal coming soon')} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
