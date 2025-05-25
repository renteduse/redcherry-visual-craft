
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Think", "Design", "Built"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-red-100 to-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-2xl">RC</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              REDCHERRY
            </span>
            <br />
            INTERIORS
          </h1>

          {/* Animated Tagline */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              <span className="inline-block transform transition-all duration-500 ease-in-out">
                {texts[currentText]}
              </span>
              <span className="text-red-500">.</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            A complete solution for all your interior and exterior needs. From signage to construction, we bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
            <button 
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-red-500" />
        </button>
      </div>
    </section>
  );
};
