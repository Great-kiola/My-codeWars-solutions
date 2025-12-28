/*
    In this kata, we are asked to reverse it and omit all non-alphabetic characters.
    i.e : For str = "ultr53o?n", the output should be "nortlu".
*/


function reverseLetter(str) {

    let newStr = str.replaceAll(/[\W_ 0-9]/g, "")
    return newStr.split("").reverse().join("")

    // Best Method
    // return str.match(/[a-z]/g).reverse().join('');
}