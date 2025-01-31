import { Facebook, Twitter, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#solutions", label: "Solutions" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wider">MAHAT SYSTEMS</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/919052020428" className="hover:text-gray-300"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-300 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Web Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">App Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Cloud Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-gray-300">contact@mahatsystems.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-2" />
                <div>
                  <span className="text-gray-300">+91 90520 20428</span><br/>
                  <span className="text-gray-300">+91 98859 88005</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mahat Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
