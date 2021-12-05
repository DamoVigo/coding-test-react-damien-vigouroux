import { API } from 'constants/api';

export const userIdService = {
    listWithId
}

function listWithId(id) {
        this.id = id
        if (this.id === null) {
            this.id = 1
        } if (this.id != null ) {
        
    const get = { method: 'GET' }
    return new Promise((resolve, reject) => {
        fetch(`${API}/users/${this.id}`, get)
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
}}
