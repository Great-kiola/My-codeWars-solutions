/*
 in this kata, we are asked to
 Create a function with two arguments that will return an array of the first n multiples of x.
 i.e x = 2, n = 5  --> [2,4,6,8,10]
*/

function countBy(x, n) {
  let z = [];
  
  for (let i = 1; i <= n; i++){
    z.push(i * x)
  }

  return z;
}