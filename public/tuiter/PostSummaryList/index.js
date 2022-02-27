
import PostSummaryItem from "./PostSummaryItem.js";
import plist from "./plist.js"


const PostSummaryList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->

            ${
                PostSummaryItem.map(item => {
                    return(plist(item));
                }).join('')
        }






            </ul>
`); }

export default PostSummaryList;



