function playRound(ps, cs) {
  console.log(ps, cs)
  if (ps.toLowerCase() == cs.toLowerCase()) {
    return "Tie"
  }
  if (ps.toLowerCase() == "rock" && cs.toLowerCase() == "scissors") {
    return "You win. Rock beats Scissors."
  }
  if (cs.toLowerCase() == "rock" && ps.toLowerCase() == "scissors") {
    return "You lose. Rock beats Scissors."
  }
  if (cs.toLowerCase() == "rock" && ps.toLowerCase() == "paper") {
    return "You win. Paper beats rock."
  }
  if (ps.toLowerCase() == "rock" && cs.toLowerCase() == "paper") {
    return "You lose. Paper beats rock."
  }
  if (ps.toLowerCase() == "scissors" && cs.toLowerCase() == "paper") {
    return "You win. Scissors beats paper."
  }
  if (cs.toLowerCase() == "scissors" && ps.toLowerCase() == "paper") {
    return "You lose. Scissors beats paper."
  }
  return "error"
}

function computerPlay() {
  let randInt = Math.floor(Math.random() * 3)
  console.log(randInt)
  if (randInt == 0) {
    return "Rock"
  }
  if (randInt == 1) {
    return "Paper"
  }
  if (randInt == 2) {
    return "Scissors"
  }

}




function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
  }
}
game()
