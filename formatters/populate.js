const subResult = require('./fetchSubject')
const restructure = require('./restructure')

const populateResult = async (data, enrollment, examId) => {
    data = data[0]
    const subjectCodes = []
    for (let i = 0; i < 16; i++) {
        if (data['SUB' + i.toString()] != "") {
            const subCode = data['SUB' + i.toString()]
            subjectCodes.push(subCode)
        }
    }
    const toDel = []
    for (let key of Object.keys(data)) {
        if ((/SUB.+/).test(key)) {
            toDel.push(key)
        }
    }
    for (let key of toDel) {
        delete data[key]
    }
    const subjectResults = []
    for (let sc of subjectCodes) {
        subjectResults.push(await subResult(enrollment, examId, sc))
    }
    // remove 1st empty index
    for (let i=0; i<subjectResults.length; i++) {
        if (subjectResults[i]['sub'] == "") {
            subjectResults.splice(i, 1)
        }
    }
    data.subjects = subjectResults
    return restructure(data, examId)
}

module.exports = populateResult
