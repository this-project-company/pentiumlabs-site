import { motion } from "framer-motion";
import "./Product.css";

function Product() {
  return (
    <section id="product" className="product-section">

      <div className="product-container">

        <motion.div
          className="product-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            THE PLATFORM
          </div>

          <h2>
            Everything your
            <br />
            service operation needs.
          </h2>
        </motion.div>

        <div className="workflow">

          <WorkflowItem
            number="01"
            title="Request"
            text="Customers and digital stores can raise service, installation or demo requests."
          />

          <div className="workflow-line" />

          <WorkflowItem
            number="02"
            title="Service Center"
            text="The request reaches the authorised service center responsible for that region."
          />

          <div className="workflow-line" />

          <WorkflowItem
            number="03"
            title="Assignment"
            text="Service center managers assign the job to the appropriate technician."
          />

          <div className="workflow-line" />

          <WorkflowItem
            number="04"
            title="Resolution"
            text="Technicians handle the job through the mobile app and keep the ERP updated."
          />

        </div>

        <div className="feature-grid">

          <Feature
            title="Job & Ticket Management"
            text="Create, assign, schedule and track service requests from one central system."
          />

          <Feature
            title="Employee Management"
            text="Manage technicians, employees and operational workforce information."
          />

          <Feature
            title="Inventory"
            text="Keep track of stock, warehouse operations and service-related inventory."
          />

          <Feature
            title="Travel & Workload"
            text="Organise technician travel and monitor operational workload."
          />

          <Feature
            title="Accounts & Operations"
            text="Bring operational and financial processes into the same ecosystem."
          />

          <Feature
            title="Role-Based Access"
            text="Give every user exactly the access they need with configurable roles."
          />

        </div>

      </div>

    </section>
  );
}

function WorkflowItem({ number, title, text }) {
  return (
    <div className="workflow-item">
      <div className="workflow-number">
        {number}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="feature">
      <div className="feature-icon">
        +
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Product;