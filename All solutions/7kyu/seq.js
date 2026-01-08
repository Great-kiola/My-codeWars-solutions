/*
    In this kata we are asked to to generate a function
    that computes the series starting from 0 and ending until the given number.
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {

    let sum = 0
    let seq = 0
    
    if(count == 0){
      return `${count}=0`
    } else if(count < 0){
      return `${count}<0`
    } else {
      for(let i=1; i <= count; i++){
        seq += `+${i}`
        sum += i
      }
      
      return `${seq} = ${sum}`
    }
  };

  return SequenceSum;

})();