import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>AGUS PRANYOTO</h2>
          <h1>Frontend Developer and UI Designer</h1>
          <div className="buttons">
            <button>See The Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
        <div className="imageContainer">
          <img src="/agus-kotak.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
