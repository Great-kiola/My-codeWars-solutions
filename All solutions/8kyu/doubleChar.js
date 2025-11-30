/*
    In this kata, we are asked to return the double of all the char in a
    string. I.e : ab => aabb
*/

function doubleChar(str) {  
  let newString = ''
  
  for(el of str){

    newString += el + el // This method wont be sustainable if we need to repeat multiple times
    // newString += el.repeat(2)

  }
  
  return newString
}
