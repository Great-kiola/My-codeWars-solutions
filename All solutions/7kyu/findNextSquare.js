/*
    In this kata we are asked to finds the next integral perfect square
    after the one passed as a parameter. Recall that an integral perfect
    square is an integer n such that sqrt(n) is also an integer.

    i.e 121 --> 144
    625 --> 676
    114 --> -1  #  because 114 is not a perfect square
*/


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise  
    let nxtSq = Math.sqrt(sq) + 1

    if (Number.isInteger(nxtSq)) {
        return Math.pow(nxtSq, 2)
    } else {
        return -1
    }
    // Best Method
    // return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}