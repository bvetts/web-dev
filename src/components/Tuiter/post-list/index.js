import React from "react";
import PostListItem from "./post-list-item";
import post from "./postlist.json"


const PostList = () => {
    return (
        <>
            <ul className="list-group">

                {
                    post.map(post => {
                         return(
                             <PostListItem post={post}/>
                         );
                     })
                }
            </ul>
        </>
    );
}

export default PostList;
