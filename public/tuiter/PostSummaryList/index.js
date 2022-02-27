//PostSummaryList ///function to inpliment items array?

//creates the dynamic html for individual posts
import PostSummaryItem from "./PostSummaryItem.js";
import postSummaryList from "./postSummaryList.js"


const PostSummaryList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->

            ${
                PostSummaryItem.map(item => {
                    return(postSummaryList(item));
                }).join('')
        }






            </ul>
`); }

export default PostSummaryList;



