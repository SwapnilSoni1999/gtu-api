const generateDeviceIdSync = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = lower.toUpperCase()
    const digits = "1234567890"
    const chars = lower + upper + digits
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

module.exports = generateDeviceIdSync
