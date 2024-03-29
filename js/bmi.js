const feet = document.getElementById('feet-input');
const inches = document.getElementById('inch-input');
const weight = document.getElementById('pounds-input')
const calc_btn = document.getElementById('calc-btn');



calc_btn.addEventListener('click', () => {
    const totalHeight = (Number(feet.value) * 12) + Number(inches.value);
    const bmi = (Number(weight.value) / ((totalHeight) ** 2) * 703).toFixed(1);
    console.log(`Your bmi is ${bmi}`);

    if(bmi < 18.5) {
        console.log(`You are underweight`);
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log(`You are at a healthy weight`);
    } else if(bmi > 25 && bmi < 29.9) {
        console.log(`You are overweight`);
    } else {
        console.log(`You are obese`);
    }
});