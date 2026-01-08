/*
    In this kata we are asked to get the sum of all even numbers in an array
*/

function sumEvenNumbers(input) {
    if (input.length === 0) {
        return 0
    }

    return input.filter(x => x % 2 == 0).reduce((a, c) => a + c, 0)
}