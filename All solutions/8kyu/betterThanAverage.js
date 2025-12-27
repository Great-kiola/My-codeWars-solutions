/*
    In this kata, we need to
    check if your point is better than the class avarage
*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here

    let classSum = classPoints.reduce((a, b) => a + b, 0) + yourPoints
    let classTotal = classPoints.length + 1
    let classAverage = classSum / classTotal

    return yourPoints > classAverage ? true : false

    // Better Method
    // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

}