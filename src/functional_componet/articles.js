import React, { useState, useContext, useEffect } from "react";
import "../css/articles.css";
import religion from "../icons/religion2.jpg";
import pray from "../icons/lar.jpg";
import Author from "./author";

const Articles = (props) => {
  return (
    <div className="articles">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="display feed-space">
              <img src={religion} />
            </div>
            <div className="title feed-space">
              <h5>Single and Marriage Modern Day</h5>
            </div>
            <div className="authorDate feed-space">
              <Author name="Jummy" date="27 July, 2019" />
            </div>
            <div className="breifDes feed-space">
              <h6>
                Lommodo ligula eget dolor. Aenean massa. Cum sociis que
                penatibus et magnis dis parturient montes lorem, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla…
              </h6>
            </div>
            <div className="readmore feed-space">
              <span>
                Read More <i className="pi pi-angle-double-right"></i>
              </span>
            </div>
          </div>

          <div className="col-6">
            <div className="display feed-space">
              <img src={pray} />
            </div>
            <div className="title feed-space">
              <h5>Pray for Nigeria in Distress</h5>
            </div>
            <div className="authorDate feed-space">
              <Author name="Nzebuna" date="27 December, 2018" />
            </div>
            <div className="breifDes feed-space">
              <h6>
                Lommodo ligula eget dolor. Aenean massa. Cum sociis que
                penatibus et magnis dis parturient montes lorem, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla…
              </h6>
            </div>
            <div className="readmore feed-space">
              <span>
                Read More <i className="pi pi-angle-double-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
