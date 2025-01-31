import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our team to discuss your IT needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">contact@mahatsystems.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+91 90520 20428<br/>+91 98859 88005</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-black" />
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  Plot 699, Vivekananda Nagar<br/>
                  Kukatpally, Hyderabad<br/>
                  Telangana, India - 500 072
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
