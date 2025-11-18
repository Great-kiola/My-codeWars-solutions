/* 
    In this Kata we are converting the sum of all the values in
    an arry to binary, any value that is not a number should be added as 0
*/

function arr2bin(arr) {

    // let sum = 0
    // let validArr = []

    // Looped through the array, and found the value that is a number in the array and pushed it to
    // valid arr
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] == 'number') {
    //         validArr.push(arr[i])
    //     }
    // }

    // validArr.forEach((x) => {
    //     sum += x
    // })

    // return sum.toString(2)

    // Best practice
    return arr.reduce((x, y) => x + (typeof y == "number" ? y : 0), 0).toString(2);


}