let pscore = 0
let cscore = 0

let scorediv = document.querySelector(".score")
let resultdiv = document.querySelector(".outcome")

function update(winner) {
  if (winner == 0) {
    return
  }
  if (winner == -1) {
    cscore += 1
  }
  if (winner == 1) {
    pscore += 1
  }
  if (cscore == 5 || pscore == 5) {
    resultdiv.textContent = (cscore == 5) ? "Computer wins" : "Player wins"
  }

  scorediv.textContent = "Player score: " + pscore + ". Computer Score: " + cscore
}
function playRound(ps) {
  let cs = computerPlay();
  if (ps.toLowerCase() == cs.toLowerCase()) {
    update(0)
    return "Tie"
  }
  if (ps.toLowerCase() == "rock" && cs.toLowerCase() == "scissors") {
    update(1)
    return "You win. Rock beats Scissors."
  }
  if (cs.toLowerCase() == "rock" && ps.toLowerCase() == "scissors") {
    update(-1)
    return "You lose. Rock beats Scissors."
  }
  if (cs.toLowerCase() == "rock" && ps.toLowerCase() == "paper") {
    update(1)
    return "You win. Paper beats rock."
  }
  if (ps.toLowerCase() == "rock" && cs.toLowerCase() == "paper") {
    update(-1)
    return "You lose. Paper beats rock."
  }
  if (ps.toLowerCase() == "scissors" && cs.toLowerCase() == "paper") {
    update(1)
    return "You win. Scissors beats paper."
  }
  if (cs.toLowerCase() == "scissors" && ps.toLowerCase() == "paper") {
    update(-1)
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

let rb = document.querySelector(".rb")
let pb = document.querySelector(".pb")
let sb = document.querySelector(".sb")

rb.addEventListener("click", () => { playRound("Rock") })
pb.addEventListener("click", () => { playRound("Paper") })
sb.addEventListener("click", () => { playRound("Scissors") })
