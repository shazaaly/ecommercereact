const rps = (p1, p2) => {
  let winner = null;

  switch (p1) {
    case "rock":
      if (p2 === "scissors") {
        winner = 1

      } else if (p2 === "paper") {
        winner = 1

      }
      break;
    case "paper":
      if (p2 === "scissors") {
        winner = 2

      } else if (p2 === "rock") {
        winner = 1

      }
      break;
    case "scissors":
      if (p2 === "rock") {
        winner = 2

      } else if (p2 === "paper") {
        winner = 1

      }
      if (winner !== null) {
        return "Player" + winner + "won!"

      }


      return "Draw!"



  }
}