const PostSummaryItem = (posts) => {
    return `
    <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <div class="wd-text-gray">${posts.topic}</div>
                <div>
                    <span class="fw-bold">${posts.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="wd-text-gray"> - ${posts.time}</span>
                </div>
                <p class="mb-0 fw-bold"> ${posts.title} </p>
            </div>
            <div>
                <img class="ps-1 wd-img-col2" height="100px" src=${posts.image}>
            </div>
        </div>
    </li>
`;
};

export default PostSummaryItem;
