import React, { useContext, useState } from "react";
import "../css/header.css";
import logo from "../icons/flawless.png";
import help from "../icons/communications.png";
import home from "../icons/home.png";
import { BlogContext } from "../App";

const Header = () => {
  const blogContext = useContext(BlogContext);
  const [sword, setSword] = useState("");

  return (
    <div className="header-blog">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="logo-blog">
                <img src={logo} />
              </div>
            </div>

            <div className="col-7">
              <div className="push-down">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      onClick={(e) =>
                        blogContext.blogDispatch({
                          type: "SET_SEARCH",
                          searchword: sword,
                        })
                      }
                      className="input-group-text"
                      id="basic-addon1"
                    >
                      <i className="pi pi-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value={sword}
                    onChange={(e) => setSword(e.target.value)}
                    placeholder={blogContext.blogState.searchWord}
                    aria-label="search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col">
                  <div className="header-icon push-down">
                    <span>
                      <img src={home} /> <span>Home</span>
                    </span>
                  </div>
                </div>

                <div className="col">
                  <div className="header-icon push-down">
                    <span>
                      <img src={help} /> <span>Help</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
