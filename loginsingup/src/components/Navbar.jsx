// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          src="/android-chrome-512x512.png"
          alt="STUVO"
          className="logo-icon"
        />
        <span className="logo-text">STUVO5</span>
      </div>

      <a href="/temp.html" className="login-btn">
        Login
      </a>
    </nav>
  );
}

export default Navbar;
