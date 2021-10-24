import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            <NavigationSidebar active="home"/>
        </>

    )
};

export default Build;