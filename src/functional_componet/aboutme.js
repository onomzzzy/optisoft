import React, { useState, useReducer, useRef } from "react";
import ColorHeader from "../functional_componet/colorheader";
import "../css/aboutme.css";
import Michael from "../icons/mic1.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <ColorHeader title="ABOUT ME" />
      <div className="icon">
        <img src={Michael} />
      </div>
      <div>
        <h4>Welcome to my blog</h4>
        <hr></hr>
        <h6>
          Hi there, my name is Jane. I make lovely things in order to fill my
          little house in my spare time.
        </h6>
      </div>
    </div>
  );
};

export default AboutMe;
