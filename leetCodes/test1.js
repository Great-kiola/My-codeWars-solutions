// learning Substrings


let aString = "name"

const getSubstring = function (x) {

    while (x.length !== 0) {
        return x.substring(0, x.length - 1)
    }
}
console.log(getSubstring(aString))




//
function outLength(x) {

    let getLength = x.map(x => String(x))
    let count = 0
    let vals = []

    for (let i = 0; i < getLength.length; i++) {
        if (getLength[i].length % 2 == 0) {
            count++
            vals.push(getLength[i])
        }
    }
    return count, vals
}

console.log(outLength([12, 455]))