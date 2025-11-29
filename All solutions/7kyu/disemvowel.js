/*
    In this kata, we are asked to
    write a function that takes a string and return a new string with all vowels removed.
    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/


function disemvowel(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let wordsplit = str.split(""), wordString = "";

    for (let i = 0; i < wordsplit.length; i++) {
        if (!vowels.includes(wordsplit[i])) {
            wordString += wordsplit[i]
        }
    }

    return wordString

    // Best Method
    // return str.replace(/[aeiou]/gi, '');
}
