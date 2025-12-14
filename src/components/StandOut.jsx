import { Description } from "@radix-ui/react-toast";
import { Icon } from "@iconify/react";
import style from "../styles/StandOut.module.css";
import { Link } from "react-scroll";
import { useState } from "react";

const contents = [
  {
    icon: "lucide:shield-check",
    title: "Boost Customer Confidence",
    description:
      "First impressions matter. Your digital presence should reflect your vision and capture attention instantly.",
  },
  {
    icon: "mdi:sparkles",
    title: "Stand Out Online With a Custom Website",
    description:
      "It highlights how a personalized website builds trust and helps customers find what they need easily.",
  },
  {
    icon: "mdi:finance",
    // icon: "mdi:hand-heart",
    title: "Maximize Customer Lifetime Value",
    description:
      "personalized experiences encourage repeat visits, build loyalty, and increase the total value.",
  },
];
const iconSize = 48;

const card = contents.map((content, index) => {
  const { icon, title, description } = content;
  return (
    <div className={style.card} key={index}>
      <div className={style.cardContent}>
        <div className={style.icon}>
          <Icon icon={icon} width={iconSize} height={iconSize} />
        </div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.desc}>{description}</p>
      </div>
    </div>
  );
});

function StandOut() {
  const [hovering, setHovering] = useState(false);
  console.log(hovering);
  return (
    <section className={style.StandOut}>
      <div className={style.CardsWrapper}>{card}</div>
      <div
        className={style.contactWrapper}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link
          to={"contact"}
          smooth={true}
          duration={1000}
          offset={-50}
          style={{ cursor: `pointer` }}
          easing="easeInOutQuart"
        >
          <button>
            Contact Us{" "}
            <Icon
              icon={"mdi:arrow-right"}
              width={iconSize - 24}
              height={iconSize - 24}
            ></Icon>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default StandOut;
