import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Custom Software",
    text: "Business applications designed around your workflows, users and operational requirements.",
  },
  {
    number: "02",
    title: "Web Applications",
    text: "Modern, scalable web applications built for customers, employees and internal teams.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    text: "Mobile experiences connected to the systems behind your business.",
  },
  {
    number: "04",
    title: "Business Systems",
    text: "ERP, CRM, service management, inventory and internal platforms that bring operations together.",
  },
  {
    number: "05",
    title: "AI & Automation",
    text: "Intelligent workflows that reduce repetitive work and connect the tools your team already uses.",
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    text: "Deployment, infrastructure, CI/CD, monitoring and technical operations.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            WHAT WE DO
          </div>

          <h2>
            From business problem
            <br />
            <span>to production software.</span>
          </h2>

          <p>
            We handle the engineering behind the idea — from architecture
            and product development to deployment and ongoing operations.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div className="service-arrow">↗</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;