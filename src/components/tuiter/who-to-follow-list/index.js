import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
//import who from "./who.json"
import {useSelector} from "react-redux";




const WhoToFollowList = () => {
const who = useSelector((state) => state.who);
    return (
    <>
        <div className="wd-followContainer">
            <div className="wd-whotofollow px-3 mt-2 pt-2 ">Who to Follow</div>
                <ul className="list-group">

                    {
                         who.map(who => {
                             return(
                                 <WhoToFollowListItem who={who}/>
                             );
                         })
                     }

                </ul>

        </div>

</>
);

}


export default WhoToFollowList;