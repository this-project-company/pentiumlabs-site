import { motion } from "framer-motion";
import "./Process.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, users, constraints and the actual problem worth solving.",
  },
  {
    number: "02",
    title: "Design",
    text: "Define the architecture, workflows, interfaces and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop, integrate and test the software with continuous feedback.",
  },
  {
    number: "04",
    title: "Deploy",
    text: "Take the system to production and keep it reliable as the business grows.",
  },
];

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div className="process-heading">
          <div className="section-eyebrow">
            HOW WE WORK
          </div>

          <h2>
            You bring the problem.
            <br />
            <span>We build the solution.</span>
          </h2>
        </div>

        <div className="process-list">
          {steps.map((step, index) => (
            <motion.div
              className="process-item"
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="process-number">
                {step.number}
              </div>

              <div className="process-line" />

              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;