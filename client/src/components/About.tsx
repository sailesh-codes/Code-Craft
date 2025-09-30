import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { FaRocket, FaDollarSign, FaHeadset, FaExpandArrowsAlt } from "react-icons/fa";
import { sectionConfig, getGradientByIndex } from "@/config/cardGradients";
import { useToast } from "./Toast";

const keyPoints = [
  {
    icon: FaRocket,
    title: "Fast Turnaround Time",
    description:
      "We deliver projects quickly without compromising on quality, meeting all deadlines.",
    gradient:
      sectionConfig.about.keyPoints[0]?.gradient ||
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Pricing",
    description:
      "Competitive rates that provide excellent value for high-quality web development services.",
    gradient:
      sectionConfig.about.keyPoints[1]?.gradient ||
      "bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Flexible Design",
    description:
      "Building websites that adapt seamlessly to your needs today and grow effortlessly with you tomorrow.",
    gradient:
      sectionConfig.about.keyPoints[2]?.gradient ||
      "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
  },
];

const teamMembers = [
  {
    name: "Sailesh",
    role: "Lead Developer and AI Architect",
    description:
      "Full-stack developer with experience in React, Node.js, modern web technologies and AI solution architect.",
    image: "",
    portfolio: "https://sailesh-codes.vercel.app/",
    portfolioButtonText: "View Portfolio",
    gradient:
      sectionConfig.about.teamMembers[0]?.gradient ||
      "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
  },
  {
    name: "Sharwin Sriram",
    role: "UI/UX Designer",
    description: "Creative designer specializing in user experience and modern interface design.",
    image: "",
    portfolio: "https://pointerpointer.com/",
    portfolioButtonText: "Under Construction",
    gradient:
      sectionConfig.about.teamMembers[0]?.gradient ||
      "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
  },
  {
    name: "Nikeleshwaran",
    role: "Client and Server Side Developer",
    description: "Experienced developer who architects and develops end-to-end web solutions, bridging the gap between user experience and designing",
    image: "",
    portfolio: "https://portfolio-tau-eight-14n654r7db.vercel.app/",
    portfolioButtonText: "View Portfolio",
    gradient:
      sectionConfig.about.teamMembers[0]?.gradient ||
      "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
  },
  {
    name: "Makavishnu",
    role: "Database Administrator",
    description: "Expert in maintaining and securing efficient database operations.",
    image: "",
    portfolio: "https://pointerpointer.com/",
    portfolioButtonText: "Under Construction",
    gradient:
      sectionConfig.about.teamMembers[0]?.gradient ||
      "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
  },
];

export default function About() {
  const { showToast, ToastComponent } = useToast();
  const experienceRef = useCounterAnimation(5, 2000);
  const projectsRef = useCounterAnimation(100, 2000);
  const clientsRef = useCounterAnimation(50, 2000);
  const ratingRef = useCounterAnimation(4.9, 2000, 1);

  return (
    <section id="about" className="bg-black py-20 px-4 max-w-7xl mx-auto">
      {ToastComponent}
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-8 tracking-tight">
        Why Choose Code Craft?
      </h2>
      <p className="text-neutral-300 text-center mb-16 max-w-3xl mx-auto text-lg">
        We combine technical expertise with creative vision to deliver exceptional web solutions
      </p>

      {/* Key Points Section with color filling hover effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {keyPoints.map((point, idx) => {
          const Icon = point.icon;
          // Change titles for first three key points to cyan color
          const isHighlighted = idx === 0 || idx === 1 || idx === 2;
          return (
            <div
              key={idx}
              className={`relative group rounded-3xl p-8 flex flex-col items-center cursor-pointer border-3 border-transparent overflow-hidden shadow-2xl transition-shadow duration-500 ease-in-out`}
            >
              {/* Background gradient fill sliding up on hover */}
              <span
                className={`${point.gradient} absolute inset-x-0 bottom-0 rounded-b-3xl h-0 group-hover:h-full transition-all duration-500 ease-in-out z-0`}
                style={{ zIndex: 0 }}
              ></span>
              {/* Icon with yellow color and white hover */}
              <Icon className="relative text-yellow-400 text-5xl mb-6 transition-colors duration-500 group-hover:text-white z-10" />
              {/* Title */}
              <h4
                className={`relative font-extrabold text-xl mb-3 text-center transition-colors duration-500 group-hover:text-white z-10 ${
                  isHighlighted ? "text-cyan-400" : "text-purple-100"
                }`}
              >
                {point.title}
              </h4>
              {/* Description */}
              <p
                className="relative text-purple-100 text-center transition-colors duration-500 group-hover:text-white z-10"
              >
                {point.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Team Section with Hover Effect and Description on Hover */}
      <h3 className="text-3xl font-extrabold text-cyan-400 text-center mb-8">Meet Our Team</h3>
      <p className="text-neutral-300 text-center mb-12 max-w-3xl mx-auto">
        Talented developers and designers dedicated to your success
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-card relative rounded-3xl shadow-2xl cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
            style={{
              background: "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
              minHeight: "280px",
              border: "2px solid rgba(61, 213, 243, 0.3)", // lowered transparency of the aqua border
            }}
          >
            {/* Background gradient sliding up on hover */}
            <div
              className="absolute inset-0 rounded-3xl z-0 transition-transform duration-700 ease-in-out transform translate-y-full team-slide1"
              style={{ background: "transparent" }}
            ></div>
            {/* Front content: photo, name, role (visible by default, slides down on hover) */}
            <div
              className="p-6 rounded-3xl relative flex flex-col items-center text-purple-100 team-slide2"
              style={{ minHeight: "280px", background: "transparent" }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-3"
                  draggable={false}
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mb-3 text-purple-100 text-4xl font-bold select-none">
                  {member.name[0]}
                </div>
              )}
              <h4 className="font-extrabold text-xl mb-1 text-center text-cyan-400">{member.name}</h4>
              <p className="font-semibold text-purple-100 mb-0 text-center">{member.role}</p>
            </div>
            {/* Hidden content shown on hover: description, portfolio */}
            <div
              className="absolute inset-0 rounded-3xl p-6 flex flex-col items-center text-purple-100 team-hover-content"
              style={{
                top: "100%",
                left: 0,
                right: 0,
                bottom: 0,
                transition: "top 0.7s ease",
                zIndex: 3,
                background: "transparent",
              }}
            >
              <p className="mb-4 text-center">{member.description}</p>
              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-7 py-2 rounded-full bg-gradient-to-r from-white/90 to-cyan-200 text-gray-900 font-semibold shadow hover:scale-105 transition flex items-center justify-center text-center"
                  onClick={(e) => {
                    if ((member.portfolio || "").includes("pointerpointer.com")) {
                      e.preventDefault();
                      showToast("Coming soon");
                    }
                  }}
                >
                  {member.portfolioButtonText || "View Portfolio"}
                </a>
              )}
            </div>
            <style>{`
              .team-card:hover .team-slide1 {
                transform: translateY(0);
              }
              .team-card:hover .team-slide2 {
                transform: translateY(-100%);
              }
              .team-card:hover .team-hover-content {
                top: 0 !important;
              }
              .team-slide1,
              .team-slide2 {
                transition: transform 0.7s ease;
                backface-visibility: hidden;
              }
              .team-slide1 {
                will-change: transform;
                z-index: 1;
              }
              .team-slide2 {
                will-change: transform;
                z-index: 2;
                position: relative;
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}
