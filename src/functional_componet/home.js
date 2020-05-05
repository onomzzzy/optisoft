import React, { useRef, useContext, useEffect } from "react";
import "../css/home.css";
import Header from "../functional_componet/header";
import Carosel from "../functional_componet/carousel";
import Categories from "../functional_componet/categories";
import NewsLetter, { NewsLetterM } from "../functional_componet/subscribers";
import AboutMe from "../functional_componet/aboutme";
import Kit from "../functional_componet/kit";
import PopularPost from "./ppost";
import RecentPost from "./rpost";
import Feeds from "./feeds";
import BlogPost from "./blogbost";
import Search from "./search";
import { BlogContext } from "../App";

const Home = () => {
  const topRef = useRef(null);
  const mainRef = useRef(null);
  const searchRef = useRef(null);
  const feedRef = useRef(null);
  const postRef = useRef(null);

  const blogContext = useContext(BlogContext);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  useEffect(() => {
    //Change Focus
    changeFocus(blogContext.blogState.focus);
  }, [blogContext.blogState.focus]);

  function changeFocus(focus) {
    switch (focus) {
      case 0:
        {
          topRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case 1:
        {
          mainRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case 2:
        {
          searchRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case 3:
        {
          feedRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case 4:
        {
          postRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      default: {
        topRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <div className="home">
      {/* Header */}
      <div>
        <div ref={topRef} className="home_top" tabIndex="0">
          <Header />
        </div>
      </div>
      {/** Top bottom */}
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12">
                <div ref={mainRef} className="home_main" tabIndex="1">
                  <Carosel />
                  <NewsLetter />
                </div>
              </div>

              <div className="col-12">
                <div ref={searchRef} className="home_search" tabIndex="2">
                  <Search />
                </div>
              </div>
              <div className="col-12">
                <div ref={feedRef} className="home_feed" tabIndex="3">
                  <Feeds />
                </div>
              </div>

              <div className="col-12">
                <div ref={postRef} className="home_post" tabIndex="4">
                  <BlogPost />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <Categories />
            <AboutMe />
            <Kit />
            <PopularPost />
            <NewsLetterM />
            <RecentPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
