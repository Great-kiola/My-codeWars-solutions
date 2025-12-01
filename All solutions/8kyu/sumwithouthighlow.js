/*
    In this kata we are asked to sum array without the highest and lowest value
    ie [1,2,3,5] == [2+3 = 5]
*/

function sumArray(array) {
  
  if (array == null || array.length <= 2){
    return 0;
  }
  
  let indexmin = array.indexOf(Math.min(...array))
  let removeMin = array.splice(indexmin, 1);
  
  let indexmax = array.indexOf(Math.max(...array))
  let removeMax = array.splice(indexmax, 1);
  
  return array.reduce((a,b) => a + b, 0)  
}