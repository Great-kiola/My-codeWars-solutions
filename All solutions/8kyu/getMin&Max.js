/**
 * Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
 * that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
 * Each function returns one number.
*/

var min = function(list){
  let min = list[0];
  
  for (let i=0; i <list.length; i++){
    if(list[i] < min){
      min = list[i];
    }
  }
  
  return min
}

var max = function(list){
  let max = list[0]
  
  for(let i=0; i<list.length; i++){
    if(list[i] > max){
      max = list[i]
    }
  }
  return max
}

// Best Method
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);