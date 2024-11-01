const questions = [
    {
        question: "If red is yellow and blue is green, what color is next Tuesday?",
        answers: [
            {text: "Fish", correct: false},
            {text: "Cat", correct: true},
            {text: "Burgler", correct: false},
            {text: "Whimsical", correct: false}
        ]
    }, 
    {
        question: "The ball is over there, then the ball moves, where is the ball?",
        answers: [
            {text: "Parts Unkn.", correct: false},
            {text: "Detroit", correct: false},
            {text: "The mall", correct: true},
            {text: "Look out behind you!", correct: false}
        ]
    },
    {
        question: "17 is 1 less than the numer that is closest to the tire wall. When do you leave?",
        answers: [
            {text: "When the dishes are done", correct: false},
            {text: "8:30", correct: false},
            {text: "Your computer is broke", correct: true},
            {text: "1dee12", correct: false}
        ]
    },
    {
        question: "Two, four, six, eight, what comes next?",
        answers: [
            {text: "Sally", correct: false},
            {text: "Billy", correct: false},
            {text: "Johnson", correct: true},
            {text: "49", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const ansBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");
const quizResultsText = document.getElementById("quiz-results-text");
const questionNumText = document.getElementById("question-num-text");

let currentQuestionIdx = 0;
let score = 0;

function initQuiz() {
    currentQuestionIdx = 0;
    score = 0;
    nextBtn.innerHTML = `Next`;
    displayQuestion();
}

function displayQuestion() {
    resetState();
    questionElement.classList.remove('hide');
    let currentQuestion = questions[currentQuestionIdx];
    let questionNo = currentQuestionIdx + 1;
    questionNumText.innerHTML = `Question ${questionNo}:`
    questionElement.innerHTML = currentQuestion
    .question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ansBtns");
        ansBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // nextBtn.style.display = "block";
}

function resetState() {
    // nextBtn.style.display = "none";
    quizResultsText.classList.add('hide');
    while(ansBtns.firstChild) {
        ansBtns.removeChild(ansBtns.firstChild);
    }
}

function displayScore() {
    resetState();
    questionElement.classList.add('hide');
    quizResultsText.classList.remove('hide');
    quizResultsText.innerHTML = `You scored ${score} out of ${questions.length}. \n That is ${(score / questions.length) * 100}%`;
    nextBtn.innerHTML = "Reset";
    // nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length) {
        displayQuestion();
    }else {
        displayScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIdx < questions.length) {
        handleNextBtn();
    }else {
        initQuiz();
    }
})

initQuiz();
