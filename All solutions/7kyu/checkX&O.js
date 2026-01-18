/*
    In this kata we are asked to
    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    The string can contain any char.

    Examples input/output: XO("ooxx") => true
*/

function XO(str) {
    let countO = 0
    let countX = 0

    let lower = str.toLowerCase()
    // for (let i = 0; i < lower.length; i++) {
    //     if (lower[i] == "x") {
    //         countX++
    //     } else if (lower[i] == "o") {
    //         countO++
    //     }
    // }
    // return countO == countX

    //Best Method
    // str = str.toLowerCase().split('');
    // return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}