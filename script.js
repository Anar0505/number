let again = document.getElementById("again");
let check = document.getElementById("check");
let guess = document.getElementById("guess");
let message = document.querySelector('.firsthalf'); 
let score = 20;
let highscore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;

function showMessage(text) {
    message.textContent = text;
}

function resetGame() {
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    guess.value = ''; 
    showMessage('Start guessing...');
    updateScore();
    document.querySelector('.mark').textContent = '?'; 
}

function updateScore() {
    document.querySelector('.score').textContent = `Score: ${score}`;
}

function updateHighscore() {
    document.querySelector('.highscore').textContent = `Highscore: ${highscore}`;
}

check.addEventListener("click", function() {
    const playerGuess = parseInt(guess.value);

    if (!playerGuess) {
        showMessage("⛔ Guess a number!");
    }
    else if (playerGuess > 20) {
        showMessage('📈 Too high! (1-20)');
    }
    else if (playerGuess < 1) {
        showMessage('📉 Too low! (1-20)');
    }
    else if (playerGuess === randomNumber) {
        showMessage('🎉 Correct Number!');
        document.querySelector('.mark').textContent = randomNumber;

        if (score > highscore) {
            highscore = score;
            updateHighscore();
        }
    } else {
        showMessage(playerGuess > randomNumber ? '📉 Too high!' : '📈 Too low!');
        score--;
        updateScore();
        
        if (score === 0) {
            showMessage('💥 You lost the game!');
        }
    }
});


again.addEventListener("click", resetGame);
