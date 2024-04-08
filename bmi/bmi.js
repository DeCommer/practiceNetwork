const feet = document.getElementById('feet-input');
const inches = document.getElementById('inch-input');
const weight = document.getElementById('pounds-input')
const calc_btn = document.getElementById('calc-btn');
const resultsTxt = document.getElementById('results-txt');
const message = document.getElementById('message-txt');
const body = document.getElementById('entered-txt');
const results = document.querySelector('.results-area');
const indicator_1 = document.getElementById('ind-1');
const indicator_2 = document.getElementById('ind-2');
const indicator_3 = document.getElementById('ind-3');
const indicator_4 = document.getElementById('ind-4');

calc_btn.addEventListener('click', () => {
    const totalHeightInInches = (Number(feet.value) * 12) + Number(inches.value);
    const bmi = (Number(weight.value) / ((totalHeightInInches) ** 2) * 703).toFixed(1);
    
    const displayResults = () =>{
        results.classList.remove('hidden');
        resultsTxt.textContent = `${bmi}`;
        // body.textContent = `Height: ${feet.value}' ${inches.value}'' Weight: ${weight.value}lbs`;
        console.log(bmi);
    }

    if(feet.value == '' || inches.value == '' && weight.value == '') {
        results.classList.remove('hidden');
        message.textContent = `Enter your info above`
        setTimeout(() => {
            results.classList.add('hidden');
        },2000);
    }else if(bmi < 18.5) {
        displayResults();
        resultsTxt.style.color = '#06d6ff';
        indicator_1.textContent = '🔻';
        indicator_2.textContent = '';
        indicator_3.textContent = '';
        indicator_4.textContent = '';
        message.innerHTML = `You are <span>Underweight</span>`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        displayResults();
        resultsTxt.style.color = '#27ff06'
        message.innerHTML = `You are <span>Healthy</span>`;
        indicator_1.textContent = '';
        indicator_2.textContent = '🔻';
        indicator_3.textContent = '';
        indicator_4.textContent = '';
    } else if(bmi > 24.9 && bmi < 29.9) {
        displayResults();
        resultsTxt.style.color = '#fffb06'
        message.innerHTML = `You are <span>overweight</span>`;
        indicator_1.textContent = '';
        indicator_2.textContent = '';
        indicator_3.textContent = '🔻';
        indicator_4.textContent = '';
    } else {
        displayResults();
        resultsTxt.style.color = '#c1121f'
        message.innerHTML = `You are <span>Obese</span>`;
        indicator_1.textContent = '';
        indicator_2.textContent = '';
        indicator_3.textContent = '';
        indicator_4.textContent = '🔻';
    }
});
const resetbtn = document.querySelector('.reset-btn');

resetbtn.addEventListener('click', () => {
    feet.value = '';
    inches.value = '';
    weight.value = '';
    resultsTxt.textContent = 0;
    message.textContent = 'Enter info above';
    resultsTxt.style.color = ''
    indicator_1.textContent = '';
    indicator_2.textContent = '';
    indicator_3.textContent = '';
    indicator_4.textContent = '';
});