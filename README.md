🎮 Project Name: Tic Tac Toe Game
Just completed a fun front-end project: Tic Tac Toe Game with a sleek dark UI!
Built entirely using HTML, CSS, and vanilla JavaScript, this project includes:

🎯 Interactive 3x3 grid game

👥 Two-player turn system

✅ Win and tie detection logic

🌑 Clean dark mode UI for a modern look

🔄 Reset button for replaying games

This was a great hands-on experience in DOM manipulation, event handling, and responsive styling.

Would love your feedback and suggestions!
🧠 Working/Logic Explained:
Game Setup:
The board is a 3x3 grid (div elements with class .box).

Two players take turns to play – Player X and Player O.

initGame() function sets up a fresh game: clears the grid, resets turns, and hides the "New Game" button.

Turns:
The currentPlayer variable keeps track of whose turn it is.

Clicking on a box triggers the handleClick(index) function.

If a box is empty, it’s filled with X or O (whichever player's turn it is), and that box is disabled.

Switching Turns:
After each move, the swapTurn() function changes the current player.

Game Over Detection:
The checkGameOver() function:

Checks all 8 winning combinations (rows, columns, diagonals).

If a player has the same symbol in a winning position, they are declared the winner.

If all 9 boxes are filled without a winner, the game is a draw.

UI Feedback:
The winning boxes turn green using the .win class.

The game status is shown in the .game-info element.

A New Game button appears once a win or draw is detected.

Restarting:
Clicking "New Game" resets everything via initGame().

🛠️ Technologies Used:
HTML: To structure the game board and layout.

CSS: To style the grid, animations, and responsive look.

JavaScript​: To control the game logic and interactivity.
🔗 Deployed on GitHub Pages (https://github.com/meet-2621/-Tic-Tac-Toe-Game)
#WebDevelopment #JavaScript #CSS #HTML #TicTacToe #FrontendDeveloper #Programming #DarkMode #MiniProjects #GameDevelopment #100DaysOfCode #UIDesign
