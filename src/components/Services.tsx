
import { useState } from "react";

const services = [
  {
    category: "Signage & Branding",
    items: ["Signage", "Sign Boards", "Branding", "LED 2D", "3D Boards"],
    description: "Professional signage solutions that make your brand stand out",
    color: "from-red-500 to-red-600"
  },
  {
    category: "Interior Design",
    items: ["Wall Graphics", "Wallpapers", "Printed Wallpapers", "PVC Panel", "Molding"],
    description: "Transform your spaces with our creative interior solutions",
    color: "from-gray-700 to-gray-800"
  },
  {
    category: "Printing & Graphics",
    items: ["Vinyl Printing", "U.V Print", "Wall Graphics", "Sun-Film", "Frosted"],
    description: "High-quality printing services for all your graphic needs",
    color: "from-red-600 to-red-700"
  },
  {
    category: "Blinds & Flooring",
    items: ["Office Blinds", "Roller Blinds", "Zebra Blinds", "Flooring Mats"],
    description: "Functional and stylish window treatments and flooring solutions",
    color: "from-gray-600 to-gray-700"
  },
  {
    category: "Landscaping",
    items: ["Grass", "Vertical Garden"],
    description: "Green solutions to bring nature into your spaces",
    color: "from-green-500 to-green-600"
  },
  {
    category: "Construction",
    items: ["Commercial Interior", "Residential Interior", "Exterior Building Construction"],
    description: "Complete construction and renovation services",
    color: "from-red-500 to-red-700"
  }
];

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive solutions for all your interior and exterior needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {service.category.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.category}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};
