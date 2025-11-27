/*
    In this kata we are asked to
    Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
*/

function greet(name, owner) {
    
    return name == owner ? "Hello boss" : "Hello guest"

    // Best Method
    const greetings = {

       [true] :'Hello boss',
       [false]:'Hello guest',
    }

    return greetings[name === owner]
}