import React, {useContext } from "react";
import "../css/categories.css";
import health from "../icons/healthy.png";
import sport from "../icons/health.png";
import medication from "../icons/nature.png";
import love from "../icons/engagement.png";
import cultures from "../icons/cultures.png";
import karma from "../icons/oriental.png";
import quote from "../icons/sign.png";
import ColorHeader from "../functional_componet/colorheader";
import { BlogContext } from "../App";

const Categories = () => {
const contextBlog = useContext(BlogContext);
  return (
    <div className="categories">
    {contextBlog.blogState.screen > 640
    ?
       <div>
      <ColorHeader title="CATEGORIES" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={health} /> Health <span>(7)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={sport} /> Self Improvement <span>(2)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={medication} /> Love & Relationship <span>(3)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={love} /> Marriage <span>(12)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={cultures} /> Religion <span>(23)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={karma} /> Karma <span>(1)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={quote} /> Quote <span>(11)</span>
              </span>
            </div>
            <hr></hr>
          </div>
          <div className="col-12">
            <div className="cat-menu">
              <span>
                <img src={quote} /> Music <span>(14)</span>
              </span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      </div>
:
<div></div>
  }


    </div>
  );
};

export default Categories;
