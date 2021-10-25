import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import "./explore.css"
import HomeScreen from "./HomeScreen/HomeScreen";

const Build = () => {
    return (
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<PostSummaryList />*/}
            {/*<WhoToFollowList />*/}
            <ExploreScreen/>
            {/*<HomeScreen/>*/}
        </>
    )
};

export default Build;