/*
    In this kata, you want to square the numbers in an array
    and sum all the squares.
*/

function squareSum(numbers){
  return numbers.reduce((sum, n) => (n*n) + sum, 0 )
}