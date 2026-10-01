import { motion } from "framer-motion";
import "./MobileApp.css";

function MobileApp() {
  return (
    <section id="mobile-app" className="mobile-section">
      <div className="mobile-background" />

      <div className="mobile-container">

        <motion.div
          className="mobile-copy"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            TECHNICIAN MOBILE APP
          </div>

          <h2>
            Your ERP.
            <br />
            <span>In your technician's hands.</span>
          </h2>

          <p>
            Technicians don't need to sit in front of the ERP.
            The Pentium Labs mobile app gives them the tools they
            need to manage their assigned service work directly
            from the field.
          </p>

          <div className="mobile-points">
            <div className="mobile-point">
              <div className="point-number">01</div>
              <div>
                <h3>Receive assigned jobs</h3>
                <p>
                  Technicians can instantly see the jobs assigned
                  to them.
                </p>
              </div>
            </div>

            <div className="mobile-point">
              <div className="point-number">02</div>
              <div>
                <h3>Manage service visits</h3>
                <p>
                  Track scheduled and unscheduled service work
                  from the field.
                </p>
              </div>
            </div>

            <div className="mobile-point">
              <div className="point-number">03</div>
              <div>
                <h3>Keep the ERP updated</h3>
                <p>
                  Technician activity flows back into the central
                  ERP system.
                </p>
              </div>
            </div>

            <div className="mobile-point">
              <div className="point-number">04</div>
              <div>
                <h3>Service Billing</h3>
                <p>
                  Create payable bill with UPI support
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="phone-area"
          initial={{ opacity: 0, x: 50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="phone-glow" />

          <div className="phone">
            <div className="phone-frame">

              <div className="phone-speaker">
                <span />
              </div>

              <div className="phone-screen">
                <img
                  src="/images/mobiledash.png"
                  alt="Pentium Labs technician mobile application"
                />
              </div>

              <div className="phone-home">
                <span />
              </div>

            </div>
          </div>

          <div className="floating-status floating-status-one">
            <span className="status-dot" />
            Job Assigned
          </div>

          <div className="floating-status floating-status-two">
            Technician App
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default MobileApp;