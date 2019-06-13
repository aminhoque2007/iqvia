import fetch from 'isomorphic-fetch';

const BASE_ENDPOINT = '/api';

export const postToGqlApi = (query: any) => {
    return fetch(BASE_ENDPOINT, {
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: query,
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const getContactsRequest = () => {
    return fetch(`${BASE_ENDPOINT}?query={contacts{name, email, id}}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .catch(err => console.log('err', err));
};