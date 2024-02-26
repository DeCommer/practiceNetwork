let score = 0;
let questionNum = 0;
let numberOfQuestions = 5;
let correct = 0;
let incorrect = 0;
let answer;
let usrIn = document.getElementById('usrIn');
// let questionNumText = document.getElementById('questionNumber');
// questionNumText.textContent = questionNum;
let scoreText = document.getElementById('score');

const bgColorChange = document.querySelector('.converter-container');
const messageArea = document.getElementById('messageArea');
const answerBtn = document.getElementById('AnswerBtn');

const modeBtn = document.querySelector('.modeBtn');

const allOpsBtn = document.getElementById('all-ops-btn');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const multBtn = document.getElementById('mult-btn');
const divBtn = document.getElementById('div-btn');

const questionConstructor = () => {
    opArr = ["+", "-", "x", "÷"];
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    randOp = opArr[Math.floor(Math.random() * opArr.length)];
    document.getElementById('leftNum').textContent = num1;
    document.getElementById('operator').textContent = randOp;
    document.getElementById('rightNum').textContent = num2;
}

const operatorModes = () => {
    if(allOpsBtn.classList[1] === 'active') {
        allOps();
    }
    if(addBtn.classList[1] === 'active') {
        add();
    }
    if(subBtn.classList[1] === 'active') {
        sub();
    }
    if(multBtn.classList[1] === 'active') {
        mult();
    }
    if(divBtn.classList[1] === 'active') {
        div();
    }   
}

allOpsBtn.addEventListener('click', allOps = () => {
    allOpsBtn.classList.add('active');
    addBtn.classList.remove('active');
    subBtn.classList.remove('active');
    multBtn.classList.remove('active');
    divBtn.classList.remove('active');
    questionConstructor();
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
});

addBtn.addEventListener('click', add = () => {
    allOpsBtn.classList.remove('active');
    addBtn.classList.add('active');
    subBtn.classList.remove('active');
    multBtn.classList.remove('active');
    divBtn.classList.remove('active');
    questionConstructor();
    answer = num1 + num2;
    randOp = opArr[0];
    document.getElementById('operator').textContent = randOp;
});

subBtn.addEventListener('click', sub = () => {
    allOpsBtn.classList.remove('active');
    addBtn.classList.remove('active');
    subBtn.classList.add('active');
    multBtn.classList.remove('active');
    divBtn.classList.remove('active');
    questionConstructor()
    answer = num1 - num2;
    randOp = opArr[1];
    document.getElementById('operator').textContent = randOp;
});

multBtn.addEventListener('click', mult = () => {
    allOpsBtn.classList.remove('active');
    addBtn.classList.remove('active');
    subBtn.classList.remove('active');
    multBtn.classList.add('active');
    divBtn.classList.remove('active');
    questionConstructor()
    answer = num1 * num2;
    randOp = opArr[2];
    document.getElementById('operator').textContent = randOp;
});

divBtn.addEventListener('click', div = () => {
    allOpsBtn.classList.remove('active');
    addBtn.classList.remove('active');
    subBtn.classList.remove('active');
    multBtn.classList.remove('active');
    divBtn.classList.add('active');
    questionConstructor()
    answer = num1 / num2;
    answer = answer.toFixed(2);
    randOp = opArr[3];
    document.getElementById('operator').textContent = randOp;
});

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
    correct += 1
    // console.log(`Correct: ${correct}`);
    bgColorChange.style.boxShadow = '0 0 50px 20px rgba(51, 253, 0, 0.575)';
    setTimeout(() =>{
        bgColorChange.style.boxShadow = '0 0 0 0';
    }, 1200);
    messageArea.style.color = '#A5DD9B';
    messageArea.textContent = 'Correct!'
    clearField();
    messageTimeout();
}

const questionWrong = () => {
    incorrect += 1
    // console.log(`Incorrect: ${incorrect}`);
    bgColorChange.style.boxShadow = '0 0 50px 20px rgb(255, 46, 46)';
    setTimeout(() =>{
        bgColorChange.style.boxShadow = '0 0 0 0';
    }, 1800);
    messageArea.style.color = '#c1121f';
    // messageArea.textContent = 'Incorrect!'
    messageArea.textContent = `The correct answer is: ${answer}`;
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

const hasWon = () => {
    let correctStatText = document.getElementById('correctStat');
    let incorrectStatText = document.getElementById('inCorrectStat');
    let percentStatText = document.getElementById('percentStat');
    let scorStatText = document.getElementById('scoreStat');
    let percentCorrect = (correct/questionNum) * 100;
    openWinModal();
    correctStatText.textContent = correct;
    incorrectStatText.textContent = incorrect;
    scorStatText.textContent = score;
    percentStatText.textContent = `${percentCorrect.toFixed(2)}%`;
    // console.log(`Total Questions: ${questionNum}`);
    // console.log(`correct: ${correct}`);
    // console.log(`Incorrect: ${incorrect}`);
    // console.log(`Percent correct:${percentCorrect.toFixed(2)}%`);
}

const nextQuestion = () => {
    questionNum += 1
    // questionNumText.textContent = questionNum;
    operatorModes();
    // console.log(answer);
}

const reset = () => {
    questionNum = 0;
    score = 0;
    correct = 0;
    incorrect = 0;
    progressBar();
    // questionNumText.textContent = 0;
    scoreText.textContent = score;
}

const progressBar = () => {
    let stepsize = 100 / numberOfQuestions;
    let progress = document.querySelector('.progress-bar');
    let width = progress.style.width.replace('%', '');
    width = parseInt(width) + stepsize;
    if (width >= 100) {
        progress.style.width = '100%';
    }if (questionNum == 0) {
        width = 0+'%';
        progress.style.width = width;
    }
    if (questionNum == 1) {
        width = 20+'%';
        progress.style.width = width;
    }
    if (questionNum == 2) {
        width = 40+'%';
        progress.style.width = width;
    }if (questionNum == 3) {
        width = 60+'%';
        progress.style.width = width;
    }
    if (questionNum == 4) {
        width = 80+'%';
        progress.style.width = width;
    }
}
progressBar()

answerBtn.addEventListener('click', () => {
    correctCheck();
    nextQuestion();
    // console.log(`${randOp}: ${typeof(randOp)}`)
    if(questionNum === numberOfQuestions) {
        hasWon();
    }
    progressBar()
    
});

usrIn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        correctCheck();
        nextQuestion();
    }

    if(questionNum === numberOfQuestions) {
        hasWon();
    }
    progressBar()
});



operatorModes();
// console.log(answer);
// console.log(`${randOp}: ${typeof(randOp)}`);

// Win modal

const winModal = document.querySelector('.winModal');
const winOverlay = document.querySelector('.winOverlay');

const openWinModal = () => {
    winModal.classList.remove('hidden');
    winOverlay.classList.remove('hidden');
}

const closeWinModal = () => {
    winModal.classList.add('hidden');
    winOverlay.classList.add('hidden');
    reset();
    // console.log(questionNum)
}

document.querySelector('.closeWinModal').addEventListener('click', closeWinModal);
document.querySelector('.winOverlay').addEventListener('click', closeWinModal);

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