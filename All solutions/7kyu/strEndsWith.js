/*
    In this kata we are asked to 
    Complete the solution so that
    it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
    Inputs: "abc", "bc" Output: true
*/

function solution(str, ending) {

    if (ending.length > str.length) return false

    for (let i = 0; i < ending.length; i++) {
        if (str[str.length - ending.length + i] !== ending[i]) {
            return false
        }
    }
    return true

    // Best Method
    // return str.endsWith(ending);

}

