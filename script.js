// To update the score
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const tScore = document.getElementById('TieScore');

const text = document.getElementById('demo');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// Storing the scores.
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

// Icon classes.
const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";
const randomClasses = [rockIcon, paperIcon, scissorsIcon];

// Game Functionality.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {

            // Random rock paper scissor for the computer and clicked ones for the player
            let clickedBtn = e.target.id;
            showIcon.className = getIconClass(clickedBtn);
            let randomNum = Math.floor(Math.random() * buttons.length);
            computerShowIcon.className = getIconClass(buttons[randomNum].id);

            // If it's a Tie.
            if (showIcon.className === computerShowIcon.className) {
                tieScore++;
                text.innerHTML = "It's a Tie!";
                text.style.color = 'blueviolet';
            }
            // If it's not a Tie.
            else if (
                (showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon) ||
                (showIcon.className === paperIcon && computerShowIcon.className === rockIcon) ||
                (showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon)
            ) {
                playerScore++;
                text.innerHTML = "You Win!";
                text.style.color = 'rgb(1, 146, 1)';
            } else {
                computerScore++;
                text.innerHTML = "You Lost!";
                text.style.color = 'red';
            }

            // Update scores and display result.
            updateScores();
        });
    });
}

// Function to get icon class based on button id
const getIconClass = (buttonId) => {
    switch (buttonId) {
        case 'rock':
            return rockIcon;
        case 'paper':
            return paperIcon;
        case 'scissors':
            return scissorsIcon;
        default:
            return '';
    }
}

const updateScores = () => {
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
    tScore.innerHTML = tieScore;
}

// Run the game.
game();
