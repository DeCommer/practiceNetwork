const feet = document.getElementById('feet-input');
const inches = document.getElementById('inch-input');
const weight = document.getElementById('pounds-input')
const calc_btn = document.getElementById('calc-btn');
const results = document.getElementById('results-txt');
const message = document.getElementById('message-txt');
const body = document.getElementById('entered-txt');

calc_btn.addEventListener('click', () => {
    const totalHeightInInches = (Number(feet.value) * 12) + Number(inches.value);
    const bmi = (Number(weight.value) / ((totalHeightInInches) ** 2) * 703).toFixed(1);

    const test = () =>{
        results.classList.remove('hidden');
        results.textContent = `Your BMI is: ${bmi}`;
        message.classList.remove('hidden');
        body.classList.remove('hidden');
        body.textContent = `Height: ${feet.value}' ${inches.value}'' Weight: ${weight.value}lbs`;
    }

    if(bmi < 18.5) {
        test();
        message.textContent = `You are underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        test();
        message.textContent = `You are at a healthy weight`;
    } else if(bmi > 25 && bmi < 29.9) {
        test();
        message.textContent = `You are overweight`;
    } else {
        test();
        message.textContent = `You are obese`;
    }


    feet.value = '';
    inches.value = '';
    weight.value = '';
});