// var countSheep = function (num){
//   //your code here
// }

var countSheep = (num) => {

    if (num === 0) {
        return "0"
    }


    let array = []

    for (let i = 1; i <= num; i++) {
        array.push(i + " sheep...")
    }

    return array.join("")

    // Best method
    // let str = "";
    //   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    //   return str;

}

console.log(countSheep(5))