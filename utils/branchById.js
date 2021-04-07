const BRANCHES = [
    {
        id: 1,
        name: 'AERONAUTICAL ENGINEERING'
    },
    {
        id: 2,
        name: 'AUTOMOBILE ENGINEERING'
    },
    {
        id: 3,
        name: 'BIOMEDICAL ENGINEERING'
    },
    {
        id: 4,
        name: 'BIO-TECHNOLOGY'
    },
    {
        id: 5,
        name: 'CHEMICAL ENGINEERING'
    },
    {
        id: 6,
        name: 'CIVIL ENGINEERING'
    },
    {
        id: 7,
        name: 'COMPUTER ENGINEERING'
    },
    {
        id: 31,
        name: 'COMPUTER SCIENCE & ENGG.'
    },
    {
        id: 8,
        name: 'ELECTRICAL & ELECTRONICS'
    },
    {
        id: 9,
        name: 'ELECTRICAL ENGINEERING'
    },
    {
        id: 10,
        name: 'ELECTRONICS'
    },
    {
        id: 11,
        name: 'ELECTRONICS & COMMUNICATION ENGG.'
    },
    {
        id: 12,
        name: 'ELECTRONICS & TELECOMMUNICATION'
    },
    {
        id: 13,
        name: 'ENVIRONMENT ENGINEERING'
    },
    {
        id: 14,
        name: 'FOOD PROCESSING & TECHNOLOGY'
    },
    {
        id: 15,
        name: 'INDUSTRIAL ENGINEERING'
    },
    {
        id: 16,
        name: 'INFORMATION TECHNOLOGY'
    },
    {
        id: 17,
        name: 'INSTRUMENTATION & CONTROL ENGG.'
    },
    {
        id: 18,
        name: 'MARINE ENGINEERING'
    },
    {
        id: 19,
        name: 'MECHANICAL ENGINEERING'
    },
    {
        id: 20,
        name: 'MECHATRONICS'
    },
    {
        id: 21,
        name: 'METALLURGY'
    },
    {
        id: 22,
        name: 'MINING ENGINEERING'
    },
    {
        id: 23,
        name: 'PLASTIC ENGINEERING'
    },
    {
        id: 24,
        name: 'POWER ELECTRONICS'
    },
    {
        id: 25,
        name: 'PRODUCTION ENGINEERING'
    },
    {
        id: 26,
        name: 'RUBBER TECHNOLOGY'
    },
    {
        id: 27,
        name: 'TEXTILE ENGINEERING'
    },
    {
        id: 28,
        name: 'TEXTILE PROCESSING ENGG.'
    },
    {
        id: 29,
        name: 'TEXTILE TECHNOLOGY'
    },
    {
        id: 90,
        name: 'DEGREE PHARMACY'
    },
    {
        id: 91,
        name: 'DIPLOMA PHARMACY'
    }
]

const getBranchById = (branchCode) => {
    const branch = BRANCHES.find(branch => branch.id == branchCode)
    return branch || null
}

module.exports = getBranchById
