import "../css/subscriber.css";
import React, { useContext } from "react";
import ColorHeader from "./colorheader";
import { BlogContext } from "../App";

const NewsLetter = () => {
const blogContext = useContext(BlogContext)
  return (
    <div className="news-letter">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
            <div className="col-sm-12 col-md-4">
              {blogContext.blogState.screen > 768
              ?
              <div>
               <button className="btn btn-sm">Subscribe</button>
               </div>
              :
               <div className='sub'>
               <button className="btn btn-sm">Subscribe</button>
               </div>
              }
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
