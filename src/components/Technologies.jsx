import { Icon } from "@iconify/react";
import TSt from "../styles/Technologies.module.css";

function Technologies() {
  const technologies = [
    { name: "HTML5", icon: "fa-brands:html5", color: "hsl(12, 100%, 60%)" },
    { name: "CSS3", icon: "fa-brands:css3-alt", color: "hsl(201, 69%, 47%)" },
    {
      name: "JavaScript",
      icon: "simple-icons:javascript",
      color: "hsl(53, 93%, 54%)",
    },
    {
      name: "TypeScript",
      icon: "simple-icons:typescript",
      color: "hsl(210, 97%, 47%)",
    },
    {
      name: "MongoDB",
      icon: "simple-icons:mongodb",
      color: "hsl(118, 39%, 48%)",
    },
    {
      name: "Express.js",
      icon: "simple-icons:express",
      color: "hsl(0, 0%, 70%)",
    },
    { name: "React", icon: "fa-brands:react", color: "hsl(189, 100%, 50%)" },
    {
      name: "Node.js",
      icon: "fa-brands:node-js",
      color: "hsl(109, 39%, 35%)",
    },
    { name: "n8n", icon: "simple-icons:n8n", color: "hsl(345, 81%, 61%)" },
    { name: "Docker", icon: "fa-brands:docker", color: "hsl(206, 85%, 54%)" },
    { name: "PHP", icon: "fa-brands:php", color: "hsl(225, 35%, 57%)" },
    { name: "MySQL", icon: "simple-icons:mysql", color: "hsl(206, 81%, 32%)" },
    {
      name: "Firebase",
      icon: "simple-icons:firebase",
      color: "hsl(45, 100%, 59%)",
    },
    {
      name: "Supabase",
      icon: "simple-icons:supabase",
      color: "hsl(143, 32%, 49%)",
    },
    { name: "Git", icon: "fa-brands:git-alt", color: "hsl(10, 86%, 57%)" },
    { name: "DevOps", icon: "mdi:infinity", color: "hsl(204, 100%, 40%)" },
    {
      name: "Figma",
      icon: "streamline-logos:figma-logo",
      color: "hsl(261, 47%, 87%)",
    },
  ];

  const Technologie = technologies.map((Technology, index) => {
    const { name, icon, color } = Technology;

    return (
      <div className={`${TSt.card}`} key={index}>
        <div
          className={`${TSt.image} img ${name}`}
          style={{
            "--tech-color": color,
          }}
        >
          <Icon icon={icon} className={TSt.ico} width="2em" height="2em" />
        </div>
        <div className={TSt.name}>{name}</div>
      </div>
    );
  });

  return (
    <>
      <section className={TSt.Technology}>
        <h1>Technologies We Master</h1>
        <h2>Wide Range of technologies that we offer and work with</h2>
        <div className={TSt.carousel}>
          <div className={TSt.group}>{Technologie}</div>
          <div className={TSt.group} aria-hidden>
            {Technologie}
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
