import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = (post) => {
    return `<ul class="list-group">
          ${posts
        .map((elem) => {
            return PostItem(elem);
        })
        .join("")}
        </ul>`;
};

export default PostList;
