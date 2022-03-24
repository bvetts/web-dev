import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState} from "react";





const EditComponent = () => {
const prof = useSelector(
    state => state.prof);

const dispatch = useDispatch();

let [whatsfirstName, setfirstName] = useState(prof.firstName);
let [whatslastName, setlastName] = useState(prof.lastName);
let [whatshandle, sethandle] = useState(prof.handle);
let [whatsbio, setbio] = useState(prof.bio);
let [whatswebsite, setwebsite] = useState(prof.website);
let [whatslocation, setlocation] = useState(prof.location);
let [whatsdateOfBirth, setdateOfBirth] = useState(prof.dateOfBirth);



const updateClickHandler = () => {

    const action = {
      type: 'update-profile',
      firstName: whatsfirstName,
      lastName: whatslastName,
      handle:whatshandle,
      bio:whatsbio,
      website:whatswebsite,
      location:whatslocation,
      dateOfBirth:whatsdateOfBirth


    };
    dispatch(action);
  }

const undoEdit = () =>{
const action = {
      type: 'undo-edit',
      prof:prof

    };
    dispatch(action);
  }



    return(

<>
    <div className = " pb-2 d-flex">
        <div className = " wd-rightX d-inline-block">
            <Link to="/tuiter/profile" >
                        <i onClick={() => undoEdit(prof)} className="fas fa-remove fa-2x wd-userName"></i>
            </Link>
        </div>
        <div className = " wd.centerEdit  d-inline-block">
            <div className = "wd-userName d-inline">Edit Profile</div>
        </div>
        <div className = "wd-saveButton wd-userName d-inline-block">
            <Link to="/tuiter/profile" >
                    <button className="btn btn-dark btn-block rounded-pill" onClick={updateClickHandler}>Save</button>
            </Link>

        </div>
    </div>





    <div className="wd-bannerUserBox">

            <img src= {prof.bannerPicture}  className="wd-bannerImage wd-imageShader" /><br/>

            <i className="fa fa-camera fa-2x wd-overlayIcons"></i>
            <i className="fas fa-remove fa-2x wd-overlayIcons2"></i>
            <img src={prof.profilePicture} className="wd-userImage wd-imageShader" /><br/>
            <i className="fas fa-remove fa-2x wd-overlayUser"></i>


    </div>


    <br/>
    <br/>

    <br/>
    <div className="wd-editBoxes">
        <p > First Name</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.firstName} value={whatsfirstName}
                       onChange={(event) =>
                setfirstName(event.target.value)}>
        </textarea>
    </div>
    <br/>

    <div className="wd-editBoxes">
    <p>Last Name</p>
    <textarea className="wd-tuitBox2 d-inline" placeholder={prof.lastName} value={whatslastName}
                       onChange={(event) =>
                setlastName(event.target.value)}>
    </textarea>
    </div>
    <br/>
    <div className="wd-editBoxes">
        <p>Handle</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.handle} value={whatshandle}
                           onChange={(event) =>
                    sethandle(event.target.value)}>
        </textarea>
    </div>
    <br/>
    <div className="wd-editBoxes">
    <p>Bio</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.bio} value={whatsbio}
                           onChange={(event) =>
                    setbio(event.target.value)}>
        </textarea>
    </div>
    <br/>
    <div className="wd-editBoxes">
        <p>Website</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.website} value={whatswebsite}
                           onChange={(event) =>
                    setwebsite(event.target.value)}>
        </textarea>
    </div>
    <br/>
    <div className="wd-editBoxes">
        <p>Location</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.website} value={whatslocation}
                           onChange={(event) =>
                    setlocation(event.target.value)}>
        </textarea>
    </div>
    <br/>
    <div className="wd-editBoxes">
        <p>Date of Birth</p>
        <textarea className="wd-tuitBox2 d-inline" placeholder={prof.dateOfBirth} value={whatsdateOfBirth}
                           onChange={(event) =>
                    setdateOfBirth(event.target.value)}>
        </textarea>
    </div>
    <br/>
    <br/>




</>
  );
}

export default EditComponent;



//prof = {…prof, firstName = event.target.value}
//set values in each textarea