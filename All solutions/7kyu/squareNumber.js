/*
    In this kata
    Given an integral number, determine if it's a square number:
*/


var isSquare = function (n) {

    if (n >= 0) {
        
        if (/\d+\.\d+/.test(Math.sqrt(n))) {
            console.log(Math.sqrt(n))
            return false
        } else {
            return true;
        }

    } else {
        return false
    }


    // Best Method
    //   return Math.sqrt(n) % 1 === 0


}

