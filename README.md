# Bato-Bato Pick!

the battle of the gut feeling between You and the Computer: an interactive Rock, Paper, and Scissors web game.

## Features

    1. Selection Button
        The player pick their weapon by clicking any of the 'Rock', 'Paper' and 'Scissors' button.
    2. Score Board
        Since it is a 'First to get 5 points' type of game, the player can track their current scores.
        I added the tracking of the number of rounds to make it more interactive. For example, my friends and I will decide to beat the computer with the lowest number of rounds possible.
    3. Game Status
        This announces who is the winner for the round. The little description below it also tells the player what was the Computer's pick for that specific round.

## Process & Stack

    1. JavaScript
        The purpose of this project was mainly to apply the basics of Javascript. Initially, this was a console-driven program, where everything --- from the input to the displaying of winners --- happens in the console. So, I first created the game logic and made sure it runs fine in the console.

        Concepts I Applied
            - Conditional Statements (if-else & switch-case)
            - Function declarations, definitions, and calls
            - Loops

    2. HTML & CSS
        Built the UI. These are used to make the game more interactive. I also tried to make the output adaptable to different window sizes (a part of styling where I'm really having trouble with), but that output was the best that I can do for now.

        Concepts I Applied
            - Grid
            - CSS FUNCTIONS like clamp(), min(), minmax(), repeat()
            - z-index and positioning

    3. JavaScript (DOM Manipulation & Events)
        After adding the UI, linking it to JavaScript was the hardest challenge in this project. I had to remove most of my code for the game logic in the first part. One key takeaway for this part was that loops (while, for, or do-while loop) don't really work for DOM! The webpage crashes everytime I try to use a loop, lol.

        Concepts I Applied
            - Selectors
            - Events
            - Manipulating Classes and Values

## Key Takeaways

    1. Breaking down the process into smaller parts is really a game changer.
    2. Learned some important concepts of CSS. I'm lowkey getting the hang of it, still hate it tho.
    3. DOM Manipulation and Event Listeners! The highlight for me. I now know how the linking of HTML and the logic works. Still confusing, had to watch a bunch of video tutorials, but I'll soon get it.