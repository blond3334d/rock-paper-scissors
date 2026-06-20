# rock-paper-scissors (Part 1)
An interactive Rock, Paper, Scissors game played only in the console.

# technologies used
- JavaScript: This mainly used to practice and apply my basic knowledge in JavaScript, as well as to enhance my problem solving skill.
- HTML (soon): will add a GUI soon
- CSS (soon): will add a GUI soon

# features
- For now, the main feature of this program is the user's ability to enter their choice (rock, paper, scissors). Also the computer's ability to generate a random number between 1-3, where each number corresponds to Rock, Paper, and Scissors.

# process
1. Made a function where I make a variable generate a random number between 1-3 using Math.random. Then, in a switch-case statement, I set value of another variable to strings 'rock', 'paper', and 'scissors' based on the generated number.
2. Made another function that prompts the user to pick (input) their fighter (rock, paper, scissors).
3. Created the logic to play the game once. I again used a switch-case statement (computer's choice) as a basis for comparison to the user's choice.
    - everytime the computer or the user wins, I increment their scores and prints out the winner.
4. Lastly, I created the logic to run the game's function for 5 rounds.
    - I used a do-while loop to do this, where the condition is run the game as long as the gameRounds is not equal to 5.
    - In this function, I also print out the total scores of each player, and displays the overall winner.
