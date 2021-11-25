import whos from './data/who.json';

const who = (state = whos, action) => {
    switch (action.type) {
        case 'fetch-who':
            return action.who;
        default:
            return (state);
    }
};

export default who;
