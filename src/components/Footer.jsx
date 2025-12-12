import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import style from "../styles/Footer.module.css";
import LineHorizontal from "@/ui/LineHorizontal";

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

  // {
  //   link: "./Blog",
  //   Name: "Blog ",
  // },
];

const NavItems = Links.map((Nav, index) => {
  const { link, Name } = Nav;
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

const iconSize = "24px";

const SocialLinks = [
  {
    Name: "Linkedin",
    link: "https://www.linkedin.com/company/code-craft2k/",
    icon: (
      <Icon icon="simple-icons:linkedin" width={iconSize} height={iconSize} />
    ),
    color: "#0A66C2",
  },
  {
    Name: "Gmail",
    link: "",
    icon: <Icon icon="logos:google-gmail" width={iconSize} height={iconSize} />,
    // color: "#4285f4",
    color: "#000000",
  },
  {
    Name: "Phone",
    link: "",
    icon: <Icon icon="mdi:phone" width={iconSize} height={iconSize} />,
    color: "hsl(221, 100%, 68%)",
  },
  // {
  //   Name: "X",
  //   link: "https://www.X.com",
  //   icon: (
  //     <Icon
  //       icon="simple-icons:x"
  //       width={iconSize}
  //       height={iconSize}
  //     />
  //   ),
  //   color: "#FFFFFF",
  // },
  // {
  //   Name: "Facebook",
  //   link: "https://www.facebook.com",
  //   icon: (
  //     <Icon
  //       icon="simple-icons:facebook"
  //       width={iconSize}
  //       height={iconSize}
  //     />
  //   ),
  //   color: "#17A9FD",
  // },
  // {
  //   Name: "Instagram",
  //   link: "https://www.instagram.com",
  //   icon: (
  //     <Icon
  //       icon="simple-icons:instagram"
  //       width={iconSize}
  //       height={iconSize}
  //     />
  //   ),
  //   color: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
  // },
];

const Social = SocialLinks.map((social, index) => {
  const { Name, icon, link, color } = social;
  return (
    <a
      href={link}
      target="_blank"
      data-social={Name}
      style={{ "--accent-color": color }}
      key={index}
    >
      {icon}
      <div className={style.arrow}></div>
    </a>
  );
});

function Footer() {
  return (
    <>
      <section className={style.Footer}>
        <div className={style.TheFooter}>
          <div className={style.LeftWrapper}>
            <div className={style.Brand}>
              <div className={style.Logo}>Code Craft</div>
              <LineHorizontal />
              <div className={style.TeamCC}>
                <span>With passion and Love </span>
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>- Team </span>
                <span>Code Craft</span>
              </div>
            </div>
          </div>
          <div className={style.QuickLinksNav}>
            <h3>Navigation</h3>
            <LineHorizontal />
            <nav>{NavItems}</nav>
          </div>
          <div className={style.SocialMedia}>
            <h3></h3>
            {/* <LineHorizontal /> */}
            <div className={style.SocialMediaLinks}>{Social}</div>
          </div>
          <div className={style.copyright}>
            © 2025 <span>Code Craft</span>
          </div>
          <LineHorizontal />
        </div>

        <div className={style.bottom}>CODE CRAFT</div>
      </section>
    </>
  );
}

export default Footer;
