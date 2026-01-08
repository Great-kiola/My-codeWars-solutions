/*
    In this kata, we are asked to check :
    if the two arguments given are anagrams of each other;
*/

var isAnagram = function (test, original) {
    if (test.length !== original.length) {
        return false
    }

    let sortA = test.toLowerCase().split("").sort().join("")
    let sortB = original.toLowerCase().split("").sort().join("")
    return sortA === sortB
};