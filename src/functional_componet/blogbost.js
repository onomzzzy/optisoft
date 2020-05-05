import React, { useState } from "react";
import "../css/blogpost.css";
import Author from "./author";
import lar from "../icons/lar2.jpg";
import sam from "../icons/sam.jpg";
import { KitQ } from "../functional_componet/kit";
import BlogComment, { BlogReply, CommentBox } from "./comment";

const BlogPost = () => {
  const [post, setPost] = useState("");
  return (
    <div className="blogPost">
      <div className="header">
        <div className="title">
          <h3>Memories from Last Summer</h3>
        </div>
        <div className="author">
          <Author name="Rose Mary" date="June 20, 2018" />
        </div>
      </div>

      <div className="display">
        <img src={lar} />
      </div>

      <div className="content"></div>

      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr></hr>
            </div>
            <div className="col-2">
              <img src={sam} />
            </div>
            <div className="col-10">
              <div>
                <h4>Samuel</h4>
              </div>
              <div>
                <h6>
                  Hi there, My name is Samuel. I'm living in Vancouver, Canada
                  which is a beautiful city. I love to create things by myself
                  and share with other people too.
                </h6>
              </div>
              <div>
                <KitQ />
              </div>
            </div>

            <div className="col-12">
              <hr></hr>
            </div>
          </div>
        </div>
      </div>

      <div className="commentandreply">
        <ul>
          <BlogComment />
          <li>
            <BlogReply />
          </li>
        </ul>
      </div>

      <div className="addcomment">
        <CommentBox />
      </div>
    </div>
  );
};

export default BlogPost;
