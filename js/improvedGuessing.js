let secretNumber = Math.trunc(Math.random() * 100) + 1;
let guesses = 20;
let highscore = 0;

const messageDisp = function(message) {
    document.querySelector('.message').textContent = message;
}

const clearTxt = function() {
    document.querySelector('.guess').value = '';
}

const prevGuessDisplay = function(prevGuess) {
    document.querySelector('.prevGuess').textContent = prevGuess
};

document.querySelector('.guessBtn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    clearTxt();
    if(!guess) {
         messageDisp("🚫 You must enter a number. 🚫");
         
    }else if (guess === secretNumber) {
        messageDisp("🚀 You got it! 🍪");
        document.querySelector('.number').textContent = "🔓";
        if (guesses > highscore) {
            highscore = guesses;
            document.querySelector('.highscore').textContent = highscore;
        };
    }else if(guess !== secretNumber) { //replaces below
        guess > secretNumber ? messageDisp("🏔️ Your guess is too high ⛰️") : messageDisp("🏚️ Your guess is too low 🏚️");
        guesses--;
        document.querySelector('.score').textContent = guesses;
        prevGuessDisplay(`Your previous guess was: ${guess}`);
        };
    if (guesses < 1) {
        messageDisp("😫 You lose! 🤢");
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = "🪦";
        };
});
 
document.querySelector('.resetbtn').addEventListener('click', function() {
    guesses = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    console.log(secretNumber);
    messageDisp("🤨 Enter your guess! 😏");
    document.querySelector('.score').textContent = guesses;
    document.querySelector('.number').textContent = '🔒';
    clearTxt();
    prevGuessDisplay(``);
});
