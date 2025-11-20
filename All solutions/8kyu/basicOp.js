function basicOp(operation, value1, value2) {

    //   if (operation == "+"){
    //     return value1 + value2
    //   } else if(operation == "/"){
    //     return value1 / value2
    //   } else if(operation == "*"){
    //     return value1 * value2
    //   } else if(operation == "-"){
    //     return value1 - value2
    //   } else {
    //     return "Operation invalid"
    //   }

    // return operation == "+" ? value1 + value2 :
    //     operation == "-" ? value1 - value2 :
    //         operation == "/" ? value1 / value2 :
    //             operation == "*" ? value1 * value2 : "Operation Invalid"

    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "/":
            return value1 / value2;
        case "*":
            return value1 * value2;
        default:
            return "Operation is invalid";
    }
}

console.log(basicOp("+", 2, 3));
console.log(basicOp("-", 2, 3));
console.log(basicOp("/", 5, 5));
