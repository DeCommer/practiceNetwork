const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const res10E = document.getElementById('res1OE');
const res20E = document.getElementById('res2OE');
const res30E = document.getElementById('res3OE');
const res40E = document.getElementById('res4OE');
const plusResult = document.getElementById('plusResult');
const minResult = document.getElementById('minResult');
const timesResult = document.getElementById('timesResult');
const divResult = document.getElementById('divResult');

const calculate = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let oe1 = document.getElementById('num1OE');
    let oe2 = document.getElementById('num2OE');
    const plusRes = parseInt(num1) + parseInt(num2);
    const minRes = parseInt(num1) - parseInt(num2);
    const timesRes = parseInt(num1) * parseInt(num2);
    let divRes = parseInt(num1) / parseInt(num2);
    divRes = divRes.toFixed(2);

    if(num1 % 2 === 0) {
        oe1.innerHTML = "even";
    }
    else {
        oe1.innerHTML = "odd";
    }
    if( num2 % 2 === 0) {
        oe2.innerHTML = "even";
    }else {
        oe2.innerHTML = "odd";
    }

    plusResult.innerHTML = plusRes;
    if(plusRes % 2 == 0) {
        res10E.innerHTML = "even"
    }
    else {
        res10E.innerHTML = "odd"
    }
    minResult.innerHTML = minRes;
    if(minRes % 2 == 0) {
        res20E.innerHTML = "even"
    }
    else {
        res20E.innerHTML = "odd"
    }
    timesResult.innerHTML = timesRes;
    if(timesRes % 2 == 0) {
        res30E.innerHTML = "even"
    }
    else {
        res30E.innerHTML = "odd"
    }

    divResult.innerHTML = divRes;
    if(divRes % 2 == 0) {
        res40E.innerHTML = "even";
    }
    else if(divRes < 1){
        res40E.innerHTML = "decimal";
    }
    else { 
        res40E.innerHTML = "odd";
    }

    if(divRes == 'NaN') {
        divResult.innerHTML = 0;
        res40E.innerHTML = "even";
    }
};

calcBtn.addEventListener('click', calculate);

resetBtn.addEventListener('click', () => {
    window.location.reload();
});
