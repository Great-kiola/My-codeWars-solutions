/*
    In this kata we are asked to validate a pin, to
    check if it contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.
    i.e: "1234"   -->  true
*/

function validatePIN(pin) {
    
    let regex4 = /^\d{4}$/g
    let regex6 = /^\d{6}$/g

    if (pin.length >= 4) {
        return pin.match(regex4) || pin.match(regex6) ? true : false
    } else {
        return false
    }
}