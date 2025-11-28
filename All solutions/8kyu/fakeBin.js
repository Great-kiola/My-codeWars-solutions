/*
    In this kata, we are
    Given a string of digits, you should replace any digit below 5 with '0'
    and any digit 5 and above with '1'. Return the resulting string.

    Example: '45385593107843568', '01011110001100111
*/

function fakeBin(x) {
    // return x.split("").map((e) => +e < 5 ? 0 : 1).join("")

    // Using for loop
    var newStr = "";
    
    for (var i = 0; i < str.length; i++) {
        if (Number(str[i]) >= 5) {
            newStr += "1"
        }
        else {
            newStr += "0";
        }
    }
    return newStr;
}