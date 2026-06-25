# Bato-Bato Pick! 🥊

the battle of the gut feeling between You and the Computer: an interactive Rock, Paper, and Scissors web game.

## Features

* **Selection Buttons:** The player picks their weapon by clicking any of the 'Rock', 'Paper', and 'Scissors' buttons.
* **Scoreboard:** Since it is a 'First to get 5 points' type of game, the player can track their current scores. I also added round tracking to make it more competitive --- for example, when my friends and I decide to beat the computer in the lowest number of rounds possible, we can track who's the winner among us by comparing the number of rounds we beat the computer.
* **Game Status & Log:** This announces the winner of each individual round. The descriptions below it also dynamically tell the player what the Computer picked for that specific round.

---

## Process & Tech Stack

### 1. JavaScript
The main purpose of this project was to apply the basics of JavaScript. Initially, this was a console-driven program where everything --- from the input to the displaying of winners --- happened strictly in the console. I first created the core game logic there and made sure the conditions ran flawlessly.

**Concepts Applied:**
* Conditional Statements (`if-else` & `switch-case`)
* Function declarations, definitions, and calls
* Loops

### 2. HTML & CSS
Once the logic was ready, I built the UI to make the game more interactive. I also tried to make the layout adaptable to different window sizes (a part of styling where I usually have a hard time), but using modern layout systems helped me achieve the best result I can do for now.

**Concepts Applied:**
* CSS Grid layout
* Fluid CSS functions: `clamp()`, `min()`, `minmax()`, and `repeat()`
* Layering and centering using `z-index` and position rules

### 3. JavaScript (DOM Manipulation & Events)
After adding the UI, linking it to JavaScript was the hardest challenge of this project. I had to remove most of my old console game logic. One massive takeaway for this part was that **loops (`while`, `for`, or `do-while`) don't work for DOM tracking!** The webpage crashed every single time I tried to use a traditional loop, lol.

**Concepts Applied:**
* DOM Selectors (`querySelector` / `querySelectorAll`)
* Event Listeners (`click` events)
* Dynamically manipulating CSS classes and element values

---

## Key Takeaways 🧠

1. Breaking down a project into smaller, independent parts (Logic $\rightarrow$ UI $\rightarrow$ Integration) is makes the task easier.
2. Learned some critical concepts of CSS layouts. I'm lowkey getting the hang of it... still hate it tho.
3. DOM Manipulation and Event Listeners were the absolute highlights for me. I now understand how the bridge between HTML and program logic actually works. It was confusing at first, and I had to watch a bunch of video tutorials, but I'll soon get it.