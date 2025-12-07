/*
    Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
    The order of the sequence has to stay the same.
    Examples: [1, 1, 2] -> [1, 2]
*/

function distinct(a) {
    return [...new Set(a)];

    // Best Method
    // return a.reduce((a, c) => a.includes(c) ? a : [...a, c], []);
}