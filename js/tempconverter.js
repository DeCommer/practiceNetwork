const displayType = document.getElementById('disp-type');
const cBtn = document.getElementById('c-btn');
const fBtn = document.getElementById('f-btn');
const usrIn = document.getElementById('input');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('result');
const formula = document.getElementById('formula');
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'f';
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
        result.textContent = "Please enter a value";
    }else if(state === 'f') {
        let fahrenheit = input.value
        toC = ((fahrenheit - 32) * (5 / 9)).toFixed(2) ;
        resultTempTxt.textContent = `${toC}`
        formula.textContent = `Formula: (F° - 32) x 5/9 = C°`;
    }else if (state === 'c') {
        let celsius = input.value
        toF = ((celsius * (9 / 5)) + 32).toFixed(2);
        resultTempTxt.textContent = `${toF}`
        formula.textContent = `Formula: (C° x 9 / 5) + 32 = F°`;
    }
});

clearBtn.addEventListener('click', () => {
    input.value = null;
    displayType.textContent = 'C - F';
    resultTempTxt.textContent = ``;
    formula.textContent = ``;
});


