/*
    In this kata we are asked to 
    write a function that finds the sum of all its arguments.

    i.e: sum(1, 2, 3) // => 6
*/


function sum() {
    let newArr = []
    newArr.push(...arguments)
    return newArr.reduce((a, b) => a + b, 0)
}