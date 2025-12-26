/*
    In this kata we are asked to
    find the additive inverse of all the values in an array i.e
    [1, 2, 4, -5, -6] => [-1, -2, -4, 5, 6]
*/


function inverse(array){
    return array.map((e) => -e)
}