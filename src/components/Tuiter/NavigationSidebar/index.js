import React from "react";
import {Link} from "react-router-dom";


//could use dynamic instead, it uses an if statement right now
const NavigationSidebar = ({active = 'explore'}) => {

    return(
        <>
            <div className="list-group">
                 <Link to="/" className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i> </Link>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="../HomeScreen/home.html">
                        <i className="fa fa-home"> <span className="wd-navLabels" > Home</span> </i> </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="../ExploreScreen/explore.html">
                        <i className="fa fa-hashtag"> <span className="wd-navLabels" > Explore</span> </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-bell"> <span className="wd-navLabels" > Notifications</span> </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-envelope"> <span className="wd-navLabels" > Messages</span> </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-bookmark"> <span className="wd-navLabels" > Bookmarks</span> </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-list"> <span className="wd-navLabels" > Lists</span> </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-user"><span className="wd-navLabels" > Profile</span>  </i> </Link>
                <Link to="/"  className="list-group-item" href="/">
                        <i className="fa fa-circle"> <span className="wd-navLabels" > More</span> </i> </Link>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );



}
export default NavigationSidebar;
