/*
    In this kata we are asked If there are more than 6 petals,
    you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
*/

// function howMuchILoveYou(nbPetals) {
//     const phrases = [
//         "I love you",
//         "a little",
//         "a lot",
//         "passionately",
//         "madly",
//         "not at all",
//     ];
//     return phrases[(nbPetals - 1) % phrases.length]
// }


function findMissing(numbers){

    let actualSum = 0
    let expctedSum = 0

    for(nums of numbers){
        actualSum += nums
    }

    for(let i = 0; i <= numbers.length; i++){
        expctedSum += i
    }

    return expctedSum - actualSum
}

console.log(findMissing([1,3,0]))
// expectedSUM = 0 + 1 + 2 + 3 = 6 
// ActualSum = 0 + 1 + 3 = 4