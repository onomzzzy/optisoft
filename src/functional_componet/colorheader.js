import "../css/colorheader.css";
import React from "react";

const ColorHeader = (props) => {
  return (
    <div className="color-header">
      <div className="card">
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default ColorHeader;
