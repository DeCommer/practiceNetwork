let score = 0;
let questionNum = 1;
let loopNum = 10;
let answer;
let usrIn = document.getElementById('usrIn');
let questionNumText = document.getElementById('questionNumber');
let scoreText = document.getElementById('score');
questionNumText.textContent = questionNum;
scoreText.textContent = score;

const bgColorChange = document.querySelector('.converter-container');
const messageArea = document.getElementById('messageArea');
const answerBtn = document.getElementById('AnswerBtn');

const questionConstructor = () => {
    opArr = ["+", "-", "x", "÷"];
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    randOp = opArr[Math.floor(Math.random() * opArr.length)];

    document.getElementById('leftNum').textContent = num1;
    document.getElementById('operator').textContent = randOp;
    document.getElementById('rightNum').textContent = num2;
    if (randOp === '+') {
        answer = num1 + num2;
    }if (randOp === '-') {
        answer = num1 - num2;
    }if (randOp === 'x') {
        answer = num1 * num2;
    }if (randOp === '÷') {
        answer = num1 / num2;
        answer = answer.toFixed(2);
    }
    return answer
}

const clearField = () => {
    usrIn.value = null;
    usrIn.focus();
}

const messageTimeout = () => {
    setTimeout(() =>{
        messageArea.textContent = '';
    }, 1500);
}

const questionRight = () => {
    messageArea.textContent = 'Correct!'
    clearField();
    messageTimeout();
}

const questionWrong = () => {
    messageArea.textContent = 'Incorrect!'
    clearField();
    messageTimeout();
}

const correctCheck = () => {
    if(randOp === '+' && Number(usrIn.value) === Number(answer)) {
        // console.log("This was a plus question")
        questionRight();
        score += 1;
        scoreText.textContent = score;
        // console.log(`The score is: ${score}`);
    }else if(randOp ==='-' && Number(usrIn.value) === Number(answer)) {
        // console.log("This was a Minus question")
        questionRight();
        score += 2;
        scoreText.textContent = score;
    }else if(randOp === 'x' && Number(usrIn.value) === Number(answer)) {
        // console.log("This was a multiplication question")
        questionRight();
        score += 5;
        scoreText.textContent = score;
    }else if(randOp === '÷' && Number(usrIn.value) === Number(answer)) {
        // console.log("This was a Division question")
        questionRight();
        score += 10;
        scoreText.textContent = score;
    }else if (Number(usrIn.value) !== Number(answer)) {
        questionWrong();
        score -= 1;
        scoreText.textContent = score;
    }
}

const nextQuestion = () => {
    questionNum += 1
    questionNumText.textContent = questionNum;
    questionConstructor();
    // console.log(answer);
}

answerBtn.addEventListener('click', () => {
    correctCheck();
    nextQuestion();
    // console.log(`${randOp}: ${typeof(randOp)}`)
});

usrIn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        correctCheck();
        nextQuestion();
    }
});

questionConstructor();
// console.log(answer);
// console.log(`${randOp}: ${typeof(randOp)}`);

//Old==================================================================

// var score = 0;
// var questionNum = 1;
// const loopNum = 10;
// const opArr = ["+", "-", "x", "÷"];
// let randOp = opArr[Math.floor(Math.random() * opArr.length)];
// const correctText = document.createElement('div');
// correctText.setAttribute('class', 'correctText');

// function correct() {
//     question(); 
//     questionInc();
//     document.getElementById('answerForm').reset();
// }

// function question() {
//     leftNum = Math.floor(Math.random() * 10) + 1;
//     randOp = opArr[Math.floor(Math.random() * opArr.length)];
//     rightNum = Math.floor(Math.random() * 10) + 1;
//     document.getElementById("leftNum").innerHTML = leftNum;
//     document.getElementById("operator").innerHTML = randOp;
//     document.getElementById("rightNum").innerHTML = rightNum;   
// }

// function displayCorrect() {
//     correctText.textContent = "Correct";
//     let disp = document.getElementById("correctArea").appendChild(correctText);
//     setTimeout(function(){
//         const element = disp;
//         element.remove();
//     }, 2000);
// }

// function scoreUpdate() {
//     document.getElementById('score').innerHTML = score;
// }

// function questionInc() {
//     questionNum++
//     document.getElementById('questionNumber').innerHTML = questionNum;
// }

// document.getElementById('answerForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     guts();
//     if(score >= 25) {

//     }
// });

// function guts() {
    
//     let usrAnswer = parseFloat(document.getElementById('answerField').value);

//     if(randOp === "+") {
//         answer = (leftNum + rightNum);
//         if(usrAnswer == answer) {
//             correct();
//             displayCorrect();
//             score += 1;
//             scoreUpdate();
//         }
//     }
//     if(randOp === "-") {
//         answer = (leftNum - rightNum);
//         if(usrAnswer == answer) {
//             correct();
//             displayCorrect();
//             score += 2;
//             scoreUpdate();
//         }
//     }
//     if(randOp === "x") {
//         answer = (leftNum * rightNum);
//         if(usrAnswer == answer) {
//             correct();
//             displayCorrect();
//             score += 5;
//             scoreUpdate();
//         }
//     }
//     if(randOp === "÷") {
//         answer = (leftNum / rightNum).toFixed(2);
//         console.log(answer);
//         if(usrAnswer == answer) {
//             correct();
//             displayCorrect();
//             score += 10;
//             scoreUpdate();
//         }
//     }
// }

// question();