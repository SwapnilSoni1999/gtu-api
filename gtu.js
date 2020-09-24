const { defaultHeaders, hostUrl } = require('./config')
const { default: axios } = require('axios')
const qs = require('querystring')

class GTUResults {
    constructor() { }

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

    static async getCourse(examSession) {
        const data = {
            'ReqOperation': 'GetCourse',
            'ExSession': examSession
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

    static async getExam(examSession, examType) {
        const data = {
            'ReqOperation': 'GetExamName',
            'ExSession': examSession,
            'ExType': examType
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
