import React from "react";
import "../css/kit.css";
import facebook from "../icons/icon-facebook.png";
import twitter from "../icons/icon-twitter.png";
import youtube from "../icons/icon-youtube.png";
import instagram from "../icons/icon-instagram.png";
import gmail from "../icons/logotype.png";
import ColorHeader from "../functional_componet/colorheader";

const Kit = () => {
  return (
    <div className="kit">
      <ColorHeader title="KEEP IN TOUCH" />
      <div className="icon">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="img-controller">
              <img src={facebook} />
              </div>
              
            </div>
            <div className="col">
            <div className="img-controller">
              <img src={twitter} />
              </div>
            </div>
            <div className="col">
            <div className="img-controller">
              <img src={instagram} />
            </div>
            </div>
            <div className="col">
            <div className="img-controller">
              <img src={youtube} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KitQ = () => {
  return (
    <div className="kitq">
      <div className="icon">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={facebook} />
            </div>
            <div className="col">
              <img src={youtube} />
            </div>
            <div className="col">
              <img src={twitter} />
            </div>
            <div className="col">
              <img src={instagram} />
            </div>
            <div className="col">
              <img src={youtube} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kit;
