/*
    In this kata we are 
    given a mixed array of number and string representations of integers,
    add up the non-string integers and subtract the total of the string integers.

    Return as a number.
*/

function divCon(x) {
    let newArr = x.filter(x => typeof x === 'number').reduce((a, b) => a + b, 0)
    let stringArr = x.filter(x => typeof x === 'string').map(x => +x).reduce((a, b) => a + b, 0)
    return newArr - stringArr

    // Best Method
    // return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)

}