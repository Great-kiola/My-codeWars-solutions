function paperwork(n, m) {
    // return n < 0 || m < 0 ? 0 : n * m

    // Best Method
    return n > 0 && m > 0 ? n * m : 0

    // Using if-statement
    if (n <0 || m< 0){
        return 0
    } else {
        return n*m
    }

}