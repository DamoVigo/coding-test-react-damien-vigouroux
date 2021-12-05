import { API } from 'constants/api';

export const userIdService = {
    listWithId
}

function listWithId(id) {
    const get = { method: 'GET' }
    return new Promise((resolve, reject) => {
        fetch(`${API}/users/${id}`, get)
        .then(data => {
            return data.json()
        })
        .then(data => {
            resolve(data);
        })
        .catch(e => {
            reject(e)
        });
    });
}
