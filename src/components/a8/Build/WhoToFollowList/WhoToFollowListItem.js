const WhoToFollowListItem = ({who}) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-xl-2">
                        <img className="rounded-circle" src={who.avatarIcon} width="48"
                             height="48"/>
                    </div>
                    <div className="col-lg-6 col-xl-7 wd-text-col3">
                        <span className="fw-bold">{who.userName}</span>
                        <i className="fas fa-check-circle"/><br/>
                        <span>@{who.handle}</span>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <button className="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default WhoToFollowListItem;
