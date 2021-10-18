import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = (post) => {
    return `<ul class="list-group">
       <ul class="list-group mb-5">
            <li class="list-group-item wd-card-img-top">
                <img class="card-img-top" src="../../build/a4p1.jpeg"/>
                <div class="wd-card-img-top-title">SpaceX's Starship</div>
            </li>
          ${posts
        .map((elem) => {
            return PostSummaryItem(elem);
        })
        .join("")}
        </ul>`;
};

export default PostSummaryList;
