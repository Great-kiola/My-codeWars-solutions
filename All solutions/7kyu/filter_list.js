/*
    In this kata you will create a function
    that takes a list of non-negative integers and strings
    and returns a new list with the strings filtered out.
*/


function filter_list(l) {
    return l.filter((e) => typeof e === "number")
}


console.log(filter_list([1,'a','b',0,15]))


let newArr = [1,3,4,5,6,7]
newArr.length = 0

console.log(newArr.length)
console.log(newArr)


