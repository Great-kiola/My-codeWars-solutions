


function getSum(a, b) {
    let minimum
    let max

    let sum = 0

    if (a < b) {
        minimum = a
        max = b
    } else {
        max = a
        minimum = b
    }

    for (let i = minimum; i <= max; i++) {
        console.log(i)
        sum += i
    }

    return sum

    // Best Method
    // let min = Math.min(a, b),
    //     max = Math.max(a, b);
    // return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(2, 3)) 