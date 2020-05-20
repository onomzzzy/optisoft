import React, {useContext} from "react"
import { WebAppContext } from "../App";
import "../css/about.css";

const About = () => {
    const webAppContext = useContext(WebAppContext);
    return ( 
        <div className="about">
            {webAppContext.webAppState.screenWidth > 640
            ?
            <h1>
                About Me from Desktop
            </h1>
            :
            <h1>
                 Mobile View About Me
            </h1>
            }
        </div>
     );
}
 
export default About;