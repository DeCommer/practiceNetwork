let score = 0;
let questionNum = 0;
let numberOfQuestions = 10;
let correct = 0;
let incorrect = 0;
let answer;
let usrIn = document.getElementById('usrIn');
let scoreText = document.getElementById('score');
let questionLog = [];

const bgColorChange = document.querySelector('.apps-container');
const messageArea = document.getElementById('messageArea');
const answerBtn = document.getElementById('answer-btn');
const allOpsBtn = document.getElementById('all-ops-btn');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const multBtn = document.getElementById('mult-btn');
const divBtn = document.getElementById('div-btn');
let qInfoText = document.querySelector('.question-info-text')

// Timer Section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startTimeBtn = document.getElementById('time-start-btn');
const pauseTimeBtn = document.getElementById('time-pause-btn');
const resetTimeBtn = document.getElementById('time-reset-btn');
const timer = document.getElementById('time-display');

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let int = null;

startTimeBtn.addEventListener('click', () => {
    pauseTimeBtn.classList.remove('active');
    startTimeBtn.classList.add('active');
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10)
    usrIn.focus();
})

pauseTimeBtn.addEventListener('click', () => {
    pauseTimeBtn.classList.add('active');
    startTimeBtn.classList.remove('active');
    clearInterval(int);
});

resetTimeBtn.addEventListener('click', clearTime = () => {
    pauseTimeBtn.classList.remove('active');
    startTimeBtn.classList.remove('active');
    clearInterval(int);

    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerHTML = '00:00:000';
});

const displayTimer = () => {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++
        }
        if (minutes == 60) {
            minutes = 0
            hours++;
        }
    }
    // let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds

    let result = timer.innerHTML = `${m}:${s}:${ms}`;
    return result;
}

// Main Program ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const progressBar = () => {
    let increment = 100 / numberOfQuestions;
    let progress = document.querySelector('.progress-bar');
    let width = progress.style.width.replace('%', '');
    width = parseInt(width) + increment;
    width = (questionNum / numberOfQuestions) * 100+'%';
    progress.style.width = width;
}
progressBar()

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
//Mode Buttons +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//planning to refactor out some of the duplicate code...
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
    bgColorChange.style.boxShadow = '0 0 50px 20px rgba(51, 253, 0, 0.575)';
    setTimeout(() =>{
        bgColorChange.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }, 1200);
    messageArea.style.color = '#A5DD9B';
    messageArea.textContent = 'Correct!'
    clearField();
    messageTimeout();
    return 'Correct'
}

const questionWrong = () => {
    incorrect += 1
    bgColorChange.style.boxShadow = '0 0 50px 20px rgb(255, 46, 46)';
    setTimeout(() =>{
        bgColorChange.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }, 1800);
    messageArea.style.color = '#c1121f';
    messageArea.textContent = `The correct answer is: ${answer}`;
    clearField();
    messageTimeout();
    return 'Incorrect'
}

const correctCheck = () => {
    if(randOp === '+' && Number(usrIn.value) === Number(answer)) {
        questionRight();
        score += 1;
        scoreText.textContent = score;
    }else if(randOp ==='-' && Number(usrIn.value) === Number(answer)) {
        questionRight();
        score += 2;
        scoreText.textContent = score;
    }else if(randOp === 'x' && Number(usrIn.value) === Number(answer)) {
        questionRight();
        score += 5;
        scoreText.textContent = score;
    }else if(randOp === '÷' && Number(usrIn.value) === Number(answer)) {
        questionRight();
        score += 10;
        scoreText.textContent = score;
    }else if (Number(usrIn.value) !== Number(answer)) {
        questionWrong();
        score -= 1;
        scoreText.textContent = score;
    }
}

const stats = () => {
    let correctStatText = document.getElementById('correctStat');
    let incorrectStatText = document.getElementById('inCorrectStat');
    let percentStatText = document.getElementById('percentStat');
    let scoreStatText = document.getElementById('scoreStat');
    let questionsList = document.getElementById('questions')
    let percentCorrect = (correct/questionNum) * 100;
    openWinModal();
    correctStatText.textContent = correct;
    incorrectStatText.textContent = incorrect;
    scoreStatText.textContent = score;
    percentStatText.textContent = `${percentCorrect.toFixed(2)}%`;
    const timeStat = document.getElementById('timeStat');
    if(milliseconds === 0) {
        timeStat.innerHTML = 0;
    } else {
        timeStat.innerHTML = displayTimer();
    }
    clearTime();
    questionsList.innerHTML = questionLog.map(i => `<li><span>${i}</span></li>`).join('');
}

const nextQuestion = () => {
    questionNum += 1
    operatorModes();
    qInfoText.textContent = `${questionNum}/${numberOfQuestions}`;
}

const recordQuestions = () => {
    let correctLog = `${num1} ${randOp} ${num2} = ${answer} : ✅`;
    let incorrectLog = `${num1} ${randOp} ${num2} = ${answer} : ❌`;
    if (Number(usrIn.value) === Number(answer)) {
        questionLog.push(correctLog);
    } else {
        questionLog.push(incorrectLog);
    }
    // console.log(`${questionLog}`)
}

const reset = () => {
    questionNum = 0;
    score = 0;
    correct = 0;
    incorrect = 0;
    questionLog = [];
    progressBar();
    scoreText.textContent = score;
}

//Settings Section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.querySelector('.settings-modal');
const closeSettingsBtn = document.querySelector('.close-settings-modal');
const qInTitle = document.getElementById('q-in-title')

const qIn = document.getElementById('q-in');
const qInEnterBtn = document.getElementById('q-in-enter-btn');

settingsBtn.addEventListener('click', () => {
    qInTitle.innerHTML = `How many questions? <br> Current: ${numberOfQuestions}`;
    settingsModal.classList.remove('hidden');
    qIn.focus();
});

closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
    reset();
    qInfoText.textContent = `${questionNum}/${numberOfQuestions}`;
});

qInEnterBtn.addEventListener('click', () => {
    if(qIn.value === '' || qIn.value < 1) {
        qInTitle.textContent = `Please enter a number greater than 1`;
        setTimeout( () => {
            qInTitle.innerHTML = `How many questions? <br> Current: ${numberOfQuestions}`;
        }, 1200);
        numberOfQuestions = 10;
    } else {
        numberOfQuestions = qIn.value;
        qIn.value = '';
        qInTitle.innerHTML = `How many questions? <br> Current: ${numberOfQuestions}`;
        settingsModal.classList.add('hidden');
        reset();
        qInfoText.textContent = `${questionNum}/${numberOfQuestions}`;
    }
})

//Primary User Input ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

answerBtn.addEventListener('click', () => {
    recordQuestions();
    correctCheck();
    nextQuestion();
    if(questionNum == numberOfQuestions) {
        stats();
        usrIn.blur();
    }
    progressBar()
    console.log(`Questions: ${numberOfQuestions}`);
    console.log(`Question number: ${questionNum}`);
});

usrIn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        recordQuestions();
        correctCheck();
        nextQuestion();
    }
    if(questionNum == numberOfQuestions) {
        stats();
        usrIn.blur();
    }
    progressBar()
    
});
operatorModes();

// Win modal ++++++++++++++++++++++++++++++++++++++++++++++++
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
    qInfoText.textContent = `${questionNum}/${numberOfQuestions}`;
}
document.querySelector('.closeWinModal').addEventListener('click', closeWinModal);
document.querySelector('.winOverlay').addEventListener('click', closeWinModal);