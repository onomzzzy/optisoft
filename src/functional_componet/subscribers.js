import "../css/subscriber.css";
import React from "react";
import ColorHeader from "./colorheader";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Subscribe to News letter</h6>
            </div>
            <div className="col">
              <div>
                <input placeholder="Name ..." />
              </div>
            </div>

            <div className="col">
              <input placeholder="Email ..." />
            </div>
            <div className="col-2">
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsLetterM = () => {
  return (
    <div className="newsletterM">
      <ColorHeader title="NEWS LETTER" />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>
              Subscribe my Newsletter for new blog posts, tips & new photos.
              Let's stay updated!
            </h6>
          </div>

          <div className="col-12">
            <input placeholder="Name ..." />
          </div>

          <div className="col-12">
            <input placeholder="Email ..." />
          </div>

          <div className="col-12">
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
