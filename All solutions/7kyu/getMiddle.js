/*
    You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

    i.e: "test" --> "es"
*/

// function getMiddle(s) {

//     let result = ""
//     let charArr = s.split("")
//     let n = charArr.length


//     if (n % 2 === 0) {
//         result += charArr[n / 2 - 1]
//         result += charArr[n / 2]
//         return result

//     } else {
//         result += charArr[Math.floor(n / 2)]
//         return result
//     }

//     // Best Method
//     // let n = s.length
//     // return n % 2 === 0 ? s[n / 2 - 1] + s[n / 2] : s[Math.floor(n / 2)]
// }

// console.log(getMiddle("Testy"))


var findMedianSortedArrays = function(nums1, nums2) {
    let sortedConcat = nums1.concat(nums2).sort((a,b) => a-b)
    let n = sortedConcat.length
    console.log(sortedConcat)
    console.log(n)

    let result = 0

    if (n % 2 == 0){
        result += sortedConcat[n /2 - 1]
        result += sortedConcat[n/2]
        return result / 2

    } else{
        result += sortedConcat[Math.floor(n/2)]
        return result
    }

};

console.log(findMedianSortedArrays([1,2,3,4,5] , [6,7,8,9,10,11,12,13,14,15,16,17]))