import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <img src="/images/logo.png" alt="Pentium Labs" />
        <span>Pentium Labs</span>
      </a>

      <div className="navbar-links">
        <a href="#product">Product</a>
        <a href="#mobile-app">Technician App</a>
        <a href="#pricing">Pricing</a>
      </div>

      <a
        href="mailto:pentiumlabs@gmail.com"
        className="navbar-contact"
        >
    Contact Us
    <span>↗</span>
</a>
    </nav>
  );
}

export default Navbar;