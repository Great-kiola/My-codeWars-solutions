/*
    In this kata we are given an array of integers,
    and we need to return a new array with each value doubled.
*/

function maps(x) {

    // let newArr = []
    // for (let i = 0; i < x.length; i++) {
    //     newArr.push(x[i] * 2)
    // }
    // return newArr;

    // Best Method
    return x.map(n => n * 2);


}