import React from "react";
import {NavLink} from "react-router-dom";


//could use dynamic instead, it uses an if statement right now
const NavigationSidebar = () => {
const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}


    return(
        <>
            <div className="list-group">
                <NavLink to="/" className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i> </NavLink>
                <NavLink  to="/tuiter/home" exact className="list-group-item" >
                        <i className="fa fa-home"> <span className="wd-navLabels" > Home</span> </i> </NavLink>
                <NavLink to="/tuiter/explore" className="list-group-item" >
                        <i className="fa fa-hashtag"> <span className="wd-navLabels" > Explore</span> </i> </NavLink>
                <NavLink to="/tuiter/profile"  className="list-group-item">
                         <i className="fa fa-user"><span className="wd-navLabels" > Profile</span>  </i> </NavLink>

                <NavLink to="/"  className="list-group-item" href="/">
                        <i className="fa fa-bell"> <span className="wd-navLabels" > Notifications</span> </i> </NavLink>
                <NavLink to="/"  className="list-group-item" href="/">
                        <i className="fa fa-envelope"> <span className="wd-navLabels" > Messages</span> </i> </NavLink>
                <NavLink to="/"  className="list-group-item" href="/">
                        <i className="fa fa-bookmark"> <span className="wd-navLabels" > Bookmarks</span> </i> </NavLink>
                <NavLink to="/"  className="list-group-item" href="/">
                        <i className="fa fa-list"> <span className="wd-navLabels" > Lists</span> </i> </NavLink>

                <NavLink to="/"  className="list-group-item" href="/">
                        <i className="fa fa-circle"> <span className="wd-navLabels" > More</span> </i> </NavLink>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    );



}
export default NavigationSidebar;
