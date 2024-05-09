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
});

metricBtn.addEventListener('click', () => {
    unit = 'metric';
    usBtn.classList.remove('active');
    metricBtn.classList.add('active');
    usIn.classList.add('hide');
    metIn.classList.remove('hide');
});

maleBtn.addEventListener('click', () => {
    gender = 'm';
    maleBtn.classList.add('active');
    femaleBtn.classList.remove('active');
});

femaleBtn.addEventListener('click', () => {
    gender = 'f';
    maleBtn.classList.remove('active');
    femaleBtn.classList.add('active');
});

calcBtn.addEventListener('click', () => {
    //BMR = 10W + 6.25H - 5A + 5 (Men)
    //BMR = 10W + 6.25H - 5A - 161 (Women)
    // states: us||male, us||female, metric||male, metric||female
    const h = (Number(ftIn.value) * 12) + Number(inIn.value);
    const w = poundsIn.value;
    const a = ageIn.value;
    const bmrMale = 10 * w + 6.25 * h - 5 * a + 5;
    if(unit === 'us' && gender === 'm') {
        messageTxt.textContent = `Your BMR is:`
        resultsTxt.innerHTML = `<p id="results-txt">${bmrMale.toFixed(0)}</p><span>calories/day</span>`;
        formulaTxt.textContent = `10W + 6.25H - 5A + 5`
    }else if (unit == 'us' && gender === 'f') {
        resultsTxt.textContent = "us / female";
    }else if (unit === 'metric' && gender === 'm') {
        resultsTxt.textContent = "metric / male";
    }else if (unit === 'metric' && gender === 'f') {
        resultsTxt.textContent = "metric / female";
    }
});

resetBtn.addEventListener('click', () => {

});