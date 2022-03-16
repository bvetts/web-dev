import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"


const WhoToFollowList = () => {
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