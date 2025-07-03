Rock Paper Scissors Game
This is a browser-based Rock Paper Scissors game developed using HTML, CSS, and JavaScript. It supports both a classic play mode and an alternative "Guess the Bot" mode. The game includes autoplay functionality, persistent score tracking using localStorage, and a history panel for recent moves or guesses.

Live Demo
Play here: pandeyx8.github.io/rock-paper-scissor-game

Features
Dual Modes:

Play Against Bot – Standard gameplay where the user competes against the computer.

Guess the Bot – User predicts the bot’s move instead of selecting their own.

Autoplay Functionality – Automatically plays a move every second in play mode.

Persistent Score Tracking – Saves wins, losses, ties (or correct/incorrect guesses) using localStorage.

Recent History Panel – Displays the last 3 moves or guesses depending on the current mode.

Score Reset Option – Resets current scores and clears move history.

Responsive and Minimal UI – Simple, clean layout designed for clarity and usability.

Technologies Used
HTML – Structure and layout

CSS – Styling and responsive design

JavaScript – Game logic, mode switching, autoplay, and localStorage management

How to Use
Open the live demo in a web browser.

Choose either to play against the bot or guess its move using the toggle button.

Click on Rock, Paper, or Scissor to make a move or prediction.

Use the "Autoplay" button to run continuous moves.

Use "Reset Score" to clear progress and history.

Project Structure
bash
Copy
Edit
rock-paper-scissor-game/
-index.html          # Main HTML file
─ rps-auto.css       # Styling
─ rps-auto.js        # JavaScript logic
─ images/            # Move icons
 ─ rock-emoji.png
 ─ paper-emoji.png
 ─ scissor-emoji.png
Author
Priyanshu Pandey
This project was created as part of personal learning and practice in front-end development.
