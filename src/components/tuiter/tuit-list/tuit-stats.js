import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
<div className ="mx-auto wd-icons">
        <span className="wd-first">
            <i className=" fa fa-comment"></i>
            {tuit.stats.comments}
        </span>
        <span className="wd-second">
             <i className="  fa fa-retweet"></i>
             {tuit.stats.retuits}
        </span>

        <span className="wd-third" onClick={likeTuit}>
        {
          tuit.liked &&
          <i className=" fas fa-heart me-1"
             style={{color: 'red'}}></i>
        }
        {
          !tuit.liked &&
          <i className="far fa-heart me-1"></i>
        }
        {tuit.stats && tuit.stats.likes}
        </span>


        <i className="wd-fourth fa fa-upload"></i>

</div>
  );
}
export default TuitStats;

