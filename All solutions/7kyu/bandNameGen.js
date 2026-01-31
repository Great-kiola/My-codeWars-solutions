/*  
    In this kata we are asked to generate band name from string inputs
*/

// My method
function bandNameGenerator(str) {
    if (str.at(0) === str.at(-1)) {
        return `${str.charAt(0).toUpperCase() + str.slice(1)}${str.slice(1)}`
    } else {
        return `The ${str.charAt(0).toUpperCase() + str.slice(1)}`
    }
}
