const url = '/api';

export default {
    get (id) {
        return fetch(url)
    },

    post (id, data) {
        return fetch(url, {
            method: 'post',
            data: JSON.stringify(data)
        })
    },

    k () {
        return 50
    }
}

console.log(1.0);