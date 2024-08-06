import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

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
