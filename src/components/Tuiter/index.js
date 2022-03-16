import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import './index.css';
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./post-summary-list/post-summary-item";

//import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import {BrowserRouter, Route , Routes } from "react-router-dom";

const Tuiter = () => {
    return(
        <>
        <HomeScreen/>


       </>

    )
};

export default Tuiter;

