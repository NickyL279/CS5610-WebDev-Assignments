const WhoToFollowItem = (who) => {
    return `
    <li class="list-group-item">
      <div class="d-flex w-100 justify-content-between">
        <div class="d-flex">
          <div class="pe-2">
            <img
              class="rounded-circle"
              src="${who.avatarIcon}"
              width="50px"
              height="50px"
            />
          </div>
          <div>
            <div class="d-flex align-items-center">
              <spn class="pe-1 fw-bolder">${who.userName}</spn>
              <i class="fa fa-check-circle"></i>
            </div>
            <div>@${who.handle}</div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
`;
};

export default WhoToFollowItem;
