const { defaultHeaders, hostUrl } = require('./config')
const { default: axios } = require('axios')
const qs = require('querystring')

const generateDeviceId = require('./utils/deviceId')

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

    static async fromEnrollment(enrollment, examId) {
        const data = {
            'ReqOperation': 'StudentResult',
            'ExamID': String(examId),
            'EnrNo': String(enrollment),
            'DeviceId': generateDeviceId(),
            'OSversion': '29',
            'LatLong': '0',
            'MobileNo': '916929696969',
            'IMEI_NO': '0',
            'IPAddress': '7a54:8059:4d78:551f:6065:9eda:7720:f6eb%dummy0',
            'IsCurrent': '0'
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
