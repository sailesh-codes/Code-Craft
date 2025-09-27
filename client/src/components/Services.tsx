import { FaLaptopCode, FaShoppingCart, FaCode, FaMobileAlt, FaTools, FaSearch, FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "fas fa-laptop-code": FaLaptopCode,
  "fas fa-shopping-cart": FaShoppingCart,
  "fas fa-code": FaCode,
  "fas fa-mobile-alt": FaMobileAlt,
  "fas fa-tools": FaTools,
  "fas fa-search": FaSearch,
};

export default function Services() {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Custom Website Development",
      description: "Tailor-made websites built from scratch to perfectly match your brand and requirements.",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400",
      link: "https://rollouttechnologies.com/a-guide-to-custom-website-development/"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and admin panels.",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400",
      link: "https://www.sana-commerce.com/blog/ecommerce-solution-providers/"
    },
    {
      icon: "fas fa-code",
      title: "Web Application Development",
      description: "Complex web applications with advanced functionality and user management systems.",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400",
      link: "https://www.sana-commerce.com/blog/ecommerce-solution-providers/"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile-Responsive Design",
      description: "Websites that look and work perfectly on all devices, from desktop to mobile.",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400",
      link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"
    },
    {
      icon: "fas fa-tools",
      title: "Website Maintenance & Support",
      description: "Ongoing maintenance, updates, and support to keep your website running smoothly.",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400",
      link: "https://www.theoctopustech.com/how-to-outsource-website-development-project/"
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      gradient: "bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600",
      link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    }
  ];

  return (
    <section id="services" className="bg-black py-16 px-2 min-h-[60vh] flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-2 tracking-tight">
        Our Services
      </h2>
      <p className="text-neutral-200 text-lg md:text-xl mb-10 text-center font-semibold max-w-4xl">
        Comprehensive web development solutions tailored to your business needs
      </p>

      {/* Holographic Card Effect Styles */}
      <style>{`
        .holographic-card {
          position: relative;
          border-radius: 1.5rem;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || FaCode;

          return (
            <div
              key={service.title}
              className={`holographic-card group w-full min-h-[290px] flex flex-col items-center justify-between p-8`}
            >
              <Icon className="mb-4 text-purple-100 text-4xl relative z-10" />
              <h3 className="text-2xl font-bold text-cyan-300 text-center mb-2 relative z-10">
                {service.title}
              </h3>
              <p className="text-[15px] text-purple-100 text-center flex-grow mb-5 relative z-10">
                {service.description}
              </p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-7 py-2 rounded-full bg-gradient-to-r from-white/90 to-cyan-200 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center gap-2 relative z-10"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <FaArrowRight />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
