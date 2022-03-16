

const PostSummaryItem = ({
                                 post = {
                                     "topic": "Web Development",
                                     "userName": "ReactJS",
                                     "time": "2h",
                                     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                     "image": "../../../images/react-blue.png"
                                 }
                             }
) => {


    return(
        <>
            <div className = "wd-container1 pt-2">
                <div className = "wd-leftElement1 mx-auto">
                    <div  className="wd-topics pb-2">{post.topic}</div>
                    <div className="wd-name pr-1">{post.userName} <i className="fa fa-check-circle  "></i> <span className="wd-timestamp"> {post.time} </span></div>

                    <div className="wd-title pt-1 position-relative">{post.title} </div>
                    <div  className="wd-tuitsCount pb-3 pt-2">{post.tweets} </div>


                </div>
                <div className = "wd-rightElement1 pt-2 mx-auto">

                    <img src={post.image} className="wd-right_image"/>
                </div>
            </div>

        </>
    );
}

export default PostSummaryItem;