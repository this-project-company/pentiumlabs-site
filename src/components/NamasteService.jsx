
import { motion } from "framer-motion";
import "./NamasteService.css";

function NamasteService() {
  return (
    <section id="namaste-service" className="namaste-section">
      <div className="namaste-container">

        <motion.div
          className="namaste-copy"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="namaste-eyebrow">
            <span className="namaste-status-dot" />
            A PRODUCT BY PENTIUM LABS
          </div>

          <div className="namaste-label">
            OUR FLAGSHIP PRODUCT
          </div>

          <h2>
            Meet
            <br />
            <span>Namaste Service.</span>
          </h2>

          <p className="namaste-description">
            Service management, simplified.

            Namaste Service is our flagship platform, built to bring
            customers, service centres and field technicians together.
            From managing service requests to tracking operations,
            everything works together in one powerful platform.
          </p>

          <div className="namaste-features">
            <span>Service Management</span>
            <span>Customer Management</span>
            <span>Technician Management</span>
            <span>Business Operations</span>
          </div>

          <div className="namaste-actions">
            <a
              href="https://namasteservice.in"
              target="_blank"
              rel="noreferrer"
              className="namaste-primary-button"
            >
              Explore Namaste Service
              <span>↗</span>
            </a>
          </div>

          <div className="namaste-product-credit">
            <span>BUILT BY</span>
            <strong>PENTIUM LABS</strong>
          </div>

        </motion.div>

        <motion.div
          className="namaste-visual"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="namaste-visual-glow" />

          <div className="namaste-image-card">

            <div className="namaste-image-header">
              <div className="namaste-image-dots">
                <span />
                <span />
                <span />
              </div>

              <span>NAMASTE SERVICE · DASHBOARD</span>
            </div>

            <div className="namaste-image-content">
              <img
                src="/images/frontdash.webp"
                alt="Namaste Service management dashboard"
              />
            </div>

          </div>

          <div className="namaste-floating-card">
            <div className="namaste-floating-icon">
              ✓
            </div>

            <div>
              <strong>One unified platform</strong>
              <span>Everything in one place.</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default NamasteService;
