/*
    In this kata we are asked to
    write a function which returns the time since midnight in milliseconds.
 */

function past(h, m, s) {

    let hoursInMs = h * 60 * 60 * 1000;
    let minutesInMs = m * 60 * 1000
    let secondsInMs = s * 1000

    return hoursInMs + minutesInMs + secondsInMs;

    // Best Practice
    // return ((h*3600)+(m*60)+s)*1000;


}