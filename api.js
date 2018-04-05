const url = '/api'

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

    fetch () {
        return fetch()
    }
}