const PostItem = (posts) => {
    return `
<li class="list-group-item">
    <div class="wd-box-border-bookmark0 wd-padding-bookmark-ABCD">
        <img class="wd-avatar-bookmark" height="48px" src="${posts.img1}" width="48px">
        <div class="wd-author-handle-bookmark">
            <span class="wd-author-name-white-bookmark">${posts.author}</span>
            <i class="fas fa-badge-check"></i>
            <span class="wd-lightgray15-bookmark">${posts.authorHandle}</span>
            <span class="wd-lightgray15-bookmark">${posts.date}</span></br>
            <span class="wd-text-white-bookmark">${posts.content1}</span>
            <div class="wd-box-border-image-bookmark wd-rounded-bookmark wd-margin-top-bookmark">
                <img class="wd-rounded-bookmark1" height="264px" src="${posts.img2}" width="504px">
                <span class="wd-padding-bookmark wd-bold-white-bookmark">${posts.content2}</span><br>
                <span class="wd-padding-bookmark wd-lightgray15-bookmark">${posts.content3}</span>
            </div>
        </div>
    </div>
    <div class="wd-box-border-bookmark1 wd-flex-bookmark">
        <a href="#">
            <i class="wd-lightgray15-bookmark wd-comment-padding-bookmark far fa-comment">
                <span class="wd-padding-left-bookmark">${posts.commentNum}</span>
            </i>
        </a>
        <a href="#">
            <i class="wd-lightgray15-bookmark fas fa-retweet">
                <span class="wd-padding-left-bookmark">${posts.retNum}</span>
            </i>
        </a>
        <a href="#">
            <i class="wd-lightgray15-bookmark fas fa-heart">
                <span class="wd-padding-left-bookmark">${posts.likeNum}</span>
            </i>
        </a>
        <a href="#">
            <i class="wd-lightgray15-bookmark fas fa-upload"></i>
        </a>
    </div>
</li>
`;
};

export default PostItem;


