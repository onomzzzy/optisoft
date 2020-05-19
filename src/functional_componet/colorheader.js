import "../css/colorheader.css";
import React, { useContext } from "react";
import { BlogContext } from "../App";

const ColorHeader = (props) => {
const blogContext = useContext(BlogContext)
  return (
    <div className="color-header">
      <div className="card">
       {blogContext.blogState.screen >767
?
        <div>
        <h5>{props.title}</h5>
        </div>
        :
        <div>
        <h6>{props.title}</h6>
        </div>
        
         }
      </div>
    </div>
  );
};

export default ColorHeader;
