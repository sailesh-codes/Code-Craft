import SSt from "../styles/Services.module.css";

function LearnMore({ redirect }) {
  return (
    <>
      <a href={redirect} className={SSt.LearnMore} target="_blank">
        <button className={SSt.LearnMoreButton}>
          Learn More
          <div className={SSt.SVGWrapper}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </div>
        </button>
      </a>
    </>
  );
}

function MouseMoveHandler(e) {
  document.querySelectorAll(`.${SSt.card}`).forEach((card) => {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}

function Box({ Image, title, description, redirect }) {
  return (
    <>
      <div className={SSt.card}>
        <div className={SSt.CardContent}>
          <i className={`${Image} ${SSt.icon}`}></i>
          <div className={SSt.title}>{title}</div>
          <div className={SSt.description}>{description}</div>
          <LearnMore redirect={redirect} />
        </div>
      </div>
    </>
  );
}

function Services() {
  const ServicesBrief = [
    {
      title: "Custom Website Development",
      description:
        "Tailor-made websites built from scratch to perfectly match your brand and requirements",
      link: "https://rollouttechnologies.com/a-guide-to-custom-website-development/",
      Image: "fas fa-laptop-code",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment integration, inventory management, and admin panels.",
      link: "https://www.sana-commerce.com/blog/ecommerce-solution-providers/",
      Image: "fas fa-shopping-cart",
    },
    {
      title: "Web Application Development",
      description:
        "Complex web applications with advanced functionality and user management systems.",
      link: "https://www.sana-commerce.com/blog/ecommerce-solution-providers/",
      Image: "fas fa-code",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "Websites that look and work perfectly on all devices, from desktop to mobile.",
      link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
      Image: "fas fa-mobile-alt",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and support to keep your website running smoothly.",
      link: "https://www.theoctopustech.com/how-to-outsource-website-development-project/",
      Image: "fas fa-tools",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive more organic traffic to your website.",
      link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      Image: "fas fa-search",
    },
  ];
  return (
    <>
      <section className={SSt.Services} id="services">
        <h1>Our Services</h1>
        <h2>
          Comprehensive web development solutions tailored to your business
          needs
        </h2>
        <div className={SSt.cards} onMouseMove={(e) => MouseMoveHandler(e)}>
          {ServicesBrief.map((service, index) => {
            const { title, description, link, Image } = service;
            return (
              <Box
                title={title}
                description={description}
                redirect={link}
                Image={Image}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
