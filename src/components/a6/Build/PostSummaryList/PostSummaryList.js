import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";
import React from "react";

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group">
                <ul className="list-group mb-5">
                    <li className="list-group-item wd-card-img-top">
                        <img className="card-img-top" src="/images/a4p1.jpeg"/>
                        <div className="wd-card-img-top-title">SpaceX's Starship</div>
                    </li>
                    {posts.map(posts => {
                        return(
                            <PostSummaryItem posts = {posts}/>
                        );
                    })
                    }
                </ul>
            </ul>
        </>
    );
};

export default PostSummaryList;

