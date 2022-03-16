
import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
    <>

            <div className="wd-searchContainer pb-1 ">
                <div className=" mx-2 ">

                    <input type="text" className="wd-search d-inline-block" placeholder="Search Tuiter"></input>

                    <a href="explore-settings.html" className = "wd-gear d-inline-block pt-1"> <i className="fa fa-cog fa-2x"></i> </a>


                </div>

            </div>

            <nav className="navbar navbar-expand-lg navbar-dark  wd-navbar wd-navbarContainer pb-3">
                <ul className="nav nav-tabs wd-navColor wd-navLimit">
                    <li className="nav-item  wd-navbar-active mx-auto">
                        <a className="nav-link  " href="#"> For You </a>
                    </li>
                    <li className="nav-item mx-auto" >
                        <a className="nav-link " href="#">Trending</a>
                    </li>
                    <li className="nav-item mx-auto">
                        <a className="nav-link " href="#">News</a>
                    </li>
                    <li className="nav-item mx-auto">
                        <a className="nav-link " href="#">Sports</a>
                    </li>
                    <li className="nav-item wd-navlinks2 mx-auto">
                        <a className="nav-link " href="#">Entertainment</a>
                        </li>

                </ul>

             </nav>


            <div className="wd-bigImageContainer  position-relative">
                        <img src="starship.jpg" className="wd-bigImage " />
                        <div className="wd-bottomText position-absolute ">SpaceX's Starship</div>
            </div>


        <div className="pt-2">
           <PostSummaryList />
        </div>
</>
    );
}

export default ExploreComponent;