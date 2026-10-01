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
            Service Operations Platform
            <span className="eyebrow-line" />
          </div>

          <h1>
            One platform.
            <br />
            <span>Every service.</span>
          </h1>

          <p>
            Our Product <b>Namaste Service</b> connects customers, digital stores, authorised
            service centers and technicians through one intelligent ERP
            platform.
          </p>

          <div className="hero-buttons">
            <a
                href="https://namasteservice.in"
                className="hero-primary"
            >
            Live Demo
        <span>↗</span>
            </a>
            </div>
        </motion.div>

        <motion.div
          className="product-preview"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <div className="preview-label preview-label-one">
            <span className="label-dot" />
            ERP Platform
          </div>

          <div className="preview-label preview-label-two">
            <span>●</span>
            Service management
          </div>

          <div className="preview-shadow" />

          <div className="product-window">
            <div className="product-window-bar">
              <div className="window-controls">
                <i />
                <i />
                <i />
              </div>

              <div className="window-title">
                NamasteService ERP
              </div>

              <div className="window-status">
                <span />
                Live
              </div>
            </div>

            <div className="product-image">
              <img
                src="/images/frontdash.png"
                alt="Pentium Labs ERP"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;