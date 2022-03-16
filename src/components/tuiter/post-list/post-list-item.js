
const PostList = ({
           post = {
           "label":"y",
               "topic": "Web Development",
               "userName": "ReactJS",
               "time": "2h"

           }
       }) => {



return(
            <div className = "wd-largeContainer">
                <div className = "wd-avatarElement">
                    <img src={post.avatar} className="wd-avatar" />
                </div>
                <div className = "wd-contentBlock">

                    <div className="wd-smallContainer ">
                            <div className = "wd-author d-inline">{post.userName}</div>
                            <div className="wd-handle2 d-inline">{post.handle}</div>
                            <div className="wd-date d-inline">{post.time}</div>
                            <div className="wd-rightDots d-inline"><i class="fa-solid fa-ellipsis"></i></div>
                    </div>



                    <div className = "wd-text pb-2">
                        <div
                          dangerouslySetInnerHTML={{__html: post.title}}
                        />

                    </div>

                    <div className = "wd-line1">
                        <img src={post.image} className="wd-bigImage" />
                    </div>

                    <div className = {post.specialClass}>
                        <div className="wd-boldTitle">{post.caption}</div>
                        <div className="wd-imageText">
                            {post.content}
                        </div>
                        <div className="wd-external">
                            <i className="fa fa-link">  </i>  {post.link}
                        </div>

                    </div>


                    <div className ="wd-icons">
                        <a href="#" className= "wd-first"> <i className="fa fa-comment"></i></a>
                        <div className = "wd-first2"> {post.bubble}</div>
                        <a href="#" className = "wd-second"> <i className="fa fa-retweet"></i></a>
                        <div className = "wd-second2">{post.arrows}</div>
                        <a href="#" className = "wd-third"> <i className="fa fa-heart"></i></a>
                        <div className = "wd-third2">{post.heart}</div>
                        <a href="#" className = "wd-fourth"> <i className="fa fa-upload"></i></a>


                    </div>
                </div>
            </div>


    );







}




export default PostList;