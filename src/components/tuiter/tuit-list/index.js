//change image names in the json

import {useState} from "react";
import React, {useEffect} from "react";
import {createTuit, deleteTuit, findAllTuits} from "../actions/tuits-actions";
import {useDispatch, useSelector} from "react-redux";



import TuitListItem from "./tuit-list-item";
import TuitStats from "./tuit-stats";



const TuitList = () => {

const tuits = useSelector(
       state => state.tuits);
 const dispatch = useDispatch();

useEffect(() =>
   findAllTuits(dispatch),
   []);




  return (
    <ul className="ttr-tuits list-group">

      {
        tuits.map && tuits.map(tuit =>
            <li key = {tuit._id} className="list-group-item">

                <i onClick={() => deleteTuit(dispatch, tuit)} className="fa-solid fa-remove fa-2x fa-pull-right"></i>

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

//<i onClick={() => deleteTuit(tuit)} className="fa-solid fa-remove fa-2x fa-pull-right"></i>






