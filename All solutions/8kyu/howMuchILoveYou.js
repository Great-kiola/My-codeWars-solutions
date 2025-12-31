/*
    In this kata we are asked If there are more than 6 petals,
    you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
*/

function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];
    return phrases[(nbPetals - 1) % phrases.length]
}