/* 
  In this kata we are asked to check if a crew if worth looting if the crew weight
  is more than the draft and each crew adds 1.5 unit to the draft

  since this is a class we can use 'this' to get the value of the function
*/


class Ship {

  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  /*
    created a method that checks the crew then removes it from the ships draft if the
    draft is still more than 20 then the ship is worth looting
  */

  // isWorthIt (){
  //   let checkCrew = this.draft - (this.crew * 1.5)    
  //   let newCheck = checkCrew > 20
  //   console.log(newCheck)
    
  //   return checkCrew > 20     
  // }

  // best Practice
  isWorthIt (){
    return this.draft - (this.crew * 1.5) > 20        
  }

}

const titanic = new Ship(50, 15)
console.log(titanic.isWorthIt())