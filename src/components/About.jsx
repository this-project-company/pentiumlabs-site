
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-eyebrow">
            <span className="about-dot" />
            GET TO KNOW US
          </div>

          <h2>
            Small team.
            <br />
            <span>Big vision.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="about-intro">
            We're a small group of people who believe
            great software can make businesses work better.
          </p>

          <p>
            Our experience in building software has shown us
            the real challenges businesses face every day.
            We want to turn that understanding into practical,
            reliable products that solve meaningful problems.
          </p>

          <p>
            Pentium Labs is a new beginning for us — a chance
            to bring our experience, ideas and vision together
            under one name. We're starting small, thinking big
            and building with purpose.
          </p>

          <div className="about-signature">
            <div className="about-signature-line" />
            <span>THE PEOPLE BEHIND PENTIUM LABS</span>
          </div>
        </motion.div>

      </div>

      <div className="about-bottom">
        <span>BUILT WITH EXPERIENCE.</span>
        <span>DRIVEN BY VISION.</span>
        <span>JUST GETTING STARTED.</span>
      </div>
    </section>
  );
}

export default About;
