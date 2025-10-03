export default function Technologies() {
  const technologies = [
    { name: "HTML5", icon: "fab fa-html5", gradient: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", gradient: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "fab fa-js", gradient: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", icon: "fas fa-code", gradient: "from-blue-400 to-blue-700" }, // Uses code icon for TypeScript
    { name: "React", icon: "fab fa-react", gradient: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "fab fa-node-js", gradient: "from-green-500 to-emerald-500" },
    { name: "Express", icon: "fas fa-server", gradient: "from-slate-500 to-gray-700" },
    { name: "MongoDB", icon: "fas fa-leaf", gradient: "from-green-600 to-emerald-600" },
    { name: "n8n", icon: "fas fa-diagram-project", gradient: "from-rose-500 to-pink-600" },
    { name: "Docker", icon: "fab fa-docker", gradient: "from-cyan-500 to-blue-600" },
    { name: "PHP", icon: "fab fa-php", gradient: "from-purple-500 to-indigo-500" },
    { name: "MySQL", icon: "fas fa-database", gradient: "from-sky-500 to-blue-600" },
    { name: "Firebase", icon: "fas fa-fire", gradient: "from-yellow-500 to-amber-600" },
    { name: "Supabase", icon: "fas fa-database", gradient: "from-emerald-500 to-green-600" },
    { name: "Git", icon: "fab fa-git-alt", gradient: "from-rose-500 to-pink-600" },
    { name: "DevOps", icon: "fas fa-gears", gradient: "from-indigo-500 to-purple-600" },
    { name: "Figma", icon: "fab fa-figma", gradient: "from-pink-500 to-green-500" }, // Figma with standard Font Awesome brand icon
  ];

  // duplicate items to create a seamless infinite marquee
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section
      id="technologies"
      className="py-20 bg-black"
      data-testid="section-technologies"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-technologies-title">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="text-technologies-subtitle">
            Cutting-edge technologies and frameworks to build modern, scalable web solutions
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="marquee relative">
          <div className="marquee-track gap-10 pr-10">
            {marqueeItems.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center select-none"
                data-testid={`tech-item-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center mb-3 shadow-sm transition-transform duration-200 tech-icon`} style={{ transformOrigin: 'center', willChange: 'transform' }}>
                  <i className={`${tech.icon} text-xl text-white`}></i>
                </div>
                <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
