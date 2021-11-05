import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <A6Practice/>
                </Route>
                <Route path="/a6/twitter">
                    <A6Build/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
            </div>
            <Link to="/a6/hello">
                | A6Hello |
            </Link>
            <Link to="/a6/practice">
                | A6 Practice ｜
            </Link>
            <Link to="/a7/practice">
                | A7 Practice |
            </Link>
            <Link to="/a7/twitter/home">
                | A7 Home ｜
            </Link>
            <Link to="/a7/twitter/explore">
                | A7 Explore ｜
            </Link>
            <Link to="/a7/twitter/profile">
                | A7 Profile ｜
            </Link>
        </BrowserRouter>

    );
}

export default App;
