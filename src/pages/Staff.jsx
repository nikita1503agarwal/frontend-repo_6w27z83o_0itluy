import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const management = [
  { name: 'Eve Akari', role: 'Agency Director', color: 'bg-gradient-to-br from-[#6D5DFB] to-[#FF4FD8]' },
  { name: 'Kai Morino', role: 'Talent Manager', color: 'bg-gradient-to-br from-[#5DFBD3] to-[#6D5DFB]' },
]

const production = [
  { name: 'Rina Solace', role: 'Producer', color: 'bg-gradient-to-br from-[#FF74E6] to-[#A07CFF]' },
  { name: 'Tomo Hikari', role: 'Audio Engineer', color: 'bg-gradient-to-br from-[#6D5DFB] to-[#9B5DFB]' },
]

function Card({ p, onView }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/70 border border-white/60 backdrop-blur">
      <div className={`${p.color} h-32`} />
      <div className="p-5">
        <div className="font-semibold text-[#0D0E1A]">{p.name}</div>
        <div className="text-sm text-[#0D0E1A]/70">{p.role}</div>
        <button onClick={onView} className="mt-4 text-sm font-medium text-[#6D5DFB]">View Profile →</button>
      </div>
    </div>
  )
}

export default function Staff() {
  const [tab, setTab] = useState('management')
  return (
    <div className="min-h-screen bg-[#BDE3FF] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_20%,white,transparent_35%),radial-gradient(circle_at_50%_80%,white,transparent_40%)]" />
      <Navbar />
      <main className="relative pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-orbitron text-[#0D0E1A]">Staff</h1>
        <div className="mt-6 inline-flex rounded-xl p-1 bg-white/70 border border-white/60">
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='management'?'bg-white shadow':'text-[#0D0E1A]/70'}`} onClick={()=>setTab('management')}>Management</button>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='production'?'bg-white shadow':'text-[#0D0E1A]/70'}`} onClick={()=>setTab('production')}>Production</button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(tab==='management'?management:production).map((p,i)=> (
            <Card key={i} p={p} onView={()=>alert('Profile modal coming soon')} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
