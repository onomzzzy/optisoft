import React, { useContext } from "react";
import "../css/sidenav.css";
import { Link } from "react-router-dom";
import MobileNav, { ColoredNav } from "./mobilenav";
import { NavContext } from "../App";

const SideNav = () => {
  const navContext = useContext(NavContext);

  return (
    <div>
      {navContext.navState.sideBar && navContext.navState.screenWidth <= 991 ? (
        <div className="sidenav">
          <div>
            <Link
              to="/home"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "home",
                });
              }}
            >
              <MobileNav view="HOME" active={navContext.navState.home} />
            </Link>
          </div>
          <div>
          <Link
              to="/home/store"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "store",
                });
              }}
            >
            <MobileNav view="STORE" active={navContext.navState.store} />
            </Link>
          </div>
          <div>
          <Link
              to="/home/about"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "about",
                });
              }}
            >
            <MobileNav
              view="ABOUT"
              active={navContext.navState.about}
            />
            </Link>
          </div>

          <div>
            <Link
              to="/login"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "login",
                });
              }}
            >
              <ColoredNav view="LOGIN" active={navContext.navState.login} />
            </Link>
          </div>
          <div>
            <button
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({ type: "TOGGLE_MODAL" });
              }}
              className="btn btn-sm"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideNav;
