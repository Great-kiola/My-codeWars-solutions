// In this kata we are asked to translate american floor system to european system


function getRealFloor(n) {

    if (n <= 0) {
        return n
    } else if (n <= 12) {
        return n - 1
    } else {
        return n - 2
    }

}