import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="estate">
      <div className="footer">
        <div className="left-side">
          <img src={assets.logo} alt="" />
          <br /> <br />
          <h3>Estate.com</h3>
          <br />
          <h6>Estate@homes.Au</h6>
        </div>
        <div className="mid-sec">
          we believe everyone deserves a place to call home. Whether you're
          buying, selling, or exploring.
        </div>
        <div className="right-sec">
          <ul>
            <a href="https://mail.google.com/mail/u/0/" target="_blank">
              Contact us
            </a>{" "}
            <br />
            <br />
            <a href="https://mail.google.com/mail/u/0/" target="_blank">
              Feed back
            </a>
            <br />
            <br />
            <a href="https://mail.google.com/mail/u/0/" target="_blank">
              Suggest
            </a>
          </ul>
        </div>
      </div>
      <div className="off">
        <p>&copy;2024,Created by Kelvin,All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
