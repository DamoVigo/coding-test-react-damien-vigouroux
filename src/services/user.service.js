import { API } from 'constants/api';


export const userService = {
    list
}

function list() {
    const getInfo = { method: 'GET' }
    return new Promise((resolve, reject) => {
        fetch(`${API}/users/`, getInfo)
            .then(result => {
                return result.json()
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
