let score = 0;
let questionNum = 1;
const loopNum = 10;
const opArr = ["+", "-", "x", "÷"];
let randOp = opArr[Math.floor(Math.random() * opArr.length)];

question();

function correct() {
    question(); 
    scoreInc();
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
    const correctText = document.createElement('div');
    correctText.setAttribute('class', 'correctText');
    correctText.textContent = "Correct";
    var disp = document.getElementById("scoreArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function displayInorrect() {
    const correctText = document.createElement('div');
    correctText.setAttribute('class', 'correctText');
    correctText.textContent = "incorrect";
    var disp = document.getElementById("scoreArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function guts() {
    
    let usrAnswer = parseFloat(document.getElementById('answerField').value);

    if(randOp === "+") {
        answer = (leftNum + rightNum);
        if(usrAnswer === answer) {
            correct();
            displayCorrect();
        }
        else {
            displayInorrect();
        }
    }
    if(randOp === "-") {
        answer = (leftNum - rightNum);
        if(usrAnswer === answer) {
            correct();
            displayCorrect();
        }
        else {
            displayInorrect();
        }
    }
    if(randOp === "x") {
        answer = (leftNum * rightNum);
        if(usrAnswer === answer) {
            correct();
            displayCorrect();
        }
        else {
            displayInorrect();
        }
    }
    if(randOp === "÷") {
        answer = (leftNum / rightNum).toFixed(2);
        console.log(answer);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
        }
        else {
            displayInorrect();
        }
    }
}

function scoreInc() {
    score++
    document.getElementById('score').innerHTML = score;
}

function questionInc() {
    questionNum++
    document.getElementById('questionNumber').innerHTML = questionNum;
}

document.getElementById('answerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    guts();
});
