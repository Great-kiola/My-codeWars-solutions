

function check(a, x) {
    // your code here

    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return `the value is in the array ${true}`
        }
    }

    // Best method
    //   return a.includes(x)

}

console.log((check([66, 101], 66)))