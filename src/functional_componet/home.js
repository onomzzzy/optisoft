import React, { useContext } from "react";
import "../css/home.css";
import HomeCarousel from "./homestaticcarousel";
import HomeContent from "./homecontent";
import Footer from "./footer";
import Store from "../functional_componet/store";
import About from "../functional_componet/about";
import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";


const Home = () => {
  let { path} = useRouteMatch();
  return (
    <div>
      <div className="home">
       
      <Switch>
      <Route exact path={`${path}`}>
                <Store/>
              </Route>
              <Route path={`${path}/store`}>
                <Store/>
              </Route>
              <Route path={`${path}/about`}>
                <About/>
              </Route>
            </Switch>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
