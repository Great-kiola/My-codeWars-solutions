function isitpalindrome(x){
    let str = "";
    for(let i = x.length - 1; i >= 0; i--){
        str += x[i]
    }

    return str.toLowerCase() === x.toLowerCase() ? true : false
    // console.log(str)
    
}

console.log(isitpalindrome("Mom"))

