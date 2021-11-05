import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import "./explore.css"
import HomeScreen from "./HomeScreen/HomeScreen";

const Build = () => {
    return (
        <>
            <Route path={["/", "/a6/twitter/home"]} exact={true} component={HomeScreen}/>
            <Route path="/a6/twitter/explore" exact={true} component={ExploreScreen}/>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<PostSummaryList />*/}
            {/*<Index />*/}
            {/*<ExploreScreen/>*/}
            {/*<HomeScreen/>*/}
        </>
    )
};

export default Build;