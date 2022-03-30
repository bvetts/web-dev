//need to hevaliy modify what is shown in this section
import React, {useEffect,useState} from "react";
import {createTuit} from "../actions/tuits-actions";

import {useDispatch, useSelector} from "react-redux";


const WhatsHappening = () => {
  const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

  const dispatch = useDispatch();

  return (

<div className="wd-newTuit">
    <div className = "wd-avatarElement2 ">
        <img src="/images/user.jpg" className="wd-avatar2 mx-auto d-inline" />


        <textarea className="wd-tuitBox d-inline" placeholder="what's happening?" value={newTuit.tuit}
                   onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}>
        </textarea>
    </div>
    <div className="pt-2"></div>
    <div className = "wd-iconsAndButtonsBox ">
    <div className="mx-auto">
        <a href="/"> <i className=" pt-2 fa fa-folder"> </i> <i className=" pt-2 fa fa-line-chart"> </i> <i className=" pt-2 fa fa-smile"> </i> <i className="far fa-calendar"></i></a>
    </div>
        <button className="btn pt-2  btn-primary wd-tuitButton float-right rounded-pill   " onClick={() => createTuit(dispatch, newTuit)} >Tuit</button>
    </div>






<div className="pt-2"></div>
</div>

  );
}
export default WhatsHappening;



/*   <div className="wd-iconsAndButtonsBox ">

                            <div clssName="wd-tuitIcons position-relative">
                                <i className="fa fa-list"></i> <i className="fa fa-list"></i>
                            </div>

                            <div clssName=" position-relative">
                                <button className="btn btn-primary wd-tuitButton  rounded-pill  float-right " onClick={tuitClickHandler} >Tuit</button>
                            </div>

                    </div> */