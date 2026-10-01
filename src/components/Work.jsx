import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Work.css";

const projects = [
  {
    number: "CASE STUDY / 001",
    title: "Namaste Service",
    type: "Service Management Platform",
    description:
      "A complete service-management system connecting customers, service centres and field technicians through one operational platform.",
    tags: ["ERP", "Web Application", "Mobile", "Workflow", "Operations"],
    image: "/images/frontdash.webp",
    imageAlt: "Namaste Service ERP dashboard",
    link: "https://namasteservice.in",
    linkText: "Explore Namaste Service",
  },
  {
    number: "CASE STUDY / 002",
    title: "ServiceBill",
    type: "Billing & Sales Intelligence Platform",
    description:
      "A mobile-first billing platform built for businesses to manage billing, customers and sales, with a web application and AI-powered sales analytics.",
    tags: ["Billing", "Mobile", "Web", "AI", "Sales Analytics"],
    image: "/images/servicebill.webp",
    imageAlt: "ServiceBill mobile application",
    link: "#contact",
    linkText: "Discuss a Similar Project",
  },
];

function Work() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const project = projects[current];

  return (
    <section id="work" className="work-section">
      <div className="work-container">

        {/* Heading */}

        <motion.div
          className="work-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">SELECTED WORK</div>

          <h2>
            Software we've
            <br />
            <span>built in the real world.</span>
          </h2>

        </motion.div>

        {/* Slider */}

        <div className="work-slider">

          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              className="case-study"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(event, info) => {
                if (info.offset.x < -80) {
                  nextProject();
                }

                if (info.offset.x > 80) {
                  previousProject();
                }
              }}
            >

              {/* Content */}

              <div className="case-study-copy">

                <div className="case-study-number">
                  {project.number}
                </div>

                <h3>{project.title}</h3>

                <div className="case-study-type">
                  {project.type}
                </div>

                <p>
                  {project.description}
                </p>

                <div className="case-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target={
                    project.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.link.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="case-link"
                >
                  {project.linkText}
                  <span>↗</span>
                </a>

              </div>

              {/* Image */}

              <div className="case-study-image">
                <div
                  className={`case-window ${
                    project.title === "ServiceBill"
                      ? "servicebill-window"
                      : ""
                  }`}
                >

                  <div className="case-window-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <img
                    src={project.image}
                    alt={project.imageAlt}
                  />

                </div>
              </div>

            </motion.article>
          </AnimatePresence>

        </div>

        {/* Slider controls */}

        <div className="work-controls">

          <div className="work-counter">
            <span>
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className="work-counter-line" />

            <span>
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="work-arrows">

            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Work;