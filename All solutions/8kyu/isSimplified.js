function ifSimplified() {

    let y = 5;
    //Instead of :

    // if (y = 5){
    //     return true
    // } else{
    //     return false
    // }

    // Use
    return y = 5 ? true : false
}

console.log(ifSimplified())