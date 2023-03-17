import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from './ramiflix.png';


// This component defines navigation bar for this website
const Navbar = () => {
  // The nav bar state value is default it will false
  const [show, handleShow] = useState(false);

  // side effect for event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // when user scroll down more than 100px
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      //component in unmounted - performance issue help performance and memory management.
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav-black" : ""}`}>
      <img
        className="nav-logo"
        src={logo}
        alt="RamiFlix Logo"
      />
      <img
        className="nav-avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};

export default Navbar;
