import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "features", "scenarios", "team", "research", "contact"];
      const scrollY = window.pageYOffset;
  
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const top = element.offsetTop;
        const height = element.clientHeight;
        return scrollY >= top && scrollY < top + height;
      });
  
      setActiveSection(currentSection || "");
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {[
          "home",
          "about",
          "features",
          "scenarios",
          "team",
          // "research",
          "contact",
        ].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollTo(section)}
           className={activeSection === section ? "active" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
