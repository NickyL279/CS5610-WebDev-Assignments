const PostSummaryItem = ({posts}) => {
    return (
        <>
            <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="wd-text-gray">{posts.topic}</div>
                        <div>
                            <span className="fw-bold">{posts.userName}</span>
                            <i className="fa fa-check-circle"/>
                            <span className="wd-text-gray"> - {posts.time}</span>
                        </div>
                        <p className="mb-0 fw-bold"> {posts.title} </p>
                    </div>
                    <div>
                        <img className="ps-1 wd-img-col2" height="100px" src={posts.image}/>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PostSummaryItem;
