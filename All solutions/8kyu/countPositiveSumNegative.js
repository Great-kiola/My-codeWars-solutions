function countPositivesSumNegatives(input) {

    if (input == null || input.length === 0){
      return []
    }
  
    const positives = input.filter((e) => e > 0).length
    const negatives = input.filter((f) => f < 0).reduce((a, b) => a + b, 0)
    
    return [positives, negatives]
}