import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./utility_components/error";
import Home from "./functional_componet/home";
export const BlogContext = React.createContext();

function App() {
  //initial State
  const initialState = {
    focus: 0,
    search: false,
    searchWord: "Search Blog ...",
    screen: window.innerWidth
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_BLOGPOSTs":
        state = {
          ...state,
          blogPost: action.posts,
        };
        return state;
        case "SET_SCREEN":
        state = {
          ...state,
          screen: action.width,
        };
        return state;
      case "CHANGE_FOCUS":
        state = {
          ...state,
          focus: action.focus,
        };
        return state;

      case "CANCEL_SEARCH":
        state = {
          ...state,
          focus: 0,
          search: false,
          searchWord: "Search Blog ...",
        };
        return state;

      case "SET_SEARCH":
        state = {
          ...state,
          focus: 1,
          search: true,
          searchWord: action.searchword,
        };
        return state;
      default:
        return initialState;
    }
  };


  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);

  useEffect(() => {
   const handleResize =()=>dispatch({type:"SET_SCREEN",width:window.innerWidth})
   window.addEventListener('resize',handleResize)
   return()=>{
    window.removeEventListener('resize',handleResize)
   }
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div>
        <BlogContext.Provider
          value={{ blogState: state, blogDispatch: dispatch }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="**" component={ErrorPage} />
          </Switch>
        </BlogContext.Provider>
      </div>

      <div className="footer">
        <div className="footer_margin">
          <div className="row">
            <div className="col">
              <hr></hr>
            </div>
            <div className="col-auto">
              <p>Copyright © 2020 flawlessheart.com. All rights reserved</p>
            </div>
            <div className="col">
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
