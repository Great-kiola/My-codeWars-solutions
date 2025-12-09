/*
    In this kata we are asked to Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase
    in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
    For example: "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
*/


String.prototype.toAlternatingCase = function () {
    // Define your method here :)

    let newWord = []
    let splited = this.split('')

    for (let i = 0; i < splited.length; i++) {
        if (splited[i] === splited[i].toLowerCase()) {
            newWord.push(splited[i].toUpperCase())
        } else if (splited[i] === splited[i].toUpperCase()) {
            newWord.push(splited[i].toLowerCase())
        }
    }

    return newWord.join("")

    // Best Method
    // return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')

}