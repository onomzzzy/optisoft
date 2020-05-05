import React, { useState, useReducer, useRef } from "react";
import "../css/carousel.css";
import { Carousel } from "react-bootstrap";

const Carosel = () => {
  const [index, setIndex] = useState(0);
  const [control, setControl] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carosel-push">
      <Carousel
        onMouseEnter={(e) => {
          setControl(true);
        }}
        onMouseLeave={(e) => {
          setControl(false);
        }}
        activeIndex={index}
        controls={control}
        indicators={indicator}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.w3schools.com/bootstrap/img_chania.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>My Indie Music Playlist</h4>
            <h6>Maria | July 26, 2020.</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.w3schools.com/bootstrap/img_chania2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>Freedom Under the Sun</h4>
            <h6>Nzegbuna | December 25, 2018.</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.w3schools.com/bootstrap/img_flower.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>Life in Black and White</h4>
            <h6>Michael | June 15, 2019.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosel;
