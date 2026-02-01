/*
    In this kata we are asked to create a function which returns a function that
    always adds n too any number
*/


function add(n){
    return function(x){
        return x + n
    }
}