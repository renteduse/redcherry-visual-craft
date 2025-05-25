
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Numbers</h4>
                  <p className="text-gray-300">7022830804</p>
                  <p className="text-gray-300">8792749814</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">redcherryinteriorsbangalore@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">
                    1st cross Subanna Garden, Bannerghatta Main Rd,<br />
                    opp. St. Hopkins college, Bengaluru - 27
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-500 bg-opacity-10 rounded-lg border border-red-500 border-opacity-20">
              <h4 className="font-semibold mb-3 text-red-400">Important Terms</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• 50% advance required before starting work</li>
                <li>• Balance payment after work completion</li>
                <li>• Not responsible for physical damages after completion</li>
                <li>• Design changes after work starts will incur extra charges</li>
                <li>• Transportation and installation may cost extra for heavy materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                  <option value="">Select a service</option>
                  <option value="signage">Signage & Branding</option>
                  <option value="interior">Interior Design</option>
                  <option value="printing">Printing & Graphics</option>
                  <option value="blinds">Blinds & Flooring</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="construction">Construction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
