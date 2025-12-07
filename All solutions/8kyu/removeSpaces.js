/*
    In this kata i want to remove spaces from the string

    i.e "  hello world  " => "hello world"
    or "a good   example" => "a good example"

*/

function removeSpace(s){
    return s.split(" ").filter(str => str)
}


console.log(removeSpace("  hello world  ")) // Output "hello world"
console.log(removeSpace("a good   example")) // Output "hello world"
