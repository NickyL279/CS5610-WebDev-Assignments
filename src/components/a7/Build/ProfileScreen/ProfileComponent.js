import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const selectAllProfile = (state) => state.profile;

const ProfileComponent = () => {
    const profile = useSelector(selectAllProfile);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left"/>
                </div>
                <div className="col-11">
                    <span className="wd-title-color">{profile.name}</span><br/>
                    <span>32 tweets</span>
                </div>
                <img src={profile.bannerPicture} width="100%"/>
            </div>
            <div className="wd-content-position">
                <div>
                    <img src={profile.profilePicture} className="wd-twitter-profileImage"/>
                    <Link to="/a7/twitter/profileEdit">
                        <button
                            className="btn btn-light rounded-pill wd-twitter-editButton fw-bold">
                            Edit Profile
                        </button>
                    </Link><br/>
                </div>
                <div className="mt-1">
                <span
                    className="wd-twitter-userNameHandle wd-twitter-userNameFont fw-bolder">{profile.name}</span><br/>
                    <span className="wd-twitter-userNameHandle">@{profile.handle}</span>
                </div>
                <div className="mt-2">
                    <span className="wd-twitter-bio">{profile.bio}</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"/>
                    <span className="wd-twitter-profile-box-info"> {profile.location} </span>
                    <i className="fas fa-birthday-cake"/>
                    <span
                        className="wd-twitter-profile-box-info"> Born {profile.dateOfBirth} </span>
                    <i className="fas fa-calendar-alt"/>
                    <span
                        className="wd-twitter-profile-box-info"> Joined {profile.dateJoined} </span><br/>
                </div>
                <div>
                    <span
                        className="wd-twitter-profile-box-info wd-title-color"> {profile.followingCount} </span>
                    <span>Following</span>
                    <span
                        className="wd-twitter-profile-box-info wd-title-color"> {profile.followersCount} </span>
                    <span>Followers</span>
                </div>
            </div>
        </div>
    )
        ;
}
export default ProfileComponent;