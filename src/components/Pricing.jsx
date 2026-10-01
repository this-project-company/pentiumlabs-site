import { motion } from "framer-motion";
import "./Pricing.css";

function Pricing() {
  const features = [
    "Add and manage technicians",
    "Attend and manage service tickets",
    "HR management",
    "Accounts management",
    "Custom role-based access control",
  ];

  return (
    <section id="pricing" className="pricing-section">

      <div className="pricing-container">

        <motion.div
          className="pricing-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            PRICING
          </div>

          <h2>
            Pay for what
            <br />
            you actually use.
          </h2>

          <p>
            Pentium Labs follows a flexible pay-as-you-go model.
            Start with the capabilities your organisation needs
            and scale as your operation grows.
          </p>
        </motion.div>

        <motion.div
          className="pricing-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="pricing-card-top">

            <div>
              <div className="custom-label">
                CUSTOM
              </div>

              <h3>
                Built around
                <br />
                your operation.
              </h3>

              <p>
                A flexible ERP subscription where you
                pay for the services and capabilities
                your business uses.
              </p>
            </div>

            <div className="payg">
              <strong>PAYG</strong>
              <span>Pay as you go</span>
            </div>

          </div>

          <div className="pricing-divider" />

          <div className="pricing-features">
            {features.map((feature) => (
              <div
                className="pricing-feature"
                key={feature}
              >
                <span className="check">✓</span>
                {feature}
              </div>
            ))}
          </div>

          <div className="pricing-bottom">

            <div>
              <span className="pricing-note">
                Pricing is customised to your requirements.
              </span>
            </div>

            <a
              href="mailto:pentiumlabs@gmail.com"
              className="pricing-contact"
            >
              Contact Us
              <span>↗</span>
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Pricing;