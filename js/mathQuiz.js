let score = 0;
let questionNum = 1;
let loopNum = 10;
let answer;

let questionNumText = document.getElementById('questionNumber');
let scoreText = document.getElementById('score');
questionNumText.textContent = questionNum;
scoreText.textContent = score;

const messageArea = document.getElementById('messageArea');
const answerBtn = document.getElementById('AnswerBtn');

let usrIn = document.getElementById('usrIn');

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
    } else if (Number(usrIn.value) !== Number(answer)) {
        questionWrong();
        score -= 1;
        scoreText.textContent = score;
    }
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
    clearField();
    messageArea.textContent = 'Correct!'
    messageTimeout();
}

const questionWrong = () => {
    clearField();
    messageArea.textContent = 'Incorrect!'
    messageTimeout();
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

questionConstructor();
// console.log(answer);
// console.log(`${randOp}: ${typeof(randOp)}`);