import Hro from "../styles/Hero.module.css";
import { Link } from "react-scroll";
import BG from "../ui/HeroBG";

function Hero() {
  return (
    <section className={Hro.Hero} id="home">
      <div className={Hro.Intro}>
        <div className={Hro.wrapper}>
          <span className={Hro.L1}>Crafting Digital Excellence,</span>
          <span className={Hro.L2}>One Code at a Time</span>
        </div>
        <span className={Hro.L3}>
          Professional web development services that bring your vision to life
        </span>
      </div>
      <div className={Hro.button_wrapper}>
        <Link
          to={"portfolio"}
          smooth={true}
          duration={1000}
          offset={-50}
          style={{ cursor: `pointer` }}
          easing="easeInOutQuart"
        >
          <button className={Hro.ViewWork}>
            <div className={Hro.cont}>&nbsp;View Our Work</div>
          </button>
        </Link>

        {/* <button className={Hro.start}>Get in touch</button> */}
        <Link
          to={"contact"}
          smooth={true}
          duration={1000}
          offset={-50}
          style={{ cursor: `pointer` }}
          easing="easeInOutQuart"
        >
          <button className={Hro.start}>Contact Us</button>
        </Link>
        <a href="#contact"></a>
      </div>
      <BG />
      <i
        className={`fas fa-chevron-down text-2xl text-gray-400 ${Hro.scroll}`}
      ></i>
    </section>
  );
}

export default Hero;
