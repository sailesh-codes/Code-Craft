import { useEffect, useState } from "react";


export default function Hero() {
  // Animation states removed for static text display


  const handleSmoothScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-24"
      data-testid="section-hero"
    >
      {/* Background Elements - Hidden on small screens (below md) for better mobile experience */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 md:opacity-30 hidden md:block"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, transparent 0, transparent 34vh, black 46vh)',
          maskImage: 'radial-gradient(ellipse at 50% 50%, transparent 0, transparent 34vh, black 46vh)'
        }}
      >
        <div className="absolute top-[16vh] left-[4vw] text-6xl text-purple-500 animate-float">
          <i className="fab fa-html5"></i>
        </div>
        <div className="absolute top-[22vh] right-[6vw] text-4xl text-blue-500 animate-float" style={{ animationDelay: '1s' }}>
          <i className="fab fa-css3-alt"></i>
        </div>
        <div className="absolute bottom-[28vh] left-[8vw] text-5xl text-yellow-500 animate-float" style={{ animationDelay: '2s' }}>
          <i className="fab fa-js"></i>
        </div>
        <div className="absolute bottom-[12vh] right-[4vw] text-4xl text-green-500 animate-float" style={{ animationDelay: '0.5s' }}>
          <i className="fab fa-react"></i>
        </div>
        <div className="absolute top-[26vh] right-[33vw] text-5xl text-cyan-400 animate-float" style={{ animationDelay: '1.5s' }}>
          <i className="fab fa-docker"></i>
        </div>
        <div className="absolute top-[28vh] left-[26vw] text-4xl text-indigo-400 animate-float" style={{ animationDelay: '2.2s' }}>
          <i className="fas fa-database"></i>
        </div>
        <div className="absolute top-[32vh] right-[2vw] text-4xl text-sky-300 animate-float" style={{ animationDelay: '0.8s' }}>
          <i className="fas fa-cloud"></i>
        </div>
        <div className="absolute bottom-[6vh] right-[6vw] text-4xl text-orange-400 animate-float" style={{ animationDelay: '1.8s' }}>
          <i className="fab fa-php"></i>
        </div>
        <div className="absolute bottom-[14vh] left-[30vw] text-4xl text-rose-400 animate-float" style={{ animationDelay: '2.6s' }}>
          <i className="fab fa-git-alt"></i>
        </div>
        <div className="absolute top-[52vh] left-[3vw] text-4xl text-emerald-400 animate-float" style={{ animationDelay: '1.2s' }}>
          <i className="fas fa-server"></i>
        </div>
        <div className="absolute top-[21vh] left-[56vw] text-4xl text-fuchsia-400 animate-float" style={{ animationDelay: '3s' }}>
          <i className="fas fa-brain"></i>
        </div>
        <div className="absolute bottom-[6vh] left-[6vw] text-4xl text-yellow-400 animate-float" style={{ animationDelay: '2.9s' }}>
          <i className="fas fa-gears"></i>
        </div>
        <div className="absolute bottom-[14vh] right-[27vw] text-4xl text-green-700 animate-float" style={{ animationDelay: '3.2s' }}>
          <i className="fab fa-envira"></i>
        </div>
      </div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-2">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <div className="overflow-visible" data-testid="text-hero-title">
              Crafting Digital
              <span className="block sm:inline sm:ml-2">Excellence,</span>
            </div>
            <span className="gradient-text block mt-2 sm:mt-0">One Code at a Time</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-2 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
            data-testid="text-hero-subtitle"
          >
            Professional web development services that bring your vision to life
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: '1s' }}
          >
            <button
              onClick={() => handleSmoothScroll('#portfolio')}
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover-glow"
              data-testid="button-view-work"
            >
              View Our Work
            </button>
            <button
              onClick={() => handleSmoothScroll('#contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover-glow"
              data-testid="button-start-project"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-gray-400"></i>
      </div>
    </section>
  );
}
