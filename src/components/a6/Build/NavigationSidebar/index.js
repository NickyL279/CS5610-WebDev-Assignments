import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a6/" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter pe-2"/>
                </Link>
                <Link to="/a6/twitter/home" className={`list-group-item list-group-item-action d-flex
                   align-items-center ${active === 'home' ? 'active' : ''}`}
                      href="../HomeScreen/index.html">
                    <i className=" fa fa-home pe-2"/>
                    <span className=" d-none d-xl-block">Home</span></Link>
                <Link to="/a6/twitter/explore"
                      className={`list-group-item list-group-item-action d-flex
                   align-items-center ${active === 'explore' ? 'active' : ''}`}
                   href="../ExploreScreen/explore.html">
                    <i className=" fa fa-hashtag pe-2"/>
                    <span className=" d-none d-xl-block">Explore</span></Link>
                <a className=" list-group-item list-group-item-action d-flex align-items-center">
                    <i className=" fa fa-bell pe-2"/>
                    <span className=" d-none d-xl-block">Notifications</span></a>
                <a className=" list-group-item list-group-item-action d-flex align-items-center">
                    <i className=" fa fa-envelope pe-2"/>
                    <span className=" d-none d-xl-block">Messages</span></a>
                <a className=" list-group-item list-group-item-action d-flex align-items-center">
                    <i className=" fa fa-bookmark pe-2"/>
                    <span className=" d-none d-xl-block">Bookmarks</span></a>
                <a className=" list-group-item list-group-item-action d-flex align-items-center">
                    <i className=" fa fa-list pe-2"/>
                    <span className=" d-none d-xl-block">Lists</span></a>
                <a className=" list-group-item list-group-item-action d-flex align-items-center">
                    <i className=" fa fa-user pe-2"/>
                    <span className=" d-none d-xl-block">Profile</span></a>
                <a className=" list-group-item list-group-item-action d-flex align-items-center
                 mb-2">
                    <i className=" fa fa-ellipsis-h pe-2"/>
                    <span className=" d-none d-xl-block">More</span></a>
            </div>
            <button className=" btn btn-primary wd-tweet-btn">Tweet</button>
        </>
    );
}
export default NavigationSidebar;