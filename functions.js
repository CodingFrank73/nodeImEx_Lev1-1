

function sortNumber(data) {
    return data.sort((a, b) => a - b)
}

function sortText(data) {
    return data.sort()
}

module.exports = { sortNumber, sortText }