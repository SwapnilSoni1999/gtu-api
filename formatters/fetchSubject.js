const { hostUrl, defaultHeaders } = require('./../config')
const { default: axios } = require('axios')
const qs = require('querystring')

const subResult = async (enrollment, examId, subjectCode) => {
    const payload = {
        'ReqOperation': 'ViewSubjectGrade',
        'ExamID': String(examId),
        'EnrNo': String(enrollment),
        'SubjectCode': String(subjectCode),
        'IsCurrent': '0'
    }
    const res = await axios({
        method: 'POST',
        url: hostUrl,
        headers: defaultHeaders,
        data: qs.stringify(payload),
        responseType: 'json'
    })
    return res.data[0]
}

module.exports = subResult
