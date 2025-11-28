/*
    You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

    i.e: "test" --> "es"
*/

function getMiddle(s) {

    let n = s.length
    return n%2 === 0 ? s[n/2-1]+s[n/2]:s[Math.floor[n/2]]
}

console.log(getMiddle("Test"))