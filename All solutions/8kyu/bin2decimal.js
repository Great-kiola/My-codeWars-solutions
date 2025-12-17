/*
    In this kata we are asked to convert a binary to decimal
*/


function binToDec(bin) {
    return parseInt(bin, 2)


    // Solution that didnt use parseInt
    // let arr = bin.split('').reverse();
    // let num = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === '1' || arr[i] === '0') {
    //         num += arr[i] * Math.pow(2, i);
    //     } else {
    //         throw 'Not bin num'
    //     }
    // }
    // return num
}

