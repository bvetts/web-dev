import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
const HomeComponent = () => {
    return(`

        ${PostList()}
  `);
}

export default HomeComponent;