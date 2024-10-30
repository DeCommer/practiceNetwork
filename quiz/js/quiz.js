const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultPercentContainer = document.getElementById("result-percent-container");

let currentQuestion = 0;
let numberOfQuestions = 2;
let score = 0;

const questions = [
    {
        question: "The numbers 11, 12, 13, 17, 19, x have an average of 18. Find the value of x",
        options: ["45", "82", "36", "29"],
        correctAnswer: "36"
    },
    {
        question: "Question 2",
        options: ["Choice_1", "Choice_2", "Choice_3", "Choice_4"],
        correctAnswer: "Choice_4"
    },

];

function loadQuestion() {
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
    resultPercentContainer.textContent = `That is ${(parseInt(score)/ parseInt(questions.length)) * 100}%`;
}

loadQuestion();