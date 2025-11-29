/*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
    Example: "Dermatoglyphics" --> true
*/

// function isIsogram(str) {
//     let toLower = str.toLowerCase()

//     let container = '';
//     for (let i = 0; i < toLower.length; i++) {
//         if (container.includes(toLower[i])) {
//             return false
//         } else {
//             container += toLower[i]
//         }
//     }
//     return true

//     // Best Method
//     // return new Set(str.toUpperCase()).size == str.length;

// }


let removeDuplicates = (x) => {

    
    return [...new Set(x)]
}


console.log(removeDuplicates([1,2,3,4,3,2]))