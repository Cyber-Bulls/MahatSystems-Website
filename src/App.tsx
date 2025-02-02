import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Partners from './components/Partners'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Clients />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
