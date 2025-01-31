import { Code, Cloud, Network, Search, Shield, Smartphone, Database, LineChart, Bot, Cpu, Globe, Server } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    icon: Code
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Cloud
  },
  {
    title: 'Network Solutions',
    description: 'Secure and reliable networking infrastructure setup and maintenance.',
    icon: Network
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets.',
    icon: Shield
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, content marketing, and digital strategy services.',
    icon: Search
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    icon: Database
  },
  {
    title: 'Business Intelligence',
    description: 'Make informed decisions with our BI solutions.',
    icon: LineChart
  },
  {
    title: 'AI Solutions',
    description: 'Artificial Intelligence and Machine Learning integration.',
    icon: Bot
  },
  {
    title: 'IoT Services',
    description: 'Connect and manage your IoT devices efficiently.',
    icon: Cpu
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation consulting and implementation.',
    icon: Globe
  },
  {
    title: 'DevOps Services',
    description: 'Streamline your development and operations.',
    icon: Server
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive IT solutions for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
