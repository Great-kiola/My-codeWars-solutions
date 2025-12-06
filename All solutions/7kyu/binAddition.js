/*
    In this kata, we are asked to 
    Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
    The binary number returned should be a string.

    i.e 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
*/

function addBinary(a, b) {
    // return (a + b).toString(2)

    // Solution that doesnt use toString()
    var sum = a + b;
    var binary = [];

    var x = 0, y = 0;

    y = sum;
    while (y > 1) {
        x = y % 2;
        y = Math.floor(y / 2);

        binary.push(x);
    };

    binary.push(y);
    return binary.reverse().join("");
}


console.log(addBinary(5,3))