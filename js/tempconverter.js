const displayType = document.getElementById('disp-type');
const cBtn = document.getElementById('c-btn');
const fBtn = document.getElementById('f-btn');
const usrIn = document.getElementById('input');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const formula = document.getElementById('formula');
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'c';
console.log(state);

cBtn.addEventListener('click', () => {
    state = 'c';
    displayType.textContent = 'C - F'
    cBtn.classList.add('active');
    fBtn.classList.remove('active');
    console.log(state);
});

fBtn.addEventListener('click', () => {
    state = 'f';
    displayType.textContent = 'F - C'
    fBtn.classList.add('active');
    cBtn.classList.remove('active');
    console.log(state);
});

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        formula.textContent = "Please enter a value";
    }else if(state === 'f') {
        let fahrenheit = input.value
        toC = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
        message.textContent = `${input.value} fahrenheit to celsius equals:`;
        resultTempTxt.innerHTML = `<p>${toC}°<span>C</span></p>`
        formula.textContent = `Formula: (F° - 32) x 5/9 = C°`;
    }else if (state === 'c') {
        let celsius = input.value
        toF = ((celsius * (9 / 5)) + 32).toFixed(2);
        message.textContent = `${input.value} celsius to fahrenheit equals:`
        resultTempTxt.innerHTML = `<p>${toF}°<span>F</span></p>`;
        formula.textContent = `Formula: (C° x 9 / 5) + 32 = F°`;
    }
});

clearBtn.addEventListener('click', () => {
    input.value = null;
    displayType.textContent = 'C - F';
    message.textContent = ``;
    resultTempTxt.textContent = `0`;
    formula.textContent = ``;
});


