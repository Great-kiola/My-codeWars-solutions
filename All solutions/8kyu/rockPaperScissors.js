/*
    In this kata we play a game of rock,paper,scissors :)
*/

const rps = (p1, p2) => {  
  
//   if (p1 == "rock" && p2 == "scissors"){
//     return "Player 1 won!"
//   } else if (p2 == "rock" && p1 == "scissors"){
//     return "Player 2 won!"
//   } else if (p1 == "scissors" && p2 == "paper"){
//     return "Player 1 won!"
//   } else if (p2 == "scissors" && p1 == "paper"){
//     return "Player 2 won!"
//   } else if (p1 == "paper" && p2 == "rock") {
//     return "Player 1 won!"
//   } else if (p2 == "paper" && p1 == "rock"){
//     return "Player 2 won!"
//   } else {
//     return "Draw!"
//   }

    return p1 == p2 ? "Draw!":

    p1 == "rock" && p2 == "scissors" ? "Player 1 won!" :
    p1 == "scissors" && p2 == "paper" ? "Player 1 won!":
    p1 == "paper" && p2 == "rock" ? "Player 1 won!" :
    "Player 2 won!"

  
};

console.log(rps("rock", "scissors"))