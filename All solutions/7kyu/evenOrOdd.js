/*
    In this kata we are asked to
    convert a number to binary if its even
    and if its odd convert to hexadecimal
*/

function evensAndOdds(num) {
    return num % 2 === 0 ? num.toString(2) : num.toString(16)
}