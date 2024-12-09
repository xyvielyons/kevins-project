import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../assets/assets";
function Testimonials() {
  return (
    <>
      <h1 className="h1">Our testimonials</h1>
      <div>
        <div>
          <div className="testimonials" id="testimonials">
            {testimonialsData.map((item, index) => {
              return (
                <div className="information" key={index}>
                  <div className="cont">
                    <img src={item.image} alt="" />
                    <h2>{item.name}</h2>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
