import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";
function Projects() {
  return (
    <div className="projects" id="explore">
      <div className="left">
        <div className="pro">
          <h1>
            <img src={assets.menu_icon} alt="" /> Explore menu
          </h1>
          <div className="projects-container">
            <img src={assets.brand_img} alt="" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <h1>Explore widely</h1>
        <p>
          <a
            target="_blank"
            href="https://www.google.com/search?q=house+sales+in+london&sca_esv=d0f09d0ddcc37b6e&sxsrf=ADLYWII_R4Dv7TrJuUDZBhfppizk4DIvPg%3A1733571894506&ei=NjVUZ_XIHvyrkdUP7_e98Q8&ved=0ahUKEwj1u9vHypWKAxX8VaQEHe97L_4Q4dUDCA8&uact=5&oq=house+sales+in+london&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWhvdXNlIHNhbGVzIGluIGxvbmRvbjIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5Ivx1QYljIGnABeAGQAQCYAYcCoAHUHKoBBDItMTa4AQPIAQD4AQGYAgygAp4UwgIKEAAYsAMY1gQYR8ICExAuGIAEGLADGNEDGEMYxwEYigXCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICBBAjGCfCAgsQABiABBiRAhiKBcICBxAAGIAEGAqYAwCIBgGQBgqSBwYxLjAuMTGgB8ly&sclient=gws-wiz-serp"
          >
            click here
          </a>{" "}
          to explore widely
        </p>
        <br /> <br />
        <h3>
          Explore a curated menu of dream homes tailored to your lifestyle,
          budget, and needs. Discover endless possibilities and find the perfect
          place to call your own—because every journey starts with the right
          choice.
        </h3>
        <hr />
        <h3>
          "Step into a world of possibilities with our carefully curated menu of
          residences. Whether you’re seeking luxury, comfort, or a cozy retreat,
          we have the perfect match for your lifestyle. Explore, compare, and
          discover homes that align with your dreams—making every choice as easy
          as it is inspiring."
        </h3>
        <br />
        <h2>
          For quick bookings,click this button <br />{" "}
          <button className="bookings">Book now</button>
        </h2>
      </div>
    </div>
  );
}

export default Projects;
