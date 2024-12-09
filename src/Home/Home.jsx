import React from "react";
import { assets } from "../assets/assets";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="img-cont" id="home">
        <img className="hero-img" src={assets.header_img} alt="" />
        <div className="text-overlay">
          <h1>Find your dream home</h1>
          <br />
          <h3>
            {" "}
            with us—where comfort, quality and trust <br /> come together
            effortlessly. <br />
            <br />
            Explore our collections and find your taste🤭
          </h3>
          <div className="buttons">
            <button className="btn-1">Contact us</button>
            <button className="btn-2">Explore menu</button>
          </div>
        </div>
        <div className="overlay-min">
          <h2>
            Find your dream home <br /> Explore our collection <br /> find your
            taste
          </h2>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
