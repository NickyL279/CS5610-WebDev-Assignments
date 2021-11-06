import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a7" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to="/a7/twitter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"/>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/a7/twitter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                   href="notifications.html">
                    <i className="fa fa-bell"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}
                   href="messages.html">
                    <i className="fa fa-envelope"/>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
                   href="bookmarks.html">
                    <i className="fa fa-bookmark"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
                   href="lists.html">
                    <i className="fa fa-list"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <Link to="/a7/twitter/profile"
                      className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}
                   href="more.html">
                    <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-ellipsis-h fa-inverse fa-stack-1x"/>
                    </span>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
        </>
    );
}

export default NavigationSidebar;
