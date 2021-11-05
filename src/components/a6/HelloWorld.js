import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>
        </>

    );
};

export default HelloWorld;
