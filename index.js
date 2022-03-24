
const { sortNumber, sortText } = require("./functions.js")
const { arrayNumbers, arrayCars } = require("./data.js")


const sortedNumbers = sortNumber(arrayNumbers)
console.log(sortedNumbers);

const sortedCars = sortText(arrayCars)
console.log(sortedCars);