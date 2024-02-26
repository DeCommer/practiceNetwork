const displayType = document.getElementById('disp-type');
const cBtn = document.getElementById('c-btn');
const fBtn = document.getElementById('f-btn');
const usrIn = document.getElementById('input');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const hide = document.getElementById('hide');
const result = document.getElementById('result');
const formula = document.getElementById('formula')

let state = 'f';

cBtn.addEventListener('click', () => {
    state = 'c';
    displayType.textContent = 'C - F'
    cBtn.classList.add('active');
    fBtn.classList.remove('active');
});

fBtn.addEventListener('click', () => {
    state = 'f';
    displayType.textContent = 'F - C'
    fBtn.classList.add('active');
    cBtn.classList.remove('active');
});

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        result.textContent = "Please enter a value";
    }else if(state === 'f') {
        let fahrenheit = input.value
        toC = ((fahrenheit - 32) * (5 / 9)).toFixed(2) ;
        formula.textContent = `Formula: (${fahrenheit}°F - 32) x 5/9 = ${toC}°C`;
        hide.classList.remove('hide');
    }else if (state === 'c') {
        let celsius = input.value
        toF = ((celsius * (9 / 5)) + 32).toFixed(2);
        formula.textContent = `Formula: (${celsius}°C x 9 / 5) + 32 = ${toF}°F`;
        hide.classList.remove('hide');
    }
});

clearBtn.addEventListener('click', () => {
    input.value = null;
    displayType.textContent = 'C - F'
    hide.classList.add('hide');
});


