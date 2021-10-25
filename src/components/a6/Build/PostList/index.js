import PostItem from "./PostItem.js";
import posts from "./posts.json";

const PostList = () => {
    return(
        <ul className="list-group">
            {posts.map(posts => {
                return(<PostItem posts = {posts} />) ;
            })}
        </ul>
    );
};

export default PostList;
