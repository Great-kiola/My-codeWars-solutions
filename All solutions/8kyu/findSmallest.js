/*
    In this kata we are going through an array and
    finding the smallest value in the array
*/

function findSmallestInt(arr) {
    // return arr.reduce((a, b) => {return a < b ? a : b }, arr[0] );

    // Best Method
    return Math.min(...arr)
}

console.log(findSmallestInt([1,2,3,5]))