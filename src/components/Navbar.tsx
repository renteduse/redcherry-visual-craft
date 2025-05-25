
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">REDCHERRY</h1>
              <p className="text-xs text-red-500 font-medium">INTERIORS</p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-500 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-red-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-red-500 transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-gray-700 hover:text-red-500">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="block px-3 py-2 text-gray-700 hover:text-red-500">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-gray-700 hover:text-red-500">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-gray-700 hover:text-red-500">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
