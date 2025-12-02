/*
    In this kata we are asked to count the number of
    occurence of a letter in a string
*/

function strCount(str, letter) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (letter == str[i]) {
            count++
        }
    }

    return count

    // Best Method
    // return str.split('').filter(c => c == letter).length;
}