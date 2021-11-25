import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";
import posts from "./posts.json";

const PostSummaryList = ({title}) => {
    return(
        <ul className="list-group">
            <li className="list-group-item wd-card-img-top">
                <img className="card-img-top" src="/images/a4p1.jpeg"/>
                <div className="wd-card-img-top-title">SpaceX's Starship</div>
            </li>
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }
            {
                posts.map((post, idx) => {
                    return (
                        <PostSummaryItem key={idx} post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;