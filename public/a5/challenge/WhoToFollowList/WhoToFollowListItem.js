const WhoToFollowItem = (who) => {
    return `
    <li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-lg-2 col-xl-2">
            <img class="rounded-circle" src="${who.avatarIcon}" width="48" height="48">
        </div>
        <div class="col-lg-6 col-xl-7 wd-text-col3">
            <span class="fw-bold">${who.userName}</span>
            <i class="fas fa-check-circle"></i></br>
        <span>@${who.handle}</span>
        </div>
        <div class="col-lg-4 col-xl-3">
        <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
    </div>
`;
};

export default WhoToFollowItem;
