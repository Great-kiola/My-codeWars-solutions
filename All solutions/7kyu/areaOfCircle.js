/*
    In this kata we are asked to find the area of a circle,
    if the radius of the circle is negative it should throw new error
*/

function circleArea(radius) {
  
  if(radius <= 0){
    throw new Error("Error")
  } else{
    return Math.PI * (radius **2);

    // We can also find the power using
    // return Math.pow(radius, 2) * Math.PI
  }
}