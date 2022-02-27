import PostItem from "./PostItem.js";
import postList from "./postList.js"


const PostList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->

            ${
                PostItem.map(post => {
                    return(postList(post));
                }).join('')
        }






            </ul>
`); }

export default PostList;
