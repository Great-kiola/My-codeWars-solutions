/**
 * in this kata we are asked to
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * It should look like this: Sam Harris => S.H
 * 
 */


function abbrevName(name) {

    let nameSplit = name.split(" ")
    let firstinitial = nameSplit[0][0], secondinitial = nameSplit[1][0]
    console.log((firstinitial + "." + secondinitial).toUpperCase())

    // Best Method
    // var nameArray = name.split(" ");
    // return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

}

abbrevName("Sam Harris")
abbrevName("Jake paul")