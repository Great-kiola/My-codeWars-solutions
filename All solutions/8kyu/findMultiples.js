/*
    In this kata we are asked to
    write a function that takes two integers; 
    n and limit; and returns a list of the multiples of n up to and possibly including limit.

    ie n = 2; limit = 6 --> [2, 4, 6]
*/

function findMultiples(integer, limit) {
    
    let newArr = []
    for (let i = 1; i <= limit; i++) {
        newArr.push(i * integer)
    }
    return newArr.filter(e => e <= limit)

    // Best Method
    // let result = []

    // for (let i = int; i <= limit; i += int)
    //     result.push(i)

    // return result
}
