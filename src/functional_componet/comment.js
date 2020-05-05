import React from "react";
import "../css/comment.css";
import { JustDate } from "./author";
import mic from "../icons/mic1.jpg";
import sam from "../icons/sam.jpg";
import { InputTextarea } from "primereact/inputtextarea";

const BlogComment = () => {
  return (
    <div className="comment">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={sam} />
          </div>
          <div className="col-10">
            <div>
              <h4>Samuel</h4>
            </div>
            <div>
              <JustDate month="July 8" year="2018" />
            </div>
            <div>
              <h6>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere.
              </h6>
            </div>
          </div>

          <div className="col-12">
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogReply = () => {
  return (
    <div className="reply">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={mic} />
          </div>
          <div className="col-10">
            <div>
              <h5>Micheal</h5>
            </div>
            <div>
              <JustDate month="July 10" year="2018" />
            </div>
            <div>
              <h6>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque.
              </h6>
            </div>
          </div>

          <div className="col-12">
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CommentBox = () => {
  return (
    <div className="commentbox">
      <div className="container">
        <div className="row">
          <div className="col">
            <hr></hr>
          </div>
          <div className="col-auto">
            <h3>Leave Comment</h3>
          </div>
          <div className="col">
            <hr></hr>
          </div>

          <div className="col-12">
            <InputTextarea
              rows={7}
              placeholder={`Add a comment`}
              autoResize={true}
              cols={30}
            />
          </div>

          <div className="col-6">
            <input placeholder="Name" />
          </div>

          <div className="col-6">
            <input placeholder="Email" />
          </div>

          <div className="col-12">
            <button className="btn">Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
