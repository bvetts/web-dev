//change to tuitlist??? keep as post list but make different data??

//completly different look
//needs to be dynamic? change the screen if the edit button is clicked??
//probs change with reducer??
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


const ProfileComponent = () => {
const prof = useSelector(
    state => state.prof);
    return(

<>
    <div className = " d-flex">
        <div className = " wd-rightArrow d-inline">
        <i className="fa fa-arrow-left fa-2x"></i>
        </div>
        <div className = " pl-4 d-inline">
            <div className = "wd-userName d-inline">{prof.firstName} {prof.lastName}</div>
            <div className="wd-handle2 ">5196 Tweets</div>
        </div>
    </div>

    <div className="wd-bannerUserBox">
        <img src= {prof.bannerPicture}  className="wd-bannerImage" /><br/>
        <img src={prof.profilePicture} className="wd-userImage" /><br/>
    </div>

    <div className = "d-flex">
        <div className = " wd-spacer"></div>
        <div>
            <Link to="/tuiter/edit" >
                <button className=" wd.editButton btn btn-light btn-block rounded-pill" >Edit Profile</button>
            </Link>
        </div>
    </div>

    <br/>
    <div className = "wd-userName d-inline">{prof.firstName} {prof.lastName}</div>
    <div className="wd-handle2 ">@{prof.handle}</div>

    <div className = "wd-bio pt-2">
        {prof.bio}

    </div>
    Link: <a className = "wd-bio pb-2 pl-2"> {prof.website}</a>


    <br/>

    <div className="wd-handle2 d-flex pt-2 ">
        <div className="wd-handle2 d-inline mr-2">
            <i className="fa fa-map-marker"></i> {prof.location}
        </div>
        <div className="wd-handle2 d-inline mx-2">
             <i className="fa fa-birthday-cake"></i> {prof.dateOfBirth}
        </div>
        <div className="wd-handle2 d-inline mx-2">
            <i className="far fa-calendar-alt"></i> {prof.dateJoined}
        </div>

    </div>

    <div className="wd-handle2 d-flex">
        <div className="wd-handle2 d-inline mr-2">
            <span className="wd-numbers">{prof.followingCount}</span> Following
        </div>
        <div className="wd-handle2 d-inline mx-2">
             <span className="wd-numbers">{prof.followersCount}</span>  Followers
        </div>

    </div>

</>
  );
}

export default ProfileComponent;

