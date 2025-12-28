/*
    In this kata we are asked to merge two array into one
    following specified criteria

    - The resulting array is sorted in ascending order.
    - Any duplicate values are removed, so each integer appears only once.
    - If both input arrays are empty, return an empty array.

    i.e :  [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2]
    let dupArr = new Set(newArr)
    return [...dupArr].sort((a, b) => a - b)

    //Best Method
    // return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));

}



function findMissing(x){
    let min = Math.min(...x)
    let max = Math.max(...x)

    let sort = x.sort((a,b) => a-b)

    for(let i = min; i < max; i++){
        for (let j =0 ; j<sort.length; j++){
            if (x[i] != sort[j]){
                return sort[j]
            }
        }
    }

    console.log(min, max)
}


console.log(findMissing([1,3,0]))