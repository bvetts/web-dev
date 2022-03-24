//change image names in the json


import React from "react";
//import tuits from "./tuits.json";
import TuitListItem from "./tuit-list-item";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


import TuitStats from "./tuit-stats";



const TuitList = ({tuit}) => {

const dispatch = useDispatch();
const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };


const tuits = useSelector(
    state => state.tuits);

  return (
    <ul className="ttr-tuits list-group">

      {
        tuits.map && tuits.map(tuit =>
            <li key = {tuit._id} className="list-group-item">
                <i onClick={() => deleteTuit(tuit)} className="fa-solid fa-remove fa-2x fa-pull-right"></i>

                <TuitListItem key={tuit._id}
                        tuit={tuit}/>

                <TuitStats key={tuit._id}
                        tuit={tuit}/>
          </li>
          )

      }


     </ul>


  );
}

export default TuitList;








