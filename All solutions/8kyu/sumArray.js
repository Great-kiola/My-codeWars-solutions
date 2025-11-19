// Sum Array : sun 16 Nov 025
function sumArray(numbers) {
    // Variable to save all sums
    // let sum = 0;

    // for (let i = 0; i < numbers.length; i++){
    //     sum += numbers[i];
    // }
    // console.log(sum)

    // Second method
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumArray([1, 2, 3, 4]))



//   const positives = input.filter((e) => e >= 0).length
//   const negatives = input.filter((f) => f < 0).length