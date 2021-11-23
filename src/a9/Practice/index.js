import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <Movies/>
        </div>
    )
};
export default Practice;
