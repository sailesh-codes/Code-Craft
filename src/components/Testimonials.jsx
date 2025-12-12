import styles from "../styles/testimonial.module.css";

const testimonials = [
  {
    name: "Richard Nelson",
    role: "CTO, Slack",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    quote:
      "Radiant made undercutting all of our competitors an absolute breeze.",
    badge: "Verified",
  },
  {
    name: "Ava Johnson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    quote:
      "This platform helped us launch our product twice as fast as expected.",
    badge: "Verified",
  },
  {
    name: "Liam Carter",
    role: "Engineering Lead",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    quote:
      "Incredible support and a fantastic experience from start to finish.",
    badge: "Verified",
  },
  {
    name: "Sophia Lee",
    role: "CEO, BrightTech",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    quote:
      "Our team’s productivity skyrocketed after switching to this solution.",
    badge: "Verified",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h1>What Our Clients Say</h1>
      <h2>Real feedback from teams we partner with</h2>

      <div className={styles.grid}>
        {testimonials.map(({ name, role, image, quote, badge }) => (
          <article className={styles.card} key={name}>
            <p className={styles.quote}>{quote}</p>
            <div className={styles.profile}>
              <img className={styles.avatar} src={image} alt={name} />
              <div>
                <h3 className={styles.name}>
                  {name} <span className={styles.badge}>{badge}</span>
                </h3>
                <p className={styles.role}>{role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
