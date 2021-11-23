import owner from './data/profile.json';

const profile = (state = owner, action) => {
    switch (action.type) {
        case 'profile-edit':
            return {
                _id: (new Date()).getTime() + '',
                ...state,
                name: action.nameNew,
                bio: action.bioNew,
                location: action.locationNew,
                website: action.websiteNew,
                dateOfBirth: action.dobNew,
            };

        case 'edit-profile-name':
            return {
                ...state,
                name: action.nameNew,
                bio: action.bioNew,
                location: action.locationNew,
                website: action.websiteNew,
                dateOfBirth: action.dobNew,
            };

        case 'fetch-profile':
            return action.profile;
        default:
            return state;
    }
};

export default profile;