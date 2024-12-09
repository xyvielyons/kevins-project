import React from "react";
import "./Ongoings.css";
import { assets, projectsData } from "../assets/assets";
function Ongoings() {
  return (
    <div className="pack" id="gallery">
      <h1> Our Gallery</h1>
      <div className="scroll">
        {" "}
        <h3>
          Scroll <img src={assets.right_arrow} alt="" />
        </h3>
      </div>
      <br />
      <div className="ongoings">
        {projectsData.map((item, id) => {
          return (
            <div key={id} className="container">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <div className="item-info">
                <h4>{item.location}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Ongoings;
