const input = document.getElementById('input');
const from = document.getElementById('from');
const to = document.getElementById('to');
const result = document.getElementById('result');
const swapBtn = document.getElementById('swap-btn');

const convert = () => {
    const convertedValue = (input.value) * 1000000;
    result.innerHTML = `<div class="result" id="result"><p>${convertedValue}</p><span class="result-span">Sq Meter</span></div>`;
};



to.addEventListener('change', convert);
from.addEventListener('change', convert);
input.addEventListener('input', convert);

swapBtn.addEventListener('click', () => {
    const fromVal = from.value;
    const toVal = to.value;
    from.value = toVal;
    to.value = fromVal;

    convert();
});

convert();
