import { FaRegThumbsUp, FaChartLine, FaStar } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="bg-black py-12 px-6 min-h-[40vh] flex flex-col md:flex-row items-center justify-center gap-12">
      <style>
        {`
        .cta-btn-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 10px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.4rem 1rem; /* Reduced from 0.62rem 1.35rem */
          border-radius: 9999px;
          background: linear-gradient(90deg, #f5fdff 85%, #aaf1fb 100%);
          color: #222;
          font-weight: 600;
          font-size: 0.9rem; /* Reduced from 1.05rem */
          box-shadow: 0 6px 18px 1px rgba(75,170,220,0.14), 0 2px 6px #ccc;
          outline: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: box-shadow 0.22s, transform 0.2s, background 0.38s;
          margin-top: 0.6rem;
        }
        .cta-btn:hover, .cta-btn:focus {
          transform: scale(1.05);
          box-shadow: 0 10px 24px 2px rgba(75,170,220,0.18), 0 2px 6px #aaf1fb;
          background: linear-gradient(90deg, #e6fafd 85%, #6adcfb 100%);
        }
        .cta-btn .arrow {
          font-weight: bold;
          font-size: 1.09em;
          letter-spacing: 2px;
          transition: color 0.22s;
        }
        .cta-btn:hover .arrow {
          animation: arrow-yellow 1s infinite;
        }
        @keyframes arrow-yellow {
          0% { color: #222; }
          30% { color: #FBC638; }
          60% { color: #FBC638; }
          100% { color: #222; }
        }
        .card-transparent {
          background: none !important;
          border-radius: 1.3rem;
          box-shadow: none !important;
          padding: 2rem 1.2rem;
          width: 100%;
          max-width: 410px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .content-white {
          color: #fff !important;
          font-family: inherit;
        }
        .content-list-white li {
          color: #fff !important;
          font-family: inherit;
          font-weight: 600;
        }
        `}
      </style>

      {/* Left transparent card */}
      <div className="card-transparent mb-6 md:mb-0 flex flex-col items-center justify-center text-center">
        <FaRegThumbsUp className="text-yellow-400 text-4xl drop-shadow-md mb-4" />
        <h3 className="text-lg md:text-2xl font-extrabold text-center mb-3" style={{ color: "#14e5ff" }}>
          Boost Customer Confidence with Personalization
        </h3>
        <p className="text-base md:text-lg content-white text-center font-medium max-w-md mx-auto">
          It highlights how a personalized website builds trust and helps customers find what they need easily.
        </p>
      </div>

      {/* Middle main section */}
      <div className="flex flex-col items-center max-w-lg w-full text-center">
        <FaStar className="text-yellow-400 text-4xl drop-shadow-md mb-4" />
        <h2
          className="text-3xl md:text-4xl font-extrabold leading-tight text-center mb-2"
          style={{ color: "#14e5ff" }}
        >
          Stand Out Online<br />
          With a Custom Website
        </h2>
        <p className="text-base md:text-lg content-white font-semibold mt-2 mb-1 max-w-md text-center">
          First impressions matter.<br />
          Your digital presence should <span className="font-extrabold" style={{ color: "#fff" }}>reflect your vision</span> and capture attention instantly.
        </p>
        <ul className="text-sm md:text-base content-list-white flex flex-col gap-2 max-w-xs text-center">
          <li>No generic templates.</li>
          <li>No hidden fees.</li>
          <li>Just personalized collaboration and results you'll love.</li>
        </ul>
        <div className="cta-btn-wrapper w-full max-w-xs">
          <a href="#contact" onClick={(e) => { e.preventDefault(); const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="cta-btn w-full justify-center">
            Contact Us
            <span className="arrow">{' >>>'}</span>
          </a>
        </div>
      </div>

      {/* Right transparent card */}
      <div className="card-transparent mb-6 md:mb-0 flex flex-col items-center justify-center text-center">
        <FaChartLine className="text-yellow-400 text-4xl drop-shadow-md mb-4" />
        <h3 className="text-lg md:text-2xl font-extrabold text-center mb-3" style={{ color: "#14e5ff" }}>
          Maximize Customer Lifetime Value with Smart Personalization
        </h3>
        <p className="text-base md:text-lg content-white text-center font-medium max-w-md mx-auto">
          Explains how personalized experiences encourage repeat visits, build loyalty, and increase the total value each customer brings to your business over time.
        </p>
      </div>
    </section>
  );
}
