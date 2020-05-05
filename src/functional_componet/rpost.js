import React from "react";
import "../css/rpost.css";
import love from "../icons/lar.jpg";
import religion from "../icons/religion2.jpg";
import ColorHeader from "./colorheader";
import { JustDate } from "./author";

const RecentPost = () => {
  return (
    <div className="rpost">
      <ColorHeader title="RECENT POST" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-7">
                <img src={love} />
              </div>
              <div className="col-5">
                <div className="title">
                  <h5>Ultimate Love</h5>
                </div>
                <div className="date">
                  <JustDate month="July 12" year="2018" />
                </div>
              </div>
              <div className="col-12">
                <hr></hr>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-7">
                <img src={religion} />
              </div>
              <div className="col-5">
                <div className="title">
                  <h5>Pray Corona Recovery</h5>
                </div>
                <div className="date">
                  <JustDate month="May 1" year="2020" />
                </div>
              </div>
              <div className="col-12">
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
