import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-3xl pt-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t-2 border-cyan-300/30">
      {/* Wavy top effect - kept but smaller */}
      <div className="absolute inset-x-0 top-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,200 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="url(#footer-gradient)"
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4b206e" />
              <stop offset="0.4" stopColor="#3C3F92" />
              <stop offset="0.7" stopColor="#2072b7" />
              <stop offset="1" stopColor="#0891b2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Actual footer content compact and with black gradient background */}
      <div className="relative z-20 bg-gradient-to-br from-black via-gray-900 to-black text-white py-10 px-6 rounded-t-3xl max-w-7xl mx-auto">
        {/* Decorative floating boxes smaller and subtler */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-lg animate-pulse"></div>
        <div className="absolute top-28 right-12 w-16 h-16 bg-white/20 rounded-lg rotate-45 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-10 bg-white/5 rounded-xl animate-pulse animation-delay-4000"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-cyan-300/30">
          {/* Brand and Description */}
          <div>
            <h2 className="text-2xl font-extrabold mb-3 text-cyan-400" style={{ fontFamily: "'Comfortaa', cursive" }}>
              Code Craft
            </h2>
            <p className="text-white/90 max-w-sm mb-4 text-sm">
              Crafting digital excellence with passion and precision. Your partner for bespoke web solutions.
            </p>
            <p className="text-white/70 text-xs">
              &copy; {new Date().getFullYear()} Code Craft. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-cyan-400">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-300 transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <p className="mt-6 text-cyan-300 font-semibold text-center text-xs">
              Empowering your ideas with robust code and modern design. Delivering tailored web solutions, every time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
