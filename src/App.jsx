import Home from './pages/Home'
import Talents from './pages/Talents'
import Staff from './pages/Staff'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/talents" element={<Talents />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
