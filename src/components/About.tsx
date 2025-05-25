
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">RedCherry</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At RedCherry Interiors, we believe in the power of great design to transform spaces and elevate experiences. 
              Our philosophy of "Think, Design, Built" drives everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From conceptualization to execution, we provide comprehensive solutions for all your interior and exterior needs. 
              Our team of experts brings years of experience and creativity to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Think</h4>
                    <p className="text-sm opacity-90">Understand your vision and requirements</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Design</h4>
                    <p className="text-sm opacity-90">Create innovative and functional designs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Built</h4>
                    <p className="text-sm opacity-90">Execute with precision and quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-red-200 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
