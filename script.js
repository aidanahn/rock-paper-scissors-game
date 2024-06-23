// Generate Random Number
// Assign Random Number to Computer Move
// Compare User and Computer Moves
// Check Winner

const button1 = document.querySelector('button');
button1.addEventListener("click", function() {
    checker('rock');
});
const button2 = document.querySelector('button').nextElementSibling;
button2.addEventListener("click", function() {
    checker('paper');
});
const button3 = document.querySelector('button').nextElementSibling.nextElementSibling;
button3.addEventListener("click", function() {
    checker('scissors');
});

let score = 0;
let computerScore = 0;

function checker(userMove) {
    const randomNumber = Math.floor(Math.random() * 3);
 
    let computerMove;
    switch (randomNumber) {
        case 0:
            computerMove = 'rock';
            break;
        case 1:
            computerMove = 'paper';
            break;
        case 2:
            computerMove = 'scissors';
            break;
    }
    document.getElementById('user-choice').innerHTML = `You chose <span> ${userMove.toUpperCase()} </span>`;
    document.getElementById('computer-choice').innerHTML = `Computer chose <span> ${computerMove.toUpperCase()} </span>`;
    const winnerDOM = document.getElementById('winner');

    let winStatus;
    if (userMove === 'rock') {
        if (computerMove === 'rock') {
            winner = 'tied';
        }
        else if (computerMove === 'paper') {
            winner = 'lost';
        }
        else if (computerMove === 'scissors') {
            winner = 'won';
        }
    }
    else if (userMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'won';
        }
        else if (computerMove === 'paper') {
            winner = 'tied';
        }
        else if (computerMove === 'scissors') {
            winner = 'lost';
        }
    }
    else if (userMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'lost';
        }
        else if (computerMove === 'paper') {
            winner = 'won';
        }
        else if (computerMove === 'scissors') {
            winner = 'tied';
        }
    }

    winnerDOM.removeAttribute('class');
    if (winner === 'won') {
        winnerDOM.classList.add('win-text');
        score += 1
    }
    else if (winner === 'lost') {
        winnerDOM.classList.add('loss-text');
        computerScore += 1;
    }
    else {
        winnerDOM.classList.add('tie-text');
    }

    document.getElementById('user-score').innerText = score;
    document.getElementById('computer-score').innerText = computerScore;

    winnerDOM.innerText = `YOU  ${winner.toUpperCase()}`
}
