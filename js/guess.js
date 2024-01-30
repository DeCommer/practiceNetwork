const guessBox = document.getElementById("guessBox");
const remaining = document.getElementById("remaining");
const result = document.getElementById("result");
const enterButton = document.getElementById("enterButton");

let secret_number = Math.floor(Math.random() * 10) + 1;
let guesses = 3;

function guess(){
    guesses - 1
    let userGuess = Number(guessBox.value);
    console.log(secret_number);   
    if (isNaN(userGuess)) {
        result.textContent = "You must enter a number.";   
    }else if (userGuess == secret_number) {
        result.textContent = "You got it!"
    }else if (guesses == 1){
        remaining.textContent = (`You have: ${guesses - 1} guesses left`);
        result.textContent = `You lose! The secret number was ${secret_number}`
    } else if(userGuess > secret_number) {
        guesses --;
        remaining.textContent = (`You have: ${guesses} guesses left`);
        result.textContent = (`${userGuess} is too high`);
    }else if(userGuess < secret_number) {
        guesses --;
        remaining.textContent = (`You have: ${guesses} guesses left`);
        result.textContent = (`${userGuess} is too low`);
    }

    //reset area
    document.getElementById('reset').addEventListener('click', () => {
        location.reload();
    })

};