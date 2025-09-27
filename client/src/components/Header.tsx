import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

// Add this to the top level of your app (e.g., _app.js/_app.tsx or index.html):
// <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const joined = scrollY > 80;

  // Navbar background & border control
  const headerBg = joined
    ? "bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-90 backdrop-blur-xl border border-cyan-400 shadow-xl"
    : "bg-black bg-opacity-0 border border-transparent";

  // On scroll, bring logo and button closer to nav links
  const logoStyle = joined
    ? "ml-2 transition-all duration-300"
    : "ml-8 transition-all duration-300";
  const quoteStyle = joined
    ? "mr-2 transition-all duration-300"
    : "mr-8 transition-all duration-300";
  const navContainerStyle = joined
    ? "px-4 py-2"
    : "px-8 py-4";

    function handleSmoothScroll(sectionId: string) {
        // Prevent default anchor behavior and close mobile menu
        setMobileMenuOpen(false);
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }

        .rainbow-hover {
          position: relative;
          font-weight: 700;
          color: white;
          background-clip: text;
          transition: color 0.3s, border-bottom-color 0.3s;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }
        .rainbow-hover:hover, .rainbow-hover:focus {
          color: #14e5ff;
          border-bottom-color: #14e5ff;
        }
        .floating-navbar {
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(20, 229, 255, 0.09);
          width: 95%;
          max-width: 1150px;
          border: 1px solid transparent;
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s, top 0.3s, border-radius 0.3s;
        }
        .floating-navbar:hover {
          border-color: #14e5ff;
          box-shadow: 0 10px 40px 0 rgba(20, 229, 255, 0.18);
        }
        @media (max-width: 768px) {
          .floating-navbar {
            left: 50%;
            transform: translateX(-50%);
            top: 1rem;
            width: 95vw;
            border-radius: 1.25rem;
          }
        }
        a.get-quote-btn {
          padding: 0.5rem 1rem;
          font-weight: 700;
          border-radius: 0.75rem;
          background: linear-gradient(90deg, #14e5ff 0%, #05a7e0 100%);
          color: black;
          box-shadow: 0 0 8px rgba(20, 229, 255, 0.7);
          transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
          display: inline-block;
          cursor: pointer;
          text-decoration: none;
        }
        a.get-quote-btn:hover, a.get-quote-btn:focus {
          background-color: #0d94c3;
          box-shadow: 0 0 15px 2px #14e5ff;
          transform: scale(1.05);
          color: black;
          outline: none;
        }
        .mobile-menu-bg {
          background: linear-gradient(90deg, #000000, #1a1a1a, #000000);
          border: 1px solid rgba(20, 229, 255, 0.3);
        }
        .comfortaa {
          font-family: 'Comfortaa', sans-serif !important;
          font-weight: 700 !important;
        }
      `}</style>
      <header
        className={cn(
          "fixed z-50 floating-navbar transition-all duration-300",
          headerBg
        )}
        style={{
          border: joined
            ? "1px solid #14e5ff"
            : "1px solid transparent",
          background: joined
            ? undefined
            : "rgba(9,9,9,0.00)",
        }}
      >
        <nav
          className={`flex items-center justify-between ${navContainerStyle} transition-all duration-300`}
        >
          {/* Image + Logo - left */}
          <div className={`flex items-center gap-2 ${logoStyle}`}>
            <img
              src="/codecraftlogo.png" // Update path accordingly
              alt="Designer Icon"
              className="h-10 w-10 object-contain"
              style={{ background: "none", border: "none", boxShadow: "none" }}
            />
            <span className="comfortaa text-xl md:text-2xl text-cyan-300 tracking-tight select-none">
              Code Craft
            </span>
          </div>

          {/* Nav links - center (HIDDEN on mobile) */}
          <ul className="hidden md:flex flex-1 justify-center gap-10 md:gap-12 list-none">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rainbow-hover text-base md:text-lg px-2 py-1 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(href);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Get Free Quote - right (HIDDEN on mobile) */}
          <div className={`hidden md:block ${quoteStyle}`}>
            <a
              href="#get-quote"
              className="get-quote-btn"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#get-quote");
              }}
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button - (VISIBLE on mobile) */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white ml-4 z-50"
            onClick={() => setMobileMenuOpen((m) => !m)}
            aria-label="Toggle mobile navigation"
          >
            <span className="block w-6 h-0.5 bg-white mb-1 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300"></span>
            <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mobile-menu-bg py-6 shadow-2xl z-40 flex flex-col gap-4 items-center animate-fade-in rounded-b-xl">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                href={href}
                className="rainbow-hover text-white font-bold py-2 text-lg"
                onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(href);
                }}
                key={href}
              >
                {label}
              </a>
            ))}
            <a
              href="#get-quote"
              className="mt-4 get-quote-btn"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#get-quote");
              }}
            >
              Get Free Quote
            </a>
          </div>
        )}
      </header>
    </>
  );
}
