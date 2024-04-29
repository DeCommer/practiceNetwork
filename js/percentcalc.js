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
    pcPercentIn.value = '';
    pcValueIn.value = '';
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
    diffValue1.value = '';
    diffValue2.value = '';
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
    chngValueIn.value = '';
    chngPercentIn.value = '';
    chngMessage.textContent =  ``
    chngResult.textContent = `0`;
    incrBtn.classList.add('active');
    decrBtn.classList.remove('active');
    incrDecrText.textContent = 'Increased by';
});

decrBtn.addEventListener('click', () => {
    state = 'decr';
    chngValueIn.value = '';
    chngPercentIn.value = '';
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
    chngValueIn.value = '';
    chngPercentIn.value = '';
    chngResult.textContent = `0`
    chngFormula.textContent = ``
    chngMessage.textContent = ``
});

//Common Phrases Calculator
const type_1_1 = document.getElementById('type-1-1');
const type_1_2 = document.getElementById('type-1-2');
const type_2_1 = document.getElementById('type-2-1');
const type_2_2 = document.getElementById('type-2-2');
const type_3_1 = document.getElementById('type-3-1');
const type_3_2 = document.getElementById('type-3-2');
const type1Btn = document.getElementById('type-1-btn');
const type2Btn = document.getElementById('type-2-btn');
const type3Btn = document.getElementById('type-3-btn');
const typeEnterBtn = document.getElementById('type-enter-btn');
const typeResetBtn = document.getElementById('type-reset-btn');
const typeMessage = document.getElementById('type-message');
const typeResult = document.getElementById('ype-result');
const typeFormula = document.getElementById('type-formula');
const inputQuestionTxt = document.getElementById('input-question-type');

let type = 1;

type1Btn.addEventListener('click', () => {
    type1Btn.classList.add('active');
    type2Btn.classList.remove('active');
    type3Btn.classList.remove('active');
    inputQuestionTxt.innerHTML = 'What is <input id="type-1-1" type="number" autocomplete="off">% of <input id="type-1-2" type="number" autocomplete="off">'
});

type2Btn.addEventListener('click', () => {
    type1Btn.classList.remove('active');
    type2Btn.classList.add('active');
    type3Btn.classList.remove('active');
    inputQuestionTxt.innerHTML = '<input id="type-2-1" type="number" autocomplete="off"> is what % of <input id="type-2-2" type="number" autocomplete="off">'
});

type3Btn.addEventListener('click', () => {
    type1Btn.classList.remove('active');
    type2Btn.classList.remove('active');
    type3Btn.classList.add('active');
    inputQuestionTxt.innerHTML = '<input id="type-3-1" type="number" autocomplete="off">is<input id="type-3-2" type="number" autocomplete="off">% of what'
});



