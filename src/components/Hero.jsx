
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
            <img src="/images/logo.webp" alt="Pentium Labs" />
            <span>Pentium Labs</span>
          </a>
        </motion.div>

        <div className="hero-product-layout">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >

            <div className="hero-product-eyebrow">
              <span className="hero-eyebrow-dot" />
              A FLAGSHIP PRODUCT BY PENTIUM LABS
            </div>

            <div className="hero-product-label">
              INTRODUCING
            </div>

            <h1>
              Namaste
              <br />
              <span>Service.</span>
            </h1>

            <p>
              A smarter way to manage service operations.
              Bring customers, service requests, technicians
              and business workflows together in one powerful
              platform.
            </p>

            <div className="hero-product-features">
              <span>Service Management</span>
              <span>Customer Management</span>
              <span>Technician Tracking</span>
            </div>

            <div className="hero-action">
              <a
                href="https://namasteservice.in"
                target="_blank"
                rel="noreferrer"
                className="hero-button"
              >
                Explore Namaste Service
                <span>↗</span>
              </a>
            </div>

            <div className="hero-built-by">
              DESIGNED & BUILT BY <strong>PENTIUM LABS</strong>
            </div>

          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >

            <div className="hero-visual-glow" />

            <div className="hero-dashboard-frame">

              <div className="hero-dashboard-topbar">
                <div className="hero-dashboard-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>NAMASTE SERVICE · DASHBOARD</span>
              </div>

              <div className="hero-dashboard-image">
                <img
                  src="/images/frontdash.webp"
                  alt="Namaste Service software dashboard"
                />
              </div>

            </div>

            <div className="hero-dashboard-caption">
              <span className="hero-caption-check">✓</span>
              <div>
                <strong>One platform. Complete control.</strong>
                <span>Service operations made simpler.</span>
              </div>
            </div>

          </motion.div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO DISCOVER</span>
          <span className="hero-scroll-line" />
          <span>01 — 02</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
