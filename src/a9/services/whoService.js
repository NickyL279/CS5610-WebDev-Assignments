const WHO_API = 'http://localhost:4000/rest/who';

export const fetchWho = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(who =>
                  dispatch({
                               type: 'fetch-who',
                               who
                           })
        );