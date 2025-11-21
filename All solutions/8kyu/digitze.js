/*
    In this kata we are given a non-negative number and asked
     to return the digits of this number within an array in reverse order. 
*/

function digitize(n) {
    // let newStr = n.toString()
    
    // const splited = newStr.split("").reverse()
    // return splited.map((e) => Number(e))


    // Best Method
    return String(n).split('').map(Number).reverse()

    
}