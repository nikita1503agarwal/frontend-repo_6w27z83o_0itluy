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
            <h2 className="text-2xl sm:text-3xl font-orbitron text-[#0D0E1A] mb-4">About Us</h2>
            <p className="text-[#0D0E1A]/80 max-w-3xl">Our mission is to elevate virtual entertainers with professional production, training, and global partnerships. We blend technology and artistry to deliver unforgettable experiences.</p>
          </div>
        </section>
        <Showcase />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}
