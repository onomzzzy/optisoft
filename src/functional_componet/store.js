import React, {useContext} from "react"
import "../css/store.css";
import { WebAppContext } from "../App";
import HomeCarousel from "../functional_componet/homestaticcarousel"
const Store = () => {
    const webAppContext = useContext(WebAppContext);
    return ( 
        <div className="store">
            {webAppContext.webAppState.screenWidth > 640
            ?
            <div>
                <HomeCarousel/>
                <h1>
               Welcome to Store from Desktop
            </h1>
            </div>
           
            :
            <div>
                <HomeCarousel/>
                <h1>
               From Mobile View Welcome to store
            </h1>
            </div>
            }
        </div>
     );
}
 
export default Store;