/*
 In this kata, we are 
 given a string of space separated numbers, and have to return the highest and lowest number.
 Examples Input: "1 2 3 4 5"   =>  Output: "5 1"
*/

function highAndLow(numbers) {
    let removeSpaces = numbers.split(" ")
    let conv = removeSpaces.map((e) => Number(e))

    const sort = conv.sort((a, b) => a - b)
    
    let highest = sort[sort.length - 1].toString(),
    lowest = sort[0].toString()
    
    return `${highest} ${lowest}`

    // Best Method
    // numbers = numbers.split(' ');
    // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))