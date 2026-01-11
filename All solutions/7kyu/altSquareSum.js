/*
    In this kata we are asked to Complete the function that takes an array of integers as input
    and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the
    sum of the rest of the elements at odd position.

    [11, 12, 13, 14, 15]  -->  379
    # 1.  2.  3.  4.  5.  position

    11 + 12^2 + 13 + 14^2 + 15 = 379
*/

function alternateSqSum(arr) {
    // happy coding :D
    let evenpos = []
    let oddpos = []

    if (arr.length == 0) return 0

    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 == 0) {
            evenpos.push(arr[i] ** 2)
        } else {
            oddpos.push(arr[i])
        }
    }

    return evenpos.reduce((a, b) => a + b) + oddpos.reduce((a, b) => a + b)

    // Best method
    // arr.reduce((pre, val, idx) => pre + (idx % 2 ? val ** 2 : val), 0);

}


function findNumber(arr, k){
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])

        if(arr[i] === k){
            return "YES"
        }
    }

    return "NO"
}

console.log(findNumber([1,2,3,5,6] , 12))