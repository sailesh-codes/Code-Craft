import { Icon } from "@iconify/react";
import Ham from "./styles/HamMenu.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

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
];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const iconSize = 32;
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e) => {
      const menuEl = menuRef.current;
      const btnEl = buttonRef.current;
      if (!menuEl || !btnEl) return;
      if (!menuEl.contains(e.target) && !btnEl.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={Ham.hamWrapper}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        ref={buttonRef}
      >
        <Icon
          icon={isOpen ? "material-symbols:close-rounded" : "material-symbols:menu-open-rounded"}
          width={iconSize}
          height={iconSize}
        ></Icon>
      </button>
      <div ref={menuRef} className={`${Ham.nav_menu} ${isOpen ? Ham.open : Ham.closed}`}>
        <nav className={Ham.mobileNav}>
          {Links.map((item, index) => (
            <Link
              key={index}
              to={item.link.replace("#", "")}
              smooth={true}
              duration={1000}
              offset={-50}
              onClick={closeMenu}
              className={Ham.navLink}
            >
              {item.Name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-50}
            onClick={closeMenu}
          >
            <button className={Ham.quoteBtn}>
              <div>
                <div className={Ham.svgwrapper}>
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
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
