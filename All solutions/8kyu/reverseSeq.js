/*
    in this kata we are asked to
    Build a function that returns an array of integers from n to 1 where n>0.
    Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    let y = []
    for (let i = 1; i <= n; i++) {
        y.push(i)
    };

    return y.reverse()

    // Best method to reverse an array
    // let arr = [];
    // for (let i = n; i > 0; i--) {
    //     arr.push(i);
    // } return arr;
}