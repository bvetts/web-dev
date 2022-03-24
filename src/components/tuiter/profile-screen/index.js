import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import ProfileComponent from "./profile-component.js";


import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";



//dynamic screen that changes from profile to edit profile???
const ProfileScreen = () => {

    return(

           <ProfileComponent active="profile"/>

    );
};
export default ProfileScreen;