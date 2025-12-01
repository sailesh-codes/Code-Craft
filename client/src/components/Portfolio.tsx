import { FaGithub, FaExternalLinkAlt, FaBookOpen, FaBuilding, FaChartBar, FaPalette, FaFilm, FaShoppingCart } from "react-icons/fa";
import { useToast } from "./Toast";

export default function Portfolio() {
  const { showToast, ToastComponent } = useToast();
  
  const portfolioItems = [
    {
      title: "Megasifi",
      category: "E-Commerce",
      description: "Megasifi is an e‑commerce platform concept that works like a dedicated online marketplace: customers can browse products, add them to a cart, pay digitally, and get orders fulfilled without ever visiting a physical store. It follows standard e‑commerce principles (product catalog, checkout flow, online payments) but can be customized for your niche, branding, and automation needs.",
      repo: "",
      liveDemoUrl: "",
      liveDemoText: "Coming soon",
      icon: "ShoppingCart"
    },
    {
      title: "MoviePedia",
      category: "API",
      description: "MoviePedia is a movie database API that provides access to a vast collection of movies and TV shows",
      repo: "https://github.com/sailesh-codes/MoviePedia",
      liveDemoUrl: "https://movie-pedia-navy.vercel.app/",
      liveDemoText: "Live Demo",
      icon: "Film"
    },
    {
      title: "Echo AI",
      category: "SaaS",
      description: "Echo AI is an interactive AI assistant that can help you with answering questions.",
      repo: "https://github.com/sailesh-codes/ECHO-AI",
      liveDemoUrl: "https://echo-ai-one-xi.vercel.app/auth",
      liveDemoText: "Live Demo",
      icon: "SaaS"
    },
    {
      title: "K.S.M",
      category: "Brand Portfolio",
      description: "A stylish/modern brand portfolio website.",
      repo: "https://github.com/sailesh-codes/K.S.M",
      liveDemoUrl: "https://www.newks-stores.in/",
      liveDemoText: "Live Demo",
      icon: "Portfolio"
    }
  ];

  // Function to get the correct icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'E-Commerce':
        return <FaShoppingCart className="text-cyan-300 text-5xl mb-6 relative z-10" />;
      case 'E-Learning':
        return <FaBookOpen className="text-cyan-300 text-5xl mb-6 relative z-10" />;
      case 'Film': // <-- Changed for MoviePedia
        return <FaFilm className="text-cyan-300 text-5xl mb-6 relative z-10" />;
      case 'API':
        return <FaBuilding className="text-cyan-300 text-4xl" />;
      case 'SaaS':
        return <FaChartBar className="text-cyan-300 text-4xl relative z-10" />;
      case 'Portfolio':
        return <FaPalette className="text-cyan-300 text-4xl relative z-10" />;
      default:
        return <FaGithub className="text-cyan-300 text-5xl mb-6 relative z-10" />;
    }
  };

  // Function to get the correct icon for smaller cards
  const getSmallCategoryIcon = (category: string) => {
    switch (category) {
      case 'E-Commerce':
        return <FaShoppingCart className="text-cyan-300 text-4xl relative z-10" />;
      case 'E-Learning':
        return <FaBookOpen className="text-cyan-300 text-4xl relative z-10" />;
      case 'Film': // <-- Changed for MoviePedia small card
        return <FaFilm className="text-cyan-300 text-4xl relative z-10" />;
      case 'API':
        return <FaBuilding className="text-cyan-300 text-4xl relative z-10" />;
      case 'SaaS':
        return <FaChartBar className="text-cyan-300 text-4xl relative z-10" />;
      case 'Portfolio':
        return <FaPalette className="text-cyan-300 text-4xl relative z-10" />;
      default:
        return <FaGithub className="text-cyan-300 text-4xl relative z-10" />;
    }
  };

  return (
    <section id="portfolio" className="bg-black py-16 px-2 min-h-[60vh]">
      {ToastComponent}
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-2 tracking-tight">
        Featured Projects
      </h2>
      <p className="text-neutral-200 text-lg md:text-xl mb-10 text-center font-semibold">
        Showcasing our best GitHub work across different industries and technologies
      </p>

      <style>{`
        .holographic-card {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          background: rgba(23,25,28,0.75);
          transition: all 0.5s cubic-bezier(.21,.6,.47,1.01);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 38px 3px rgba(14,14,22,0.23);
        }
        .holographic-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px 0 rgba(66,255,255,0.17);
          z-index: 10;
        }
        .holographic-card::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 220%;
          height: 220%;
          background: linear-gradient(
            0deg, 
            transparent, 
            transparent 35%, 
            rgba(0,255,255,0.18)
          );
          transform: rotate(-45deg);
          transition: all 0.5s ease;
          opacity: 0;
          pointer-events: none;
          border-radius: 2rem;
          z-index: 1;
        }
        .holographic-card:hover::before {
          opacity: 1;
          transform: rotate(-45deg) translateY(90%);
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Large Main Card */}
        <div className={`holographic-card flex flex-col items-center justify-between p-8 min-h-[400px]`}>
          {getCategoryIcon(portfolioItems[0].icon)}
          <span className="uppercase text-xs tracking-wide font-extrabold text-cyan-100 mt-2 mb-1 relative z-10">
            {portfolioItems[0].category}
          </span>
          <h3 className="text-2xl font-extrabold text-cyan-400 text-center mb-2 leading-tight relative z-10">
            {portfolioItems[0].title}
          </h3>
          <p className="text-base text-cyan-100 text-center flex-grow mb-6 relative z-10">
            {portfolioItems[0].description}
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4 mt-auto relative z-10">
            {/* Util handler */}
            {/* Declare once per card section to keep code concise */}
            {/**/}
            <a
              href={portfolioItems[0].repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
              onClick={(e) => {
                const url = portfolioItems[0].repo;
                if (url.includes("pointerpointer.com")) {
                  e.preventDefault();
                  showToast("Coming soon");
                }
              }}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={portfolioItems[0].liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
              onClick={(e) => {
                const url = portfolioItems[0].liveDemoUrl;
                const text = portfolioItems[0].liveDemoText?.toLowerCase() || "";
                if (text.includes("coming soon") || url.includes("pointerpointer.com")) {
                  e.preventDefault();
                  showToast("Coming soon");
                }
              }}
            >
              <FaExternalLinkAlt /> {portfolioItems[0].liveDemoText}
            </a>
          </div>
        </div>

        {/* Right: Wide Card + Two Stacked Smaller Cards */}
        <div className="flex flex-col gap-8">
          {/* Top: Wide card */}
          <div className={`holographic-card flex flex-col sm:flex-row items-center sm:items-stretch p-8`}
            style={{ minHeight: "190px" }}>
            <div className="flex items-center justify-center w-full sm:w-1/3 mb-4 sm:mb-0 relative z-10">
              {getCategoryIcon(portfolioItems[1].icon)}
            </div>
            <div className="flex flex-col flex-grow sm:pl-8 w-full sm:w-2/3 relative z-10">
              <span className="uppercase text-xs tracking-wide font-extrabold text-cyan-100 mb-1">
                {portfolioItems[1].category}
              </span>
              <h3 className="text-2xl font-extrabold text-cyan-400 text-left mb-2 leading-tight">
                {portfolioItems[1].title}
              </h3>
              <p className="text-base text-cyan-100 text-left mb-5">
                {portfolioItems[1].description}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={portfolioItems[1].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
                  onClick={(e) => {
                    const url = portfolioItems[1].repo;
                    if (url.includes("pointerpointer.com")) {
                      e.preventDefault();
                      showToast("Coming soon");
                    }
                  }}
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={portfolioItems[1].liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
                  onClick={(e) => {
                    const url = portfolioItems[1].liveDemoUrl;
                    const text = portfolioItems[1].liveDemoText?.toLowerCase() || "";
                    if (text.includes("coming soon") || url.includes("pointerpointer.com")) {
                      e.preventDefault();
                      showToast("Coming soon");
                    }
                  }}
                >
                  <FaExternalLinkAlt /> {portfolioItems[1].liveDemoText}
                </a>
              </div>
            </div>
          </div>
          {/* Bottom: 2x Stacked small cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[2, 3].map(ix => (
              <div
                key={ix}
                className={`holographic-card flex flex-col items-center p-8 min-h-[190px]`}
              >
                {getSmallCategoryIcon(portfolioItems[ix].icon)}
                <span className="uppercase text-xs tracking-wide font-extrabold text-cyan-100 mt-4 mb-1 relative z-10">
                  {portfolioItems[ix].category}
                </span>
                <h3 className="text-xl font-extrabold text-cyan-400 text-center mb-2 leading-tight relative z-10">
                  {portfolioItems[ix].title}
                </h3>
                <p className="text-base text-cyan-100 text-center flex-grow mb-5 relative z-10">
                  {portfolioItems[ix].description}
                </p>
                <div className="flex items-center justify-center flex-wrap gap-3 mt-auto relative z-10">
                    <a
                      href={portfolioItems[ix].repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
                      onClick={(e) => {
                        const url = portfolioItems[ix].repo;
                        if (url.includes("pointerpointer.com")) {
                          e.preventDefault();
                          showToast("Coming soon");
                        }
                      }}
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={portfolioItems[ix].liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-200 via-white/80 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2"
                      onClick={(e) => {
                        const url = portfolioItems[ix].liveDemoUrl;
                        const text = (portfolioItems as any)[ix].liveDemoText?.toLowerCase() || "";
                        if (text.includes("coming soon") || url.includes("pointerpointer.com")) {
                          e.preventDefault();
                          showToast("Coming soon");
                        }
                      }}
                    >
                      <FaExternalLinkAlt /> {portfolioItems[ix].liveDemoText}
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
