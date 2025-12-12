import style from "../styles/PortfolioDisplay.module.css";
import EchoAI from "../assets/Portfolio images/EchoAI.png";
import KSM from "@/assets/Portfolio images/KSM.png";
import Megasifi from "@/assets/Portfolio images/Megasifi.png";
import MoviePedia from "../assets/Portfolio images/MoviePedia.png";

const projectItems = [
  {
    name: "Megasifi",
    description:
      "Megasifi is a modern e-commerce platform offering a vareity of stylish collection",
    demo: "",
    image: Megasifi,
  },
  {
    name: "K.S.M",
    description: "Branding and portfolio website.",
    demo: "",
    image: KSM,
  },
  {
    name: "Movie Pedia",
    description:
      "MoviePedia lets you search, discover, and explore movies in seconds.",
    demo: "",
    image: MoviePedia,
  },
  {
    name: "Echo AI",
    description:
      "Echo AI is a conversational AI assistant designed for productivity.",
    demo: "",
    image: EchoAI,
  },
];

function Buttons({ Demo }) {
  return (
    <div className={style.ButtonWrapper}>
      <a href={Demo} target="_blank">
        <button>Demo</button>
      </a>
    </div>
  );
}

function PortfolioDisplay() {
  return (
    <section className={style.Portfolio} id="portfolio">
      <h1>Featured Projects</h1>
      <h2>Showcasing our expertise</h2>

      <div className={style.Projects}>
        {projectItems.map((project, index) => (
          <div className={style.ProjectCard} key={index}>
            <div className={style.ImageWrapper}>
              <img src={project.image} alt={project.name} />
            </div>
            <div className={style.Overlay1}>
              <h1 className={style.Title}>{project.name}</h1>
            </div>
            <div className={style.Overlay}>
              <div className={style.OverlayContent}>
                <p>{project.description}</p>
              </div>
              <Buttons />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioDisplay;
