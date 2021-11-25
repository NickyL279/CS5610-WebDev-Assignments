import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import A8Practice from "./components/a8/Practice"
import A8Build from "./components/a8/Build"
import A9Build from "./a9/Build"
import React from "react";
import A9 from "./a9";

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
                <Route path={["/a8", "/a8/practice"]} exact={true}>
                    <A8Practice/>
                </Route>
                <Route path="/a8/twitter">
                    <A8Build/>
                </Route>
                <Route path="/a9/practice">
                    <A9/>
                </Route>
                <Route path="/a9/twitter">
                    <A9Build/>
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
            <Link to="/a8/practice">
                | A8 Practice |
            </Link>
            <Link to="/a8/twitter/home">
                | A8 Home ｜
            </Link>
            <Link to="/a8/twitter/explore">
                | A8 Explore ｜
            </Link>
            <Link to="/a8/twitter/profile">
                | A8 Profile ｜
            </Link>
            <Link to="/a9/practice">| A9 Practice |</Link>
            <Link to="/a9/twitter/home">
                | A9 Home ｜
            </Link>
            <Link to="/a9/twitter/explore">
                | A9 Explore ｜
            </Link>
            <Link to="/a9/twitter/profile">
                | A9 Profile ｜
            </Link>
        </BrowserRouter>

    );
}

export default App;
