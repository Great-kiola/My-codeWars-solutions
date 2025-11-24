/*
    The task of this kata is to shorten the code from if statements
    to 137 characters max
*/

function describeAge(age) {
    let y = "You're a(n) "
    return y + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly");

    // can also be reduced further
    // return "You're a(n) "  + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly");

}