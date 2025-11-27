/*
    In this kata, you are asked to square every digit of a number and concatenate them.
    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
*/

function squareDigits(num) {
    let conv = num.toString()

    let newArr = conv.split("").join("")
    let finish = []

    for (let i = 0; i < newArr.length; i++) {
        let form = newArr[i] ** 2
        finish.push(form)
    }

    return Number(finish.join(""))

    // Best Method
    // return +num.toString().split('').map(i => i*i).join('');

}