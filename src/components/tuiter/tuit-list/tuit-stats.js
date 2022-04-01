import {useDispatch} from "react-redux";
import {updateTuit,} from "../actions/tuits-actions";



const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  //const likeTuit = () => {
  //  dispatch({type: 'like-tuit', tuit});

//if (tuit.liked === false){
  return (
    <div className ="mx-auto wd-icons">
        <span className="wd-first">
            <i className=" fa fa-comment"></i>
            {tuit.comments}
        </span>
        <span className="wd-second">
             <i className="  fa fa-retweet"></i>
             {tuit.retuits}
        </span>

        <span className="wd-third">
             <div className="d-inline mx-2" >
                 {tuit.likes}
                 <i onClick={() => updateTuit(dispatch, {
                   ...tuit,
                   likes: tuit.likes + 1
                 })} className="far fa-thumbs-up ms-2 "></i>
             </div>
             <div className="d-inline " >
                 {tuit.dislikes}
                  <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                  })} className="far fa-thumbs-down ms-2"></i>
              </div>
        </span>



        <i className="wd-fourth fa fa-upload"></i>

    </div>
  );



}
export default TuitStats;





