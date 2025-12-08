/*
    In this kata we are asked to convert from usd to chinese yuan
    and return the result in 2 decimal places
*/

function usdcny(usd) {

    let convert = (6.75 * usd).toFixed(2)
    return `${convert} Chinese Yuan`
}