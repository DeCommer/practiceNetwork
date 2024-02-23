var score = 0;
var questionNum = 1;
const loopNum = 10;
const opArr = ["+", "-", "x", "÷"];
let randOp = opArr[Math.floor(Math.random() * opArr.length)];
const correctText = document.createElement('div');
correctText.setAttribute('class', 'correctText');

function correct() {
    question(); 
    questionInc();
    document.getElementById('answerForm').reset();
}

function question() {
    leftNum = Math.floor(Math.random() * 10) + 1;
    randOp = opArr[Math.floor(Math.random() * opArr.length)];
    rightNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("leftNum").innerHTML = leftNum;
    document.getElementById("operator").innerHTML = randOp;
    document.getElementById("rightNum").innerHTML = rightNum;   
}

function displayCorrect() {
    correctText.textContent = "Correct";
    let disp = document.getElementById("correctArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function displayIncorrect() {
    correctText.textContent = "Incorrect";
    let disp = document.getElementById("correctArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function scoreUpdate() {
    document.getElementById('score').innerHTML = score;
}

function questionInc() {
    questionNum++
    document.getElementById('questionNumber').innerHTML = questionNum;
}

document.getElementById('answerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    guts();
    if(score >= 25) {

    }
});

function guts() {
    
    let usrAnswer = parseFloat(document.getElementById('answerField').value);

    if(randOp === "+") {
        answer = (leftNum + rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
            score += 1;
            scoreUpdate();
        }else if(usrAnswer != answer) {
            displayIncorrect()
            score -= 1;
            scoreUpdate();
        }
    }
    if(randOp === "-") {
        answer = (leftNum - rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
            score += 2;
            scoreUpdate();
        }else if(usrAnswer != answer) {
            displayIncorrect()
            score -= 1;
            scoreUpdate();
        }
    }
    if(randOp === "x") {
        answer = (leftNum * rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
            score += 5;
            scoreUpdate();
        }else if(usrAnswer != answer) {
            displayIncorrect()
            score -= 1;
            scoreUpdate();
        }
    }
    if(randOp === "÷") {
        answer = (leftNum / rightNum).toFixed(2);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
            score += 10;
            scoreUpdate();
        }else if(usrAnswer != answer) {
            displayIncorrect()
            score -= 1;
            scoreUpdate();
        }
    }
}

question();