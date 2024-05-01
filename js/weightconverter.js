const kgBtn = document.getElementById('kg-btn');
const lbBtn = document.getElementById('lb-btn');
const displayType = document.getElementById('disp-type');
const input = document.getElementById('input');
const enterBtn = document.getElementById('enter-btn');
const resetBtn = document.getElementById('reset-btn');
const messageTxt = document.getElementById('message');
const resultTxt = document.getElementById('result-temp-txt');
const formula = document.getElementById('formula');

let state = 'lb';

kgBtn.addEventListener('click', () => {
    state = 'kg';
    kgBtn.classList.add('active');
    lbBtn.classList.remove('active');
    displayType.textContent = 'kg - lbs';
    input.value = '';
    messageTxt.textContent = ``
    resultTxt.innerHTML = '<p id="result-temp-txt" class="result-temp">0</p>';
    formula.textContent = ``;
});

lbBtn.addEventListener('click', () => {
    state = 'lb'
    kgBtn.classList.remove('active');
    lbBtn.classList.add('active');
    displayType.textContent = 'lbs - kg';
    input.value = ``;
    messageTxt.textContent = ``
    resultTxt.innerHTML = '<p id="result-temp-txt" class="result-temp">0</p>';
    formula.textContent = ``;
});

enterBtn.addEventListener('click', () => {
    if(state === 'lb') {
        const kgsOut = (input.value / 2.20462).toFixed(2)
        messageTxt.textContent = `${input.value}lb in kilograms equals:`;
        resultTxt.innerHTML = `<p id="result-temp-txt" class="result-temp">${kgsOut}<span> kg</span></p>`;
        formula.textContent = 'Formula: pounds / 2.20462 = kilograms'

    }else if(state === 'kg') {
        const lbsOut = (input.value * 2.20462).toFixed(2);
        messageTxt.textContent = `${input.value}kg in pounds equals:`;
        resultTxt.innerHTML = `<p id="result-temp-txt" class="result-temp">${lbsOut}<span> lbs</span></p>`;
        formula.textContent = 'Formula: kilograms x 2.20462 = pounds'
    }
});

resetBtn.addEventListener('click', () => {
    state = 'lb';
    kgBtn.classList.remove('active');
    lbBtn.classList.add('active');
    displayType.textContent = 'kg - lbs';
    input.value = '';
    messageTxt.textContent = ``
    resultTxt.innerHTML = '<p id="result-temp-txt" class="result-temp">0</p>';
    formula.textContent = ``;
});