import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./explore-component.js";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-md-auto  d-lg-block wd-center"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="col d-xs-none d-sm-none d-md-none d-lg-inline-block  wd-rightSidebar">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;

