import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-background">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">

        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#home">
            <img
              src="/images/logo.webp"
              alt="Pentium Labs"
            />

            <span>Pentium Labs</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >



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

          <div className="hero-action">
            <a href="#work" className="hero-button">
              See Our Work
              <span>↓</span>
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-dot hero-dot-one" />
          <div className="hero-dot hero-dot-two" />
          <div className="hero-dot hero-dot-three" />

          <div className="hero-center">

            <div className="hero-center-logo">
              <img
                src="/images/logo.webp"
                alt=""
              />
            </div>

            <span>Software · Systems · Automation</span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;