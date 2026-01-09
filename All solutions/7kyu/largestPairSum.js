/*
    In this kata we are asked to find the
    largest pair sum in the sequence.

    I.e: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
*/

function largestPairSum(numbers) {
    // numbers.sort((a, b) => a - b)
    // let lastVal = numbers[numbers.length - 1]
    // let valBef = numbers[numbers.length - 2]
    // return valBef + lastVal

    // Other Way
    numbers.sort((a,b) => b - a)
    return numbers[0] + numbers[1]

}


console.log(largestPairSum([10, 14, 2, 23, 19]))