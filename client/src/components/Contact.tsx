import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    Icon: FaLinkedin,
    colors: ["#0077b5", "#00a0dc"],
  },
  {
    href: "https://github.com",
    label: "GitHub",
    Icon: FaGithub,
    colors: ["#6e5494", "#8b6cc3"],
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: FaTwitter,
    colors: ["#56CCF2", "#2F80ED"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/codecraft2k@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: 'New Contact from Code Craft Website',
          _template: 'table',
          _replyto: formData.email,
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      toast({
        title: "Message Sent!",
        description:
          "Thank you for your message! We will get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 min-h-[60vh] flex flex-col md:flex-row gap-6 max-w-6xl mx-auto rounded-3xl shadow-2xl">
      <span id="get-quote" className="sr-only" aria-hidden="true"></span>
      {/* Contact Form Card */}
      <div
        className="flex-1 p-6 rounded-2xl text-white flex flex-col transition-transform duration-300 shadow-lg cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
          border: "2px solid rgba(61, 213, 243, 0.3)",
          minWidth: "280px",
        }}
      >
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-4"
          style={{ color: "#14e5ff" }}
        >
          Let's Build Something Amazing Together
        </h2>
        <p className="text-white/80 mb-6 max-w-md text-sm">
          Ready to start your project? Get in touch and let's discuss how we
          can bring your vision to life.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md text-sm">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name *"
            className="rounded-lg px-3 py-2 bg-neutral-900/90 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow duration-300 shadow-md hover:shadow-lg"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address *"
            className="rounded-lg px-3 py-2 bg-neutral-900/90 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow duration-300 shadow-md hover:shadow-lg"
            value={formData.email}
            onChange={handleInputChange}
          />
          <select
            name="projectType"
            className="rounded-lg px-3 py-2 bg-neutral-900/90 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow duration-300 shadow-md hover:shadow-lg"
            value={formData.projectType}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Project Type
            </option>
            <option>Website Development</option>
            <option>E-commerce Store</option>
            <option>Web Application</option>
            <option>Website Maintenance</option>
            <option>Other</option>
          </select>
          <textarea
            name="message"
            required
            placeholder="Project Details *"
            className="rounded-lg px-3 py-2 min-h-[90px] bg-neutral-900/90 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow duration-300 shadow-md hover:shadow-lg resize-none"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-auto px-7 py-1.5 rounded-full bg-gradient-to-r from-white/90 to-cyan-200 text-gray-900 font-semibold shadow hover:scale-105 transition flex justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Info Card */}
      <div
        className="flex-1 p-6 text-white flex flex-col justify-between max-w-md transition-transform duration-300 shadow-lg cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
          border: "2px solid rgba(61, 213, 243, 0.3)",
          minWidth: "280px",
        }}
      >
        <div>
          <h3
            className="text-xl font-extrabold mb-4"
            style={{ color: "#14e5ff" }}
          >
            Get In Touch
          </h3>
          <div className="flex items-center mb-4 gap-3 text-sm">
            <FaEnvelope className="text-violet-300 text-2xl shrink-0" />
            <span className="text-lg break-all">codecraft2k@gmail.com</span>
          </div>
          <div className="flex items-center mb-4 gap-3 text-sm">
            <FaPhone className="text-violet-300 text-2xl shrink-0" />
            <span className="text-lg">+91 9629590312,</span>
            <span className="text-lg">+91 9597755722</span>
          </div>
          <div className="flex items-center mb-4 gap-3 text-sm">
            <FaMapMarkerAlt className="text-violet-300 text-2xl shrink-0" />
            <span className="text-lg">Coimbatore, Tamil Nadu</span>
          </div>
          <p className="text-yellow-100 text-xs mb-8">
            Mon-Fri 9AM-6PM EST
            <br />
            Serving clients worldwide
          </p>
        </div>

        <p className="text-yellow-200 font-semibold mt-8 text-center text-sm">
          
          <br />
        </p>
      </div>
    </section>
  );
}
