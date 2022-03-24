import React from "react";
import NavigationSidebar from "../navigation-sidebar";

import EditComponent from "./edit-component.js";
import {useDispatch} from "react-redux";
//dynamic screen that changes from profile to edit profile???
const EditScreen = () => {

    return(



           <EditComponent active="profile"/>



    );
};
export default EditScreen;