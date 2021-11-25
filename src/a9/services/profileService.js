const PROFILE_API = 'http://localhost:4000/rest/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
                  dispatch({
                               type: 'fetch-profile',
                               profile
                           })
        );

export const updateProfile = (dispatch, newProfile) =>
    fetch(`${PROFILE_API}/${newProfile._id}`, {
        method: 'PUT',
        body: JSON.stringify(newProfile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile =>
                  dispatch({
                               type: 'edit-profile-name',
                               profile
                           })
        );