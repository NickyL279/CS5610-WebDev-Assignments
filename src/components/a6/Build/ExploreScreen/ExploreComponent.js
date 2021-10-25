import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="mb-2 d-flex align-items-center">
                    <i className="fa fa-search wd-icon-search"/>
                    <input className="w-100 wd-input-search-bar" placeholder="Search Twitter"/>
                    <i className="fa fa-cog fa-2x text-primary"/>
                </div>
            </div>
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link
                d-none d-md-block d-lg-block d-xl-block d-xxl-block" href="#">Entertainment</a>
                </li>
            </ul>
            <PostSummaryList/>
        </>
    );
}

export default ExploreComponent;
