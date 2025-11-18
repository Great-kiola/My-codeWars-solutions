function isitpalindrome(x){
    // let str = "";

    /* 
        First we loop the string backwards
        then add the looped to a new string variable
    */
    // for(let i = x.length - 1; i >= 0; i--){
    //     str += x[i]
    // }

    // then compare the lowercase version of the new string with the previous string
    // return str.toLowerCase() === x.toLowerCase() ? true : false
    
    
    //* Best Method
    return x.split(" ").reverse().join().toLowerCase() === x.toLowerCase() ? true : false
}

console.log(isitpalindrome("Mom"))

