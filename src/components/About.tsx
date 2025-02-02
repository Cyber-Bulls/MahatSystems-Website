export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Building tomorrow's technology solutions today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Who We Are
            </h3>
            <p className="text-gray-600">
              Mahat Systems is a leading technology solutions provider specializing in cutting-edge software development, cloud solutions, and digital transformation services. With years of industry experience, we've helped businesses across various sectors modernize their operations and achieve digital excellence.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-black mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-black mb-2">100+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Our Values</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="block text-gray-900">Innovation</strong>
                    <span className="text-gray-600">Constantly pushing boundaries with cutting-edge solutions</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="block text-gray-900">Excellence</strong>
                    <span className="text-gray-600">Delivering superior quality in everything we do</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="block text-gray-900">Integrity</strong>
                    <span className="text-gray-600">Building trust through transparent practices</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="block text-gray-900">Collaboration</strong>
                    <span className="text-gray-600">Working together to achieve shared success</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
