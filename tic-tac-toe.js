document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  //starting playing letter
  let Player = "X";
  squares.forEach(function (square) {
    square.classList.add("square");
    //makes each square clickable so it can be marked with an X or O
    square.addEventListener("click", function () {
        // Only allow marking the square if it is not already marked to prevent overriding
      if (!square.classList.contains("X") && !square.classList.contains("O")) {
        square.textContent = Player;
        // Mark the square with the current player's symbol
        square.classList.add(Player);
        // Check for a winner after each turn
        winner();
        // Switch player after each turn
        Player = Player === "X" ? "O" : "X";
      }
    });
    // Adds hover effect when a user mouse is over a square
    square.addEventListener("mouseover", function () {
        // Add hover effect only if has no mark/letter
        if (!square.classList.contains("X") && !square.classList.contains("O")) {
          square.classList.add("hover");
        }
    });
    // Remove hover effect when the mouse leaves the square
    square.addEventListener("mouseout", function () {
        square.classList.remove("hover");
    });
    });

    //game reset
    const reset = document.querySelector(".btn");

    // Restarts the game when clicked
    reset.addEventListener("click", function () {
      // Clear all squares
      squares.forEach(function (square) {
        // Remove X and O from each square
        square.textContent = "";
        // Remove classes from each square
        square.classList.remove("X", "O", "hover");
      });
      // Reset status message
      const status = document.getElementById("status");
      // Set status to indicate it's X's turn
      status.textContent = `Player ${currentPlayer}'s turn`;
;
      // Remove winning message styling
      status.classList.remove("you-won");
    });

  function winner (){
    // winning combos
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winning) {
    
      const status = document.getElementById("status");
      const [a, b, c] = combination;
      // Checks if X won the game
      if (squares[a].classList.contains("X") && squares[b].classList.contains("X") && squares[c].classList.contains("X")) {
        // Declare X as the winner
        status.textContent = "Congratulations! X is the Winner!";
        // Add class to style the winning message
        status.classList.add("you-won");
        return;
      }
      // Check for O won the game
      if (squares[a].classList.contains("O") && squares[b].classList.contains("O") && squares[c].classList.contains("O")) {
        // Declare O as the winner
        status.textContent = "Congratulations! O is the Winner!";
        // Add class to style the winning message
        status.classList.add("you-won");
        return;
      }
    }

  }
});
