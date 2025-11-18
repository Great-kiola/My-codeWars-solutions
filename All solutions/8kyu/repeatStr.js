function repeatStr(n, s) {
    let str = "";

    for (let i = 0; i <= n; i++) {
        str += s
        // str = str + s
    }
    return str;

    // Second method
    // return s.repeat(n)
}

console.log(repeatStr(3, "Hello"));
console.log("     ")
