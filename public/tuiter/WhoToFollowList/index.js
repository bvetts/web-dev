

//todos is whotofollowlist
//todoitem is the function to get the stuff, is who
////not sure what //todo is might be variable only//
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
    <div class="wd-followContainer">
        <div class="wd-whotofollow px-3 mt-2 pt-2 ">Who to Follow</div>
            <ul class="list-group">
                <!-- continue here -->
                ${
                    WhoToFollowListItem.map(todo => {
                        return(who(todo));
                    }).join('')
                }
            </ul>
            <br>
    </div>


`);

}


export default WhoToFollowList;