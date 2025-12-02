/*
    In this kata we are given a string of words, return the length of the shortest word(s).
*/

function findShort(s) {
    let getArr = s.split(" ")
    let min = getArr[0]

    for (let i = 0; i < getArr.length; i++) {
        if (getArr[i].length < min.length) {
            min = getArr[i]
        }
    }

    return min.length

    // Best Method
    // return Math.min(...s.split(" ").map(s => s.length));
}