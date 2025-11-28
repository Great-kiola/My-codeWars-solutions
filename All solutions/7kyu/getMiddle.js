// function getMiddle(s){
//   const n = s.length;
//   return n % 2 === 0 ? s[n/2 - 1] + s[n/2] : s[Math.floor(n/2)];
// }

function getMiddle(s) {

    let n = s.length
    return n%2 === 0 ? s[n/2-1]+s[n/2]:s[Math.floor[n/2]]
}

console.log(getMiddle("Test"))