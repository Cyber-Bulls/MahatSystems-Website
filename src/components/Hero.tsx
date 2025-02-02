import ImageSlider from './ImageSlider'

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <ImageSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Transform Your Business <br/>
            <span className="text-white">With Digital Excellence</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to drive your business forward. From web development to cloud solutions, we deliver innovation that matters.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
