const feet = document.getElementById('feet-input');
const inches = document.getElementById('inch-input');
const weight = document.getElementById('pounds-input')
const calc_btn = document.getElementById('calc-btn');
const resultsTxt = document.getElementById('results-txt');
const message = document.getElementById('message-txt');
const body = document.getElementById('entered-txt');
const results = document.querySelector('.results-area')
const underweight = document.querySelector('.underweight');
const normal = document.querySelector('.normal');
const overweight = document.querySelector('.overweight');
const obese = document.querySelector('.obese');

calc_btn.addEventListener('click', () => {
    const totalHeightInInches = (Number(feet.value) * 12) + Number(inches.value);
    const bmi = (Number(weight.value) / ((totalHeightInInches) ** 2) * 703).toFixed(1);
    
    const displayResults = () =>{
        results.classList.remove('hidden');
        resultsTxt.textContent = `Your BMI is: ${bmi}`;
        body.innerHTML = `<p>Height: ${feet.value}' ${inches.value}''</p><p>Weight: ${weight.value}lbs</p>`;
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
        toggleHighlights();
        underweight.classList.add('underweight-highlight');
        message.textContent = `You are underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        displayResults();
        toggleHighlights();
        normal.classList.add('normal-highlight');
        message.textContent = `You are at a healthy weight`;
    } else if(bmi > 24.9 && bmi < 29.9) {
        displayResults();
        toggleHighlights();
        overweight.classList.add('overweight-highlight');
        message.textContent = `You are overweight`;
    } else {
        displayResults();
        toggleHighlights();
        obese.classList.add('obese-highlight');
        message.textContent = `You are obese`;
    }
});

const toggleHighlights = () => {
    if(underweight.classList = 'underweight-highlight'){
        underweight.classList.remove('underweight-highlight');
        underweight.classList.add('tab-txt')
        normal.classList.remove('normal-highlight');
        overweight.classList.remove('overweight-highlight')
        obese.classList.remove('obese-highlight');
    }else if(normal.classList = 'normal-highlight') {
        underweight.classList.remove('underweight-highlight');
        normal.classList.remove('normal-highlight');
        overweight.classList.remove('overweight-highlight')
        obese.classList.remove('obese-highlight');
    }else if(overweight.classList = 'overweight-highlight') {
        underweight.classList.remove('underweight-highlight');
        normal.classList.remove('normal-highlight');
        overweight.classList.remove('overweight-highlight')
        obese.classList.remove('obese-highlight');
    }else if (obese.classList = 'obese-highlight') {
        underweight.classList.remove('underweight-highlight');
        normal.classList.remove('normal-highlight');
        overweight.classList.remove('overweight-highlight')
        obese.classList.remove('obese-highlight');
    }
}

const resetbtn = document.querySelector('.reset-btn');

resetbtn.addEventListener('click', () => {
    feet.value = '';
    inches.value = '';
    weight.value = '';
    results.classList.add('hidden');
    underweight.classList.remove('underweight-highlight');
    normal.classList.remove('normal-highlight');
    overweight.classList.remove('overweight-highlight');
    obese.classList.remove('obese-highlight');
})