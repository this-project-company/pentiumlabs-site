import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <img src="/images/logo.webp" alt="Pentium Labs" />
        <span>Pentium Labs</span>
      </a>

      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="mailto:pentiumlabs@gmail.com?subject=Project%20Enquiry"
        className="navbar-contact"
      >
        Start a Project
        <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;