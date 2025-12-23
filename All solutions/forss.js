// difference between foreach, for of, and for in


let arr = [2,3,7,8,6]
let obj  = {
    fname: "ola",
    lname: "Kilaso"
}

/*
    in for loop and for in you get access to the index in the array or object,
    not the actual element
*/

// for loop:
// for (let i = arr.length -1 ; i >= 0; i--){
//     console.log(arr[i])
// }

// for in
// for (let q in arr){
//     console.log(q)

// }

/*
    In for each and for of 
*/

// for Each
arr.forEach((i) => {
    console.log(i)
    // console.log("index " + j)
    // console.log(`Index: ${i}`)
})

// for of
// for(let key of arr){
//     console.log(key)
// }