import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img alt="nav-logo" src={logo} className="logo"></img>
      <ul>
        <li>
          <button className="btn">Home</button>
        </li>
        <li>
          <button className="btn">Program</button>
        </li>
        <li>
          <button className="btn">About Us</button>
        </li>
        <li>
          <button className="btn">Campus</button>
        </li>
        <li>
          <button className="btn">Testimonial</button>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
