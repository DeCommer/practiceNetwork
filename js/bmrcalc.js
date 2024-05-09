// refactor when back from trip
const usBtn = document.getElementById('us-btn');
const metricBtn = document.getElementById('metric-btn');
const maleBtn = document.getElementById('m-btn');
const femaleBtn = document.getElementById('f-btn');
const ftIn = document.getElementById('feet-input');
const inIn = document.getElementById('inch-input');
const ageIn = document.getElementById('age-input');
const poundsIn = document.getElementById('pounds-input');
const usIn = document.getElementById('us');
const metIn = document.getElementById('metric');
const cmIn = document.getElementById('cm-input');
const metAgeIn = document.getElementById('met-age-input');
const kgIn = document.getElementById('kg-input');
const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const messageTxt = document.getElementById('message-txt');
const resultsTxt = document.getElementById('results-txt');
const formulaTxt = document.getElementById('formula-txt');

let unit = 'us';
let gender = 'm';

usBtn.addEventListener('click', () => {
    unit = 'us';
    usBtn.classList.add('active');
    metricBtn.classList.remove('active');
    usIn.classList.remove('hide');
    metIn.classList.add('hide');
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0<span>calories/day</span></p>`;
    formulaTxt.textContent = ``
});

metricBtn.addEventListener('click', () => {
    unit = 'metric';
    usBtn.classList.remove('active');
    metricBtn.classList.add('active');
    usIn.classList.add('hide');
    metIn.classList.remove('hide');
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0<span>calories/day</span></p>`;
    formulaTxt.textContent = ``
});

maleBtn.addEventListener('click', () => {
    gender = 'm';
    maleBtn.classList.add('active');
    femaleBtn.classList.remove('active');
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0<span>calories/day</span></p>`;
    formulaTxt.textContent = ``
});

femaleBtn.addEventListener('click', () => {
    gender = 'f';
    maleBtn.classList.remove('active');
    femaleBtn.classList.add('active');
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0<span>calories/day</span></p>`;
    formulaTxt.textContent = ``
});

const usCalc = () => {
    const h = ((Number(ftIn.value) * 12) + Number(inIn.value)) * 2.54; //converts to cm
    const w = poundsIn.value * 0.45359237; //converts to kg
    const a = ageIn.value;
    const bmr = 10 * w + 6.25 * h - 5 * a;
    return bmr.toFixed(0);
};

const metricBmr = () => {
    const h = (Number(cmIn.value)); //converts to cm
    const w = kgIn.value //converts to kg
    const a = metAgeIn.value;
    const metricBmr = 10 * w + 6.25 * h - 5 * a;
    return metricBmr.toFixed(0);
};

calcBtn.addEventListener('click', () => {
    //BMR = 10W + 6.25H - 5A + 5 (Men)
    //BMR = 10W + 6.25H - 5A - 161 (Women)

    if(unit === 'us' && gender === 'm') {
        messageTxt.textContent = `Your BMR is:`
        resultsTxt.innerHTML = `<p id="results-txt">${Number(usCalc() + 5)}<span>calories/day</span></p>`;
        formulaTxt.textContent = `10W + 6.25H - 5A + 5`
    }else if (unit == 'us' && gender === 'f') {
        messageTxt.textContent = `Your BMR is:`
        resultsTxt.innerHTML = `<p id="results-txt">${Number(usCalc() - 161)}<span>calories/day</span></p>`;
        formulaTxt.textContent = `10W + 6.25H - 5A - 161`
    }else if (unit === 'metric' && gender === 'm') {
        messageTxt.textContent = `Your BMR is:`
        resultsTxt.innerHTML = `<p id="results-txt">${Number(metricBmr() + 5)}<span>calories/day</span></p>`;
        formulaTxt.textContent = `10W + 6.25H - 5A + 5`
    }else if (unit === 'metric' && gender === 'f') {
        messageTxt.textContent = `Your BMR is:`
        resultsTxt.innerHTML = `<p id="results-txt">${Number(metricBmr() - 161)}<span>calories/day</span></p>`;
        formulaTxt.textContent = `10W + 6.25H - 5A - 161`
    };
});

resetBtn.addEventListener('click', () => {
    unit = 'us';
    gender ='m';
    inIn.value = '';
    ftIn.value = '';
    poundsIn.value = '';
    ageIn.value = '';
    usBtn.classList.add('active');
    metricBtn.classList.remove('active');
    usIn.classList.remove('hide');
    metIn.classList.add('hide');
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0</p>`;
    formulaTxt.textContent = ``;
});