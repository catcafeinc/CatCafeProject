import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><i class="fa-regular fa-mug-hot"></i> Capurrccinno</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Cat of the Week</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Book a Table</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;