let time = 25 * 60;
let timerInterval;
let currentMode = 'tomato';
let MODES = {
    tomato: 25,
    short: 5,
    long: 15
}
const DEFAULT_MODES = {
    tomato: 25,
    short: 5,
    long: 15
}
let totalBreaks = 0;
// const alarmSound = new Audio('nothinghereyet');
document.querySelectorAll('#modes button')
    .forEach(button => {
        button.addEventListener('click', handleModeButtons)
    });
document.querySelectorAll('#duration-control input')
    .forEach(function(input) {
        input.addEventListener('change', durationControlHandler);
        input.value = '';
    });
    function durationControlHandler(event) {
        let value = event.target.value.trim();
        let durationId = event.target.dataset.durationId;
        if(value != '' && !isNaN(value) && Number.isInteger(parseFloat(value)) && parseInt(value) != 0) {
            MODES[durationId] = parseInt(value);
        }else {
            MODES[durationId] = DEFAULT_MODES[durationId];
        }
        resetTimer();
    }
function handleModeButtons(event) {
    switchMode(event.target.dataset.modeId)
}
function updateControlButtons(isRunning) {
    let start_button = document.querySelector('.timer-control.start');
    let pause_button = document.querySelector('.timer-control.pause');
    if(isRunning) {
        start_button.disabled = true;
        pause_button.disabled = false;
    }else {
        start_button.disabled = false;
        pause_button.disabled = true;
    }
}
function switchMode(mode) {
    currentMode = mode;
    document.querySelector('.main-container').style.backgroundColor = `var(--${mode})`
    document.querySelectorAll('#modes button')
        .forEach(elem => {
            elem.classList.remove('active');
        });
    document.querySelector(`button[data-mode-id='${mode}']`).classList.add('active');
    resetTimer();
};
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    updateControlButtons(true);
};
function pauseTimer() {
    clearInterval(timerInterval);
    updateControlButtons(false);
};
function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').textContent = `${minutes}:${seconds}`
    document.title = `${minutes}:${seconds} - Tomato Time`
    if(time <= 0 ) {
        pauseTimer();
        // alarmSound.play();
        alert('Time is up!') //maybe switch to modal, or an on page message
        // alarmSound.pause();
        // alarmSound.currentTime = 0;
        nextMode();
        resetTimer();
    }
    time -= 1;
};
function nextMode() {
    if(currentMode == 'tomato') {
        totalBreaks += 1;
        if(totalBreaks % 4 == 0) {
            switchMode('long');
        }else {
            switchMode('long');
        }
    }else {
        switchMode('tomato');
    }
}
function resetTimer() {
    time = MODES[currentMode] * 60;
    clearInterval(timerInterval);
    updateTimer();
    updateControlButtons(false);
}