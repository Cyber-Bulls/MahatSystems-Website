import { Building2 } from 'lucide-react'

const clients = [
  {
    name: "Tech Solutions Inc.",
    industry: "Technology",
    description: "Leading provider of enterprise software solutions",
    logo: "TS"
  },
  {
    name: "Global Finance Group",
    industry: "Banking",
    description: "International banking and financial services",
    logo: "GF"
  },
  {
    name: "Healthcare Plus",
    industry: "Healthcare",
    description: "Modern healthcare technology solutions",
    logo: "HC"
  },
  {
    name: "Retail Connect",
    industry: "Retail",
    description: "Innovative retail management systems",
    logo: "RC"
  },
  {
    name: "Manufacturing Pro",
    industry: "Manufacturing",
    description: "Smart manufacturing solutions",
    logo: "MP"
  },
  {
    name: "EduTech Systems",
    industry: "Education",
    description: "Digital learning platforms",
    logo: "ET"
  }
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Clients</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by leading organizations across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl font-bold mr-4">
                  {client.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg">
            <Building2 className="w-5 h-5" />
            <span>Join our growing list of satisfied clients</span>
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
