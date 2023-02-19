let score = 0;
let questionNum = 1;
const loopNum = 10;

initQuestion()

function correct() {
    console.log("Correct!");
    question(); 
    scoreInc();
    questionInc();
    document.getElementById('answerForm').reset();
}

function question() {
    const opArr = ["+", "-", "x", "÷"]
    leftNum = Math.floor(Math.random() * 10) + 1;
    randOp = opArr[Math.floor(Math.random() * opArr.length)];
    rightNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById("leftNum").innerHTML = leftNum;
    document.getElementById("operator").innerHTML = randOp;
    document.getElementById("rightNum").innerHTML = rightNum;   
}

function displayCorrect() {
    const correctText = document.createElement('div');
    correctText.setAttribute('class', 'correctText')
    correctText.textContent = "Correct";
    var disp = document.getElementById("qArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function displayInorrect() {
    const correctText = document.createElement('div');
    correctText.setAttribute('class', 'correctText')
    correctText.textContent = "inCorrect";
    var disp = document.getElementById("qArea").appendChild(correctText);
    setTimeout(function(){
        const element = disp;
        element.remove();
    }, 2000);
}

function initQuestion() {
    question();   
}

function guts() {

    let usrAnswer = parseFloat(document.getElementById('answerField').value);

    if(randOp == "+") {
        answer = (leftNum + rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
        }
    }
    if(randOp == "-") {
        answer = (leftNum - rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
        }
    }
    if(randOp == "x") {
        answer = (leftNum * rightNum);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
        }
    }
    if(randOp == "÷") {
        answer =  (leftNum / rightNum).toFixed(2);
        if(usrAnswer == answer) {
            correct();
            displayCorrect();
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
