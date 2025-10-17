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
});
