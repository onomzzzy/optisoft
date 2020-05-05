import React from "react";
import "../css/ppost.css";
import ColorHeader from "./colorheader";
import ImageWithIcon from "./iwi";
import pix from "../icons/quote.jpg";
import karma from "../icons/karma.jpg";
import marriage from "../icons/marriage.jpg";
import health from "../icons/health1.jpg";
import self from "../icons/self1.jpg";

const PopularPost = () => {
  return (
    <div className="ppost">
      <ColorHeader title="POPULAR POST" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ImageWithIcon picture={pix} text="1" />
            <div className="title">
              <h6>10 Steps Natural Soap Tutorials</h6>
            </div>
          </div>
          <div className="col-6">
            <ImageWithIcon picture={karma} text="2" />
            <div className="title">
              <h6>Room Decoration DIY</h6>
            </div>
          </div>

          <div className="col-6">
            <ImageWithIcon picture={self} text="3" />
            <div className="title">
              <h6>Paper Flour Hack</h6>
            </div>
          </div>
          <div className="col-6">
            <ImageWithIcon picture={marriage} text="4" />
            <div className="title">
              <h6>Beatiful Rose Cake DIY Tutorials</h6>
            </div>
          </div>
          <div className="col-6">
            <ImageWithIcon picture={health} text="5" />
            <div className="title">
              <h6>Making your own Christmas Decor</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
