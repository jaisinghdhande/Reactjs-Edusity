import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    console.log("trigg");
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsDark(true) : setIsDark(false);
    });
  }, []);
  return (
    <nav className={`container ${isDark ? "dark-nav" : ""}`}>
      <img alt="nav-logo" src={logo} className="logo"></img>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={-190}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} duration={500} offset={-190}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-190}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="outer-box" smooth={true} duration={500} offset={-190}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} duration={500} offset={-190}>
            Testimonial
          </Link>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
