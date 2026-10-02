import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-background">
        <div />
        <div />
      </div>

      <div className="contact-container">

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="contact-content">

            <div className="contact-eyebrow">
              HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Let's build
              <br />
              <span>something useful.</span>
            </h2>

            <p>
              Tell us what you're trying to build, what isn't working,
              or what you want to automate. We'll help you figure out
              the right technical approach.
            </p>

            <a
              href="mailto:pentiumlabs@gmail.com?subject=Project%20Enquiry"
              className="contact-button"
            >
              Start a Conversation
              <span>↗</span>
            </a>

          </div>

          <div className="contact-mark">
            <div />
            <div />
            <div />
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;