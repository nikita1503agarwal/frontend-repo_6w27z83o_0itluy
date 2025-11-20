import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-[#BDE3FF] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_20%,white,transparent_35%),radial-gradient(circle_at_50%_80%,white,transparent_40%)]" />
      <Navbar />
      <main className="relative pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-orbitron text-[#0D0E1A]">About HRCOME</h1>
        <p className="mt-6 text-[#0D0E1A]/85 leading-relaxed">
          HRCOME is a futuristic VTuber agency blending cutting-edge technology with the heart of idol culture. Our mission is to nurture talent, build immersive worlds, and deliver premium entertainment experiences globally. We believe in professional growth, authenticity, and community.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title:'Training',desc:'Vocal, performance, game streaming, and production coaching.'},
            {title:'Production',desc:'Best-in-class rigging, music production, and creative direction.'},
            {title:'Growth',desc:'Analytics-driven strategies and global partnerships.'}
          ].map((b,i)=> (
            <div key={i} className="rounded-2xl p-6 bg-white/70 border border-white/60 shadow">
              <div className="font-semibold text-[#0D0E1A]">{b.title}</div>
              <p className="mt-2 text-sm text-[#0D0E1A]/75">{b.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
