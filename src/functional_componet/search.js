import React, { useState, useContext, useEffect } from "react";
import "../css/search.css";
import { BlogContext } from "../App";
import Articles from "./articles";

const Search = () => {
  const blogContext = useContext(BlogContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    //Change show
    filter();
    setShow(blogContext.blogState.search);
  }, [blogContext.blogState.search]);

  function filter() {
    console.log(`articles ${blogContext.blogState.blogPost}`);
  }

  console.log(
    `serch state ${show} search word ${blogContext.blogState.searchWord}`
  );
  return (
    <div className="search">
      <div className="animate_component">
        {show ? (
          <div>
            <i
              onClick={(e) =>
                blogContext.blogDispatch({ type: "CANCEL_SEARCH" })
              }
              className="pi pi-times"
            ></i>{" "}
            <div>
              <div class="jumbotron">
                <h3 className="display-5">
                  {blogContext.blogState.searchWord}
                </h3>
                <p className="lead">
                  102 result found for {blogContext.blogState.searchWord}{" "}
                </p>
                <hr className="my-4" />
                <p>To get more search result try fewerer words </p>
              </div>

              <div className="jumbotron">
                <h3 className="display-5">No Result Found!</h3>
                <p className="lead">
                  No record found for {blogContext.blogState.searchWord}, may be
                  your search was to direct or such article has not been
                  uploaded yet.
                </p>
                <hr className="my-4" />
                <p>You can try search with fewer words or letters.</p>
              </div>

              <Articles />
            </div>{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Search;
