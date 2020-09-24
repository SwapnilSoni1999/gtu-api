const { defaultHeaders, hostUrl } = require('./config')
const { default: axios } = require('axios')
const qs = require('querystring')

class GTUResults {
    constructor () {}

    static async getSessions() {
        const data = {
            'ReqOperation': 'GetSession'
        }
        const res = await axios({
            method: 'POST',
            url: hostUrl,
            headers: defaultHeaders,
            data: qs.stringify(data),
            responseType: 'json'
        })
        return res.data
    }

}

module.exports = GTUResults
