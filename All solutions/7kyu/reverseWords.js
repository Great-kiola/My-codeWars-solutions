/*
    In this kata we are given a 
    function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
    Examples "This is an example!" ==> "sihT si na !elpmaxe"
*/

function reverseWords(str) {
    let splits = str.split(" ")
    let newArr = []

    for (el of splits) {
        newArr.push(el.split("").reverse().join(""))
    }
    return newArr.join(' ')

    // Best method
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}