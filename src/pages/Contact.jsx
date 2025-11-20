import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#BDE3FF] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_20%,white,transparent_35%),radial-gradient(circle_at_50%_80%,white,transparent_40%)]" />
      <Navbar />
      <main className="relative pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-orbitron text-[#0D0E1A]">Contact / Apply as a VTuber</h1>
        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl p-6 bg-white/70 border border-white/60">
            <div className="font-semibold text-[#0D0E1A]">Business Contact</div>
            <p className="mt-2 text-sm text-[#0D0E1A]/75">Email: business@hrcome.agency</p>
            <p className="text-sm text-[#0D0E1A]/75">Address: Tokyo, Japan</p>
          </div>

          <form className="rounded-2xl p-6 bg-white/70 border border-white/60 grid gap-4">
            <div>
              <label className="text-sm text-[#0D0E1A]">Name</label>
              <input className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#6D5DFB]" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-[#0D0E1A]">Email</label>
              <input type="email" className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#6D5DFB]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-[#0D0E1A]">Message</label>
              <textarea className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#6D5DFB]" rows="5" placeholder="Tell us about you / collaboration idea" />
            </div>
            <button type="button" onClick={()=>alert('Submitted!')} className="inline-flex justify-center px-6 py-3 rounded-xl bg-[#6D5DFB] text-white font-semibold shadow-[0_10px_30px_rgba(109,93,251,0.4)] hover:brightness-110">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
