/*
    In this kata, we are asked to sum the differences between consecutive pairs in the array in descending order.
    i.e: In descending order: [10, 2, 1]
    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/


function sumOfDifferences(arr) {
    let sum = 0
    if (arr.length <= 1) {
        return 0
    }

    let sorted = arr.sort((a, b) => b - a)
    for (let i = 0; i < sorted.length - 1; i++) {
        sum += sorted[i] - sorted[i + 1]
    }
    return sum;
}