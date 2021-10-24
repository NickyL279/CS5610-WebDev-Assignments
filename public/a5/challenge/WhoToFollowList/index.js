import WhoToFollowItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = (who) => {
    return `<ul class="list-group">
      <li class="list-group-item fw-bold">Who to follow</li>
      ${whos
        .map((elem) => {
            return WhoToFollowItem(elem);
        })
        .join("")}
    </ul>`;
};

export default WhoToFollowList;
