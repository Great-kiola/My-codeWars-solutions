/*
    In this kata, we are asked to find the summation of every number from
    1 to num
*/

var summation = function (num) {

    // First we create a variable that holds the sum of all the numbers
    let sum = 0

    // then create a loop from one to the number provided.
    for (let i = 0; i <= num; i++) {
        // add the values to sum
        sum += i
    }
    // return sum of values
    return sum
}