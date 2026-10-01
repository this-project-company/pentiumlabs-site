import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-inner">

        <div className="footer-brand">
          <img
            src="/images/logo.png"
            alt="Pentium Labs"
          />

          <div>
            <h3>Pentium Labs</h3>
            <p>
              Building connected software for
              modern service operations.
            </p>
          </div>
        </div>

        <a
          href="mailto:pentiumlabs@gmail.com"
          className="footer-email"
        >
          pentiumlabs@gmail.com
          <span>↗</span>
        </a>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Pentium Labs
        </span>

        <span>
          Service Operations Platform
        </span>
      </div>

    </footer>
  );
}

export default Footer;