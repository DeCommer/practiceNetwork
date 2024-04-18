//Percentage Calculator
const pcPercentIn = document.getElementById('pc-percent-in');
const pcValueIn = document.getElementById('pc-value-in');
const pcEnterBtn = document.getElementById('pc-enter-btn');
const pcResetBtn = document.getElementById('pc-reset-btn');
const pcFormula = document.getElementById('pc-formula');
const pcResult = document.getElementById('pc-result');
const pcMessage = document.getElementById('pc-message');


pcEnterBtn.addEventListener('click', () =>{
    const pcOut = (pcPercentIn.value / 100) * pcValueIn.value;
    pcResult.textContent = `${pcOut.toFixed(2)}`
    pcMessage.textContent = `${pcPercentIn.value}% of ${pcValueIn.value} is:`
    pcFormula.textContent = `Formula: (Percent / 100) x Value`
});

pcResetBtn.addEventListener('click', () =>{
    pcPercentIn.value = 50;
    pcValueIn.value = 100;
    pcMessage.textContent = ``
    pcResult.textContent = `0`
    pcFormula.textContent = ``
});

//Percentage Difference Calculator
const diffValue1 = document.getElementById('diff-val-1');
const diffValue2 = document.getElementById('diff-val-2');
const diffEnterBtn = document.getElementById('diff-enter-btn');
const diffResetBtn = document.getElementById('diff-reset-btn');
const diffFormula = document.getElementById('diff-formula');
const diffResult = document.getElementById('diff-result');
const diffMessage = document.getElementById('diff-message');

diffEnterBtn.addEventListener('click', () => {
    let numerator = Math.abs(Number(diffValue1.value) - Number(diffValue2.value));
    let denominator = ((Number(diffValue1.value) + Number(diffValue2.value)) / 2)
    const diffOut = ((numerator/denominator) * 100).toFixed(2);
    diffMessage.textContent = `The percent difference of ${diffValue1.value} and ${diffValue2.value} is`;
    diffResult.textContent = `${diffOut}%`
    diffFormula.textContent = `Formula: |value 1 - value 2| / ((value 1 + value 2) / 2)`
});

diffResetBtn.addEventListener('click', () =>{
    diffValue1.value = 50;
    diffValue2.value = 100;
    diffResult.textContent = `0`
    diffFormula.textContent = ``
    diffMessage.textContent = ``
});

//Percentage Change Calculator
const incrBtn = document.getElementById('incr-btn');
const decrBtn = document.getElementById('decr-btn');
const chngValueIn = document.getElementById('chng-value-in');
const chngPercentIn= document.getElementById('chng-percent-in');
const incrDecrText = document.getElementById('incr-decr-txt');
const chngEnterBtn = document.getElementById('chng-enter-btn');
const chngResetBtn = document.getElementById('chng-reset-btn');
const chngFormula = document.getElementById('chng-formula');
const chngResult = document.getElementById('chng-result');
const chngMessage = document.getElementById('chng-message');

let state = 'incr';

incrBtn.addEventListener('click', () => {
    state = 'incr'
    chngValueIn.value = 50;
    chngPercentIn.value = 100;
    chngMessage.textContent =  ``
    chngResult.textContent = `0`;
    incrBtn.classList.add('active');
    decrBtn.classList.remove('active');
    incrDecrText.textContent = 'Increased by';
});

decrBtn.addEventListener('click', () => {
    state = 'decr';
    chngValueIn.value = 50;
    chngPercentIn.value = 100;
    chngMessage.textContent =  ``
    chngResult.textContent = `0`;
    incrBtn.classList.remove('active');
    decrBtn.classList.add('active');
    incrDecrText.textContent = 'Decreased by';
});

chngEnterBtn.addEventListener('click', () => {
    if(state == 'incr') {
        const chngOut = Number(chngValueIn.value) * (1 + (Number(chngPercentIn.value) / 100));
        chngMessage.textContent =  `${chngValueIn.value} increased by ${chngPercentIn.value}% is:`
        chngResult.textContent = `${chngOut.toFixed(2)}`;
        chngFormula.textContent = `Formula: value * (1 + percent)`;
    }else if(state == 'decr') {
        const chngOut = Number(chngValueIn.value) * (1 - (Number(chngPercentIn.value) / 100));
        chngMessage.textContent =  `${chngValueIn.value} Decreased by ${chngPercentIn.value}% is:`
        chngResult.textContent = `${chngOut.toFixed(2)}`;
        chngFormula.textContent = `Formula: value * (1 - percent)`;
    }
});

chngResetBtn.addEventListener('click', () =>{
    chngValueIn.value = 50;
    chngPercentIn.value = 100;
    chngResult.textContent = `0`
    chngFormula.textContent = ``
    chngMessage.textContent = ``
});

//Common Phrases Calculator

