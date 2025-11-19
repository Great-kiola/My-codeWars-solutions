/*
    In this kata we are told to remove the spaces from string
*/

function noSpace(x) {

    // return x.split(" ").join("")

    // best Method
    // return x.replace(/\s/g, '');

    // clever
    return x.replaceAll(' ', '');

}