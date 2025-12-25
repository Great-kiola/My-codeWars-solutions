/*
    In this kata we are asked to find the sum of the squares of each item in an array
*/


function sumSquares(array) {
//   return array.map((n) => Math.pow(n, 2)).reduce((a,b) => a + b)

  // Other solution
  return array.reduce((a,b) => a + b * b)
}

