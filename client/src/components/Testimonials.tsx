export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Davis",
      role: "CEO, TechStart Inc.",
      content: "Code Craft delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth and enjoyable.",
      image: "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      color: "purple"
    },
    {
      name: "David Chen",
      role: "Marketing Director, Creative Agency",
      content: "Amazing work! The team transformed our outdated website into a modern, responsive platform that perfectly represents our brand. The results speak for themselves - 300% increase in conversions!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      color: "blue"
    },
    {
      name: "Maria Rodriguez",
      role: "Owner, Bella Vista Restaurant",
      content: "The online ordering system they built for our restaurant has been a game-changer. During the pandemic, it helped us maintain business continuity and even grow our customer base.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      color: "green"
    },
    {
      name: "James Wilson",
      role: "Founder, InnovateLab",
      content: "Working with Code Craft was a fantastic experience. They understood our vision and delivered a custom web application that perfectly fits our startup's unique requirements. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      color: "pink"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-black to-blue-900"
      data-testid="section-testimonials"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl muted max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Real feedback from satisfied clients who trust us with their digital presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-xl hover-glow"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <h4 className="text-lg font-bold text-white" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    testimonial.color === 'purple' ? 'metric-purple' :
                    testimonial.color === 'blue' ? 'metric-blue' :
                    testimonial.color === 'green' ? 'metric-green' :
                    testimonial.color === 'pink' ? 'metric-pink' : 'metric-purple'
                  }`} data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex metric-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="muted italic" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
