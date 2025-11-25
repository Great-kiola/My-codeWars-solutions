/*
    A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of
    powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
    Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
    Return true if yes, false otherwise :)
*/

function hero(bullets, dragons) {
    // Takes 2 bullet to kill a dragon
    let checkBullet = 2 * dragons
    return bullets >= checkBullet ? true : false

    // Best Method
    // Why this works, basically like what i did but
    // Comparison operators always return true or false so
    // i didnt have to put true or false.
    
    //   return bullets >= dragons * 2

}