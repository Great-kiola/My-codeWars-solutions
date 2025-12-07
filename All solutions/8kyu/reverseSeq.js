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


var reverseString = function (s) {

    let l = 0
    let r = s.length - 1
    while (l <= r) {
        let a = s[l]
        s[l] = s[r]
        s[r] = a
        l++
        r--
    }
    return s
};

var reverseString = function (s) {
    let long = s.length - 1;
    
    for (let i = 0; i < (long / 2); i++) {
        let temp = s[i];
        s[i] = s[long - i];
        s[long - i] = temp;
    }
};