import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import "./explore.css"
import HomeScreen from "./HomeScreen";
import who from "../../../reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";
import ProfileScreen from "./ProfileScreen";
import profile from "../../../reducers/profile";
import ProfileEditScreen from "./ProfileEditScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <Route path={["/", "/a8/twitter/home", "a8/twitter"]} exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
                <Route path="/a8/twitter/profile" exact={true} component={ProfileScreen}/>
                <Route path="/a8/twitter/profileEdit" exact={true} component={ProfileEditScreen}/>
            </div>
        </Provider>
    );
};
export default Build;
