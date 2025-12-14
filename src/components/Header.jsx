import { Link } from "react-scroll";
import HS from "../styles/Header.module.css";
import Logo from "../assets/LogoWhite.png";
import { useEffect, useRef } from "react";
import HamMenu from "../ui/MobileMenu";

const Links = [
  {
    link: "#home",
    Name: "Home",
  },
  {
    link: "#services",
    Name: "Services",
  },
  {
    link: "#portfolio",
    Name: "Portfolio",
  },
  {
    link: "#about",
    Name: "About",
  },
  {
    link: "#contact",
    Name: "Contact",
  },

  // TODO : Add a blog page for code craft
  // just an idea
  // (ps. im adding it)
  // - sharwin

  // {
  //   link: "",
  //   Name: "Blog ",
  // },
];

/* const NavLinks = Links.map((item, index) => {
  const { link, Name } = item;
  return (
    <a href={link} key={index}>
      {Name}
    </a>
  );
}); */

const NavLinks = Links.map((item, index) => {
  const { link, Name } = item;

  return (
    <Link
      key={index}
      to={link.replace("#", "")}
      smooth={true}
      duration={1000}
      offset={-50}
      style={{ cursor: `pointer` }}
      easing="easeInOutQuart"
    >
      {Name}
    </Link>
  );
});

function Header() {
  const hdrRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hdr = hdrRef.current;
      if (!hdr) return;

      if (window.scrollY > 200) {
        hdr.classList.add(HS.scroll);
      } else {
        hdr.classList.remove(HS.scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={HS.headerWrapper} ref={hdrRef}>
        <header>
          <HamMenu />
          <div className={HS.logo}>
            <img src={Logo} alt="" height={"24px"} />
            <span className={HS.name}>Code Craft</span>
          </div>
          <nav className={HS.links}>{NavLinks}</nav>
          {/* <button className={HS.quot}>Get a Quote</button> */}
          <Link
            to={"contact"}
            smooth={true}
            duration={1000}
            offset={-50}
            easing="easeInOutQuart"
          >
            <button className={HS.quote}>
              <div>
                <div className={HS.svgwrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Get a Quote</span>
            </button>
          </Link>
        </header>
      </div>
    </>
  );
}

export default Header;
