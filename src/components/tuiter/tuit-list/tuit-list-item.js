//this page needs a ton of work
import Verified from "./verified-tuit.js";
import React, {useEffect} from "react";
import {updateTuit,} from "../actions/tuits-actions";
import {useDispatch, useSelector} from "react-redux";


const TuitListItem = ({
                                     tuit = {
                                         key: '2578785',
                                         avatar: "./nodejs.jpg"

                                     }}
) => {
    const dispatch = useDispatch();
    return(
    <>

        <div className = "wd-largeContainer">
            <div className = "wd-avatarElement">
                <img src={tuit.avatar} className="wd-avatar" />
            </div>
            <div className = "wd-contentBlock">

                <div className="wd-smallContainer ">
                        <div className = "wd-author d-inline">{tuit.username}</div>
                        <Verified ver={tuit.verified}/>
                        <div className="wd-handle2 d-inline"> @{tuit.handle}</div>
                        <div className="wd-date d-inline">{tuit.time}</div>

                </div>



                <div className = "wd-text pb-2">
                    <div
                      dangerouslySetInnerHTML={{__html: tuit.title}}
                    />

                </div>



                <div className={tuit.videoClass}>
                    <iframe className="wd-attachments2"  src={`https://www.youtube.com/embed/${tuit.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>

                <div className = {tuit.imageClass}>
                    <img src={tuit.image} className="wd-attachments" />
                </div>



                <div >

                    <div className="wd-imageText">
                        {tuit.tuit}
                    </div>


                </div>



            </div>

        </div>






    </>
    );
}


export default TuitListItem;