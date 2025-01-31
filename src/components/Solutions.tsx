import { Database, Globe, Bot, LineChart } from 'lucide-react'

const solutions = [
  {
    title: "Enterprise Data Management",
    description: "Comprehensive data solutions including warehousing, analytics, and business intelligence platforms.",
    icon: Database,
    features: ["Data Warehousing", "Analytics Platform", "BI Solutions"]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business operations.",
    icon: Globe,
    features: ["Process Automation", "Legacy Modernization", "Digital Strategy"]
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions to automate processes and gain competitive advantage.",
    icon: Bot,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
  },
  {
    title: "Business Analytics",
    description: "Advanced analytics solutions to drive data-driven decision making.",
    icon: LineChart,
    features: ["Performance Metrics", "Custom Dashboards", "Real-time Analytics"]
  }
]

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Enterprise Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge solutions designed for enterprise-scale operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <solution.icon className="w-10 h-10 text-black mr-4" />
                <h3 className="text-2xl font-semibold">{solution.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
