import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#BDE3FF] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_20%,white,transparent_35%),radial-gradient(circle_at_50%_80%,white,transparent_40%)]" />
      <Navbar />
      <main className="relative pt-16">
        <Hero />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A] mb-8">About Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/40 bg-white/50 backdrop-blur shadow-[0_10px_30px_rgba(109,93,251,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-[#6D5DFB] via-[#9B6CFF] to-[#FF4FD8]" />
                <div className="p-6">
                  <h3 className="font-orbitron text-[#0D0E1A] text-xl mb-2">Our Mission</h3>
                  <p className="text-[#0D0E1A]/80 leading-relaxed">Empower virtual creators with world‑class production, mentorship, and opportunities—building sustainable careers and unforgettable live experiences.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/40 bg-white/50 backdrop-blur shadow-[0_10px_30px_rgba(109,93,251,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-[#6D5DFB] via-[#9B6CFF] to-[#FF4FD8]" />
                <div className="p-6">
                  <h3 className="font-orbitron text-[#0D0E1A] text-xl mb-2">Innovation First</h3>
                  <p className="text-[#0D0E1A]/80 leading-relaxed">We push the frontier with Spline‑powered worlds, real‑time avatars, and modern tooling—turning streams into interactive, cinematic shows.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/40 bg-white/50 backdrop-blur shadow-[0_10px_30px_rgba(109,93,251,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-[#6D5DFB] via-[#9B6CFF] to-[#FF4FD8]" />
                <div className="p-6">
                  <h3 className="font-orbitron text-[#0D0E1A] text-xl mb-2">Community Focused</h3>
                  <p className="text-[#0D0E1A]/80 leading-relaxed">Fan‑first at every step: inclusive spaces, meaningful engagement, and programs that give back through events, memberships, and charity streams.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/40 bg-white/50 backdrop-blur shadow-[0_10px_30px_rgba(109,93,251,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-[#6D5DFB] via-[#9B6CFF] to-[#FF4FD8]" />
                <div className="p-6">
                  <h3 className="font-orbitron text-[#0D0E1A] text-xl mb-2">Global Reach</h3>
                  <p className="text-[#0D0E1A]/80 leading-relaxed">A worldwide presence with multilingual talents, regional collaborations, and an around‑the‑clock schedule to meet fans where they are.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}
