import { Star } from 'lucide-react'

const partners = [
  {
    name: "Tech Corp",
    logo: "TC",
    industry: "Technology"
  },
  {
    name: "Finance Plus",
    logo: "FP",
    industry: "Finance"
  },
  {
    name: "Health Care Pro",
    logo: "HC",
    industry: "Healthcare"
  },
  {
    name: "Retail Giants",
    logo: "RG",
    industry: "Retail"
  }
]

const testimonials = [
  {
    quote: "Mahat Systems transformed our digital infrastructure completely. Their expertise in cloud solutions helped us achieve 99.9% uptime.",
    author: "John Smith",
    position: "CTO, Tech Corp",
    rating: 5
  },
  {
    quote: "The team's dedication to delivering quality solutions on time has made them our go-to technology partner.",
    author: "Sarah Johnson",
    position: "CEO, Finance Plus",
    rating: 5
  }
]

export default function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Partners & Clients</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by industry leaders across sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {partner.logo}
                </div>
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.industry}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
