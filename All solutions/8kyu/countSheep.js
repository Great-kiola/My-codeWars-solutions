// var countSheep = function (num){
//   //your code here
// }

var countSheep = (num) => {
    
  if (num === 0){
    return "0"
  }
  
//   for (let i=1 ; i <= 3; i++){
//     console.log(num[i] + " sheep...")
//   } 

  let array = ""
  
  for (let i = 1; i <= num; i++) {
    array += i + " sheep..."
  }

  return array
  

}

console.log(countSheep(5))