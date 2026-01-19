/*
    In this kata we are given a list of integers values,
    and we are asked to return the sum of the values; however,
    if the same integer value appears multiple times in the list,
    you can only count it once in your sum.
*/


// My solution
function uniqueSum(lst) {

    if (lst == 0) return null;

    let newSet = new Set(lst)
    let newArr = Array.from(newSet)

    return newArr.reduce((a, b) => a + b, 0)

    // Best Method
    // return [...new Set(lst)].reduce((a,b)=>a+b,null);


}