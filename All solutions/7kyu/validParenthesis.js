/*
    In this kata we are asked to Write a function that takes a
    string of parentheses, and determines if the order of the parentheses is
    valid. The function should return true if the string is valid, and false if it's invalid.

    i.e: "()" => true , "(())((()())())"  =>  true
*/

function validParentheses(parenStr) {
    let newArr = []

    for (let i = 0; i < parenStr.length; i++) {
        if (parenStr[i] == "(") {
            newArr.push(")")
        } else if (parenStr[i] == "{") {
            newArr.push("}")
        } else if (parenStr[i] == "[") {
            newArr.push("]")
        } else if (parenStr[i] !== newArr.pop()) {
            return false
        }
    }

    // return newArr.length == 0
}