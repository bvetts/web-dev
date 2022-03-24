//need to hevaliy modify what is shown in this section


import {useDispatch} from "react-redux";
import React, {useState} from "react";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
         tuit: whatsHappening
       });
  }
  return (

<div className="wd-newTuit">
    <div className = "wd-avatarElement2 ">
        <img src="/images/user.jpg" className="wd-avatar2 mx-auto d-inline" />


        <textarea className="wd-tuitBox d-inline" placeholder="what's happening?" value={whatsHappening}
                   onChange={(event) =>
            setWhatsHappening(event.target.value)}>
        </textarea>
    </div>
    <div className="pt-2"></div>
    <div className = "wd-iconsAndButtonsBox ">
    <div className="mx-auto">
        <a href="/"> <i className=" pt-2 fa fa-folder"> </i> <i className=" pt-2 fa fa-line-chart"> </i> <i className=" pt-2 fa fa-smile"> </i> <i className="far fa-calendar"></i></a>
    </div>
        <button className="btn pt-2  btn-primary wd-tuitButton float-right rounded-pill   " onClick={tuitClickHandler} >Tuit</button>
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