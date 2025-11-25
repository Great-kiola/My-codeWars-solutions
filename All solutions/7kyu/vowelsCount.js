/*
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  
  let sum = ""
  let convertCase = str.toLowerCase()

  for (let i=0; i<str.length; i++){

    if(convertCase[i] == "a" || convertCase[i] == "e" || convertCase[i] == "i" || convertCase[i] == "o" || convertCase[i] == "u" ){
      sum += str[i]
    }
  }
  return sum.length;

  // Best Method
  // return (str.match(/[aeiou]/ig)||[]).length;

}

// Another Function
// function vowelCount(str){

//     let sum = 0
//     let vowels = ["a", "e", "i", "o", "u"]

//     for(let i=0; i<str.length; i++){
//         for (let j=0; j<vowels.length; j++){
//             if(str[i] === vowels[j]){
//                 sum++
//             }
//         }
//     }
//     return sum
// }

console.log(getCount("string"))