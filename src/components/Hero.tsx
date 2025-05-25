
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

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
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-200 to-red-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-red-300 to-red-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-red-100 to-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-25 animate-spin slow"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-1/4 left-1/3 animate-bounce delay-500">
          <Sparkles className="w-6 h-6 text-red-300 opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-1000">
          <Sparkles className="w-4 h-4 text-red-400 opacity-50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 transform hover:scale-110 transition-all duration-500 animate-pulse">
              <img 
                src="/lovable-uploads/7d1d12d5-29c6-4fa2-b37c-46951d2efbb5.png" 
                alt="RedCherry Interiors Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Enhanced Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-pulse">
              REDCHERRY
            </span>
            <br />
            <span className="text-gray-800">INTERIORS</span>
          </h1>

          {/* Enhanced Animated Tagline */}
          <div className="mb-8 h-20 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              <span className="inline-block transform transition-all duration-700 ease-in-out bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                {texts[currentText]}
              </span>
              <span className="text-red-500 animate-pulse">.</span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            A complete solution for all your <span className="font-semibold text-red-600">interior</span> and <span className="font-semibold text-red-600">exterior</span> needs. From signage to construction, we bring your vision to life with precision and creativity.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-500">
            <button 
              onClick={scrollToServices}
              className="group px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Explore Services
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 border-3 border-red-500 text-red-500 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              Get Custom Quote
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in delay-700">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Services</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="w-8 h-8 text-red-500" />
          </div>
        </button>
      </div>
    </section>
  );
};
