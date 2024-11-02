fetch("./data/questions.json")
.then(response => response.json())
.then(data => quiz(data));

function quiz(data) {
    const questionElement = document.getElementById("question");
    const ansBtns = document.getElementById("answer-btns");
    const nextBtn = document.getElementById("next-btn");
    const quizResultsText = document.getElementById("quiz-results-text");
    const questionNumText = document.getElementById("question-num-text");
    const message = document.getElementById("quiz-message");
    let questions = data.questions;
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
        let currentQuestion = data.questions[currentQuestionIdx];
        let questionNo = currentQuestionIdx + 1;
        questionNumText.innerHTML = `Question ${questionNo}:`;
        questionElement.innerHTML = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("ansBtns");
            ansBtns.appendChild(button);
            if(answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
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
    }

    function resetState() {
        quizResultsText.classList.add('hide');
        message.classList.add('hide');
        while(ansBtns.firstChild) {
            ansBtns.removeChild(ansBtns.firstChild);
        }
    }

    function displayScore() {
        resetState();
        questionNumText.innerHTML = `Score`;
        let scorePercent = Math.trunc((score / questions.length) * 100);
        questionElement.classList.add('hide');
        quizResultsText.classList.remove('hide');
        message.classList.remove('hide');
        quizResultsText.innerHTML = `You scored ${score} out of ${questions.length}. \n That is ${scorePercent}%`;
        if(scorePercent < 25) {
            message.innerHTML = `That score sucks!`;
        }if (scorePercent > 25 && scorePercent <= 50){
            message.innerHTML = `That is a little better.`;
        }if (scorePercent > 50 && scorePercent <= 75){
            message.innerHTML = `You're some kind of genius!`;
        }if (scorePercent > 75 && scorePercent <= 100){
            message.innerHTML = `No way! You cheated!`;
        }
        nextBtn.innerHTML = "Reset";
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
    });

    initQuiz();
}
