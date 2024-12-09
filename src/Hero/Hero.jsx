import React, { useState } from "react";
import "./Hero.css";
import { assets } from "../assets/assets";
function Hero() {
  const [selected, setSelected] = useState("All");
  return (
    <>
      <div className="header" id="header">
        <div className="left">
          <img src={assets.logo} alt="" />
        </div>
        <div className="mid-section">
          <ul className="mid">
            <a
              href="#header"
              onClick={() => setSelected("home")}
              className={selected === "home" ? "All" : ""}
            >
              Home
            </a>
            <a
              href="#explore"
              onClick={() => setSelected("about")}
              className={selected === "about" ? "All" : ""}
            >
              Explore
            </a>
            <a
              href="#gallery"
              onClick={() => setSelected("projects")}
              className={selected === "projects" ? "All" : ""}
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              onClick={() => setSelected("testimonials")}
              className={selected === "testimonials" ? "All" : ""}
            >
              Testimonials
            </a>
          </ul>
        </div>
        <div className="right">
          <div className="button-container">
            <button>Sign up</button>
          </div>
        </div>
      </div>
      {/* <img className="hero-img" src={assets.header_img} alt="" /> */}
    </>
  );
}

export default Hero;
