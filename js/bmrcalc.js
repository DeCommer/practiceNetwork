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

console.log(`Unit: ${unit}, Gender: ${gender}`);

const usCalcMale = () => {
    //BMR = 10W + 6.25H - 5A + 5 (Men)
    //BMR = 10W + 6.25H - 5A - 161 (Women)
    const h = (((Number(ftIn.value)) + (Number(inIn.value)) / 10) * 30.48).toFixed(2); //to cm
    const w = (poundsIn.value / 2.205).toFixed(2); //to Kg
    const a = ageIn.value;
    const bmrM = (9.99 * w) + (6.25 * h) - (4.92 * a) + 5;
    console.log(`Height: ${h}, Weight: ${w}, Age: ${a} = ${bmrM}`)
    return bmrM.toFixed(0);
};

const usCalcFemale = () => {
    //BMR = 10W + 6.25H - 5A + 5 (Men)
    const h = (((Number(ftIn.value)) + (Number(inIn.value)) / 10) * 30.48).toFixed(2); //to cm
    const w = poundsIn.value / 2.205; //converts to kg 86.1826
    const a = ageIn.value;
    const bmrM = (10 * w) + (6.25 * h) - (5 * a) - 161;
    return bmrM.toFixed(0);
};

const metricBmrMale = () => {
    const h = (Number(cmIn.value));
    const w = kgIn.value
    const a = metAgeIn.value;
    const metricBmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    return metricBmr.toFixed(2);
};

const metricBmrFemale = () => {
    //BMR = 10W + 6.25H - 5A - 161 (Women)
    const h = (Number(cmIn.value));
    const w = kgIn.value
    const a = metAgeIn.value;
    const metricBmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    return metricBmr.toFixed(2);
};

const resetInput = () => {
    inIn.value = '';
    ftIn.value = '';
    cmIn.value = '';
    metAgeIn.value = '';
    kgIn.value = '';
    poundsIn.value = '';
    ageIn.value = '';
    messageTxt.textContent = `Enter info above`
    resultsTxt.innerHTML = `<p id="results-txt">0</p>`;
    formulaTxt.textContent = ``;
};

usBtn.addEventListener('click', () => {
    unit = 'us';
    usBtn.classList.add('active');
    metricBtn.classList.remove('active');
    usIn.classList.remove('hide');
    metIn.classList.add('hide');
    resetInput();
    console.log(`Unit: ${unit}, Gender: ${gender}`);
});

metricBtn.addEventListener('click', () => {
    unit = 'metric';
    usBtn.classList.remove('active');
    metricBtn.classList.add('active');
    usIn.classList.add('hide');
    metIn.classList.remove('hide');
    resetInput();
    console.log(`Unit: ${unit}, Gender: ${gender}`);
});

maleBtn.addEventListener('click', () => {
    gender = 'm';
    maleBtn.classList.add('active');
    femaleBtn.classList.remove('active');
    resetInput();
    console.log(`Unit: ${unit}, Gender: ${gender}`);
});

femaleBtn.addEventListener('click', () => {
    gender = 'f';
    maleBtn.classList.remove('active');
    femaleBtn.classList.add('active');
    resetInput();
    console.log(`Unit: ${unit}, Gender: ${gender}`);
});

calcBtn.addEventListener('click', () => {
    if(unit === 'us' && gender === 'm') {
        messageTxt.textContent = `Estimated resting calories burned per day:`
        resultsTxt.innerHTML = `${usCalcMale()}`;
        formulaTxt.textContent = `BMR = 9.99W + 6.25H - 4/92A + 5`
    }else if (unit == 'us' && gender === 'f') {
        messageTxt.textContent = `Estimated resting calories burned per day:`
        resultsTxt.innerHTML = `${usCalcFemale()}`;
        formulaTxt.textContent = `BMR = 10W + 6.25H - 5A - 161`
    }else if (unit === 'metric' && gender === 'm') {
        messageTxt.textContent = `Estimated resting calories burned per day:`
        resultsTxt.innerHTML = `${Number(metricBmrMale())}`;
        formulaTxt.textContent = `BMR = 10W + 6.25H - 5A + 5`
    }else if (unit === 'metric' && gender === 'f') {
        messageTxt.textContent = `Estimated resting calories burned per day:`
        resultsTxt.innerHTML = `${Number(metricBmrFemale())}`;
        formulaTxt.textContent = `BMR = 10W + 6.25H - 5A - 161`
    };
});

resetBtn.addEventListener('click', () => {
    resetInput();
    // console.log(`Unit: ${unit}, Gender: ${gender}`);
});