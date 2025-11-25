/*
    In this kata, we are asked to find the needle in an haystack array
    the array would have needle in it and we need to return the position of
    the needle in the array
*/

function findNeedle(haystack) {
  
  for (let i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${i}`
    }
  }x
}