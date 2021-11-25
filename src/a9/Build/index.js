import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import "./explore.css"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ProfileEditScreen from "./ProfileEditScreen";
import profile from "../reducers/profile";
import who from "../reducers/who";
import tweets from "../reducers/tweets";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <Route path={["/", "/a9/twitter/home", "a9/twitter"]} exact={true}
                       component={HomeScreen}/>
                <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen}/>
                <Route path="/a9/twitter/profile" exact={true} component={ProfileScreen}/>
                <Route path="/a9/twitter/profileEdit" exact={true} component={ProfileEditScreen}/>
            </div>
        </Provider>
    );
};
export default Build;
