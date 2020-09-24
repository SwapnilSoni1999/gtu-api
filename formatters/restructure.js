const restructure = (fullResult, examId) => {
    fullResult.DECLARATIONDATE = new Date(fullResult.DECLARATIONDATE)

    // semester
    fullResult.sem = Number(fullResult.sem)

    // branch code
    fullResult.BR_CODE = Number(fullResult.BR_CODE)

    // rename MAP_NUMBER to enrollment
    fullResult.enrollment = fullResult.MAP_NUMBER
    delete fullResult.MAP_NUMBER

    // total backlog
    fullResult.TOTBACKL = Number(fullResult.TOTBACKL)

    // current backlog
    fullResult.CURBACKL = Number(fullResult.CURBACKL)

    // SPI
    fullResult.SPI = Number(fullResult.SPI)

    // CPI
    fullResult.CPI = Number(fullResult.CPI)

    // CGPA
    fullResult.CGPA = Number(fullResult.CGPA)

    // TRIAL
    fullResult.TRIAL = Number(fullResult.TRIAL)

    // IsREcheck
    // fullResult.IsREcheck (do it later)

    // IsReass
    // fullResult.IsReass

    // RTI
    // fix later

    // add examId at the end so it will be easy to recognize
    fullResult.examId = examId

    return fullResult
}

module.exports = restructure
