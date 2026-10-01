import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SOFTWARE ENGINEERING & TECHNOLOGY SERVICES
            <span className="eyebrow-line" />
          </div>

          <h1>
            We build software
            <br />
            <span>businesses depend on.</span>
          </h1>

          <p>
            Pentium Labs designs, builds and operates custom software,
            web applications, mobile apps and business systems for
            companies that need technology built around the way they work.
          </p>

          <div className="hero-buttons">

            <a href="#work" className="hero-secondary">
              See Our Work
              <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>01</span>
            <div />
            <span>Software · Systems · Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;