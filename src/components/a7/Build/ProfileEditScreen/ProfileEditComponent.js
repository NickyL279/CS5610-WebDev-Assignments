import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./profileEdit.css";
import "../ProfileScreen/profile.css";

const selectAllProfile = (state) => state.profile;

const ProfileEditComponent = () => {
    const profile = useSelector(selectAllProfile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);

    const saveProfile = () => {
        dispatch({
                     type: 'profile-edit',
                     nameNew: name,
                     bioNew: bio,
                     locationNew: location,
                     websiteNew: website,
                     dobNew: dateOfBirth
                 });
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col-1 ">
                    <Link to="/a7/twitter/profile">
                        <i className="fas fa-times wd-title-color"/>
                    </Link>
                </div>
                <div className="col-9">
                    <span className="fw-bolder wd-title-color">Edit Profile</span>
                </div>
                <div className="col-2">
                    <Link to="/a7/twitter/profile">
                        <button className="btn btn-light rounded-pill " onClick={saveProfile}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-3">
                <img src={profile.bannerPicture} width="100%"/>
                <img src={profile.profilePicture}
                     className="wd-twitter-profileImage wd-content-position"/>
            </div>

            <div className="wd-twitter-inputBox p-2 mb-2">
                <span className="wd-twitter-profile-box-attribute">Name</span>
                <br/>
                <textarea className="wd-twitter-input-textarea w-100"
                          onChange={(event => setName(event.target.value))} value={name}/>
            </div>

            <div className="wd-twitter-inputBox p-2 mb-2">
                <span className="wd-twitter-profile-box-attribute">Bio</span><br/>
                <textarea className="wd-twitter-input-textarea w-100"
                          onChange={(event => setBio(event.target.value))} value={bio}/>
            </div>
            <div className="wd-twitter-inputBox p-2 mb-2">
                <span className="wd-twitter-profile-box-attribute">Location</span>
                <br/>
                <textarea className="wd-twitter-input-textarea w-100"
                          onChange={(event => setLocation(event.target.value))} value={location}/>
            </div>
            <div className="wd-twitter-inputBox p-2 mb-2">
                <span className="wd-twitter-profile-box-attribute">Website</span>
                <br/>
                <textarea className="wd-twitter-input-textarea w-100"
                          onChange={(event => setWebsite(event.target.value))} value={website}/>
            </div>
            <div className="wd-twitter-inputBox p-2 mb-2">
                <span className="wd-twitter-profile-box-attribute">Birth Date</span>
                <br/>
                <input className=" w-100" type="date" onChange={(event => setDOB(event.target.value))}
                       value={dateOfBirth}/>
            </div>
        </>
    );
}
export default ProfileEditComponent;