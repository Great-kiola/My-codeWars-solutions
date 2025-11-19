/*
  In this kata you are asked to count the number of positive value in an array
  and sum the negatives, then add both the positive and negative to an array

  condition
  If the array is null or empty it should return and empty array
*/

function countPositivesSumNegatives(input) {

  // Check if the array is null or empty first
  if (input == null || input.length === 0) {
    return []
  }

  // If not filter out the positive value
  const positives = input.filter((e) => e > 0).length
  // filter out the negative value and perform the sum of the negative
  const negatives = input.filter((f) => f < 0).reduce((a, b) => a + b, 0)

  // return an array of both the positive and negative
  return [positives, negatives]
}