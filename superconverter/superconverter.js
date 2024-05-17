const typeSelector = document.getElementById('type-selector');
const input = document.getElementById('input');
const from = document.getElementById('from');
const to = document.getElementById('to');
const result = document.getElementById('result');
const swapBtn = document.getElementById('swap-btn');
const formula = document.getElementById('formula');

let state = 'area';
let unit = '';

const convert = () => {
    if(typeSelector.value === 'area') {
        if(from.value === 'sqk' && to.value === 'sqk') {
            const kmToKm = (input.value) * 1;
            result.innerHTML = `<p>${kmToKm}</p><span class="result-span">Square Kilometer</span>`;
            formula.innerHTML = `<p><span>Formula</span>multiply the area value by 1</p>`
        }else if(from.value === 'sqk' && to.value === 'sqm') {
            const kmToM = (input.value) * 1000000;
            result.innerHTML = `<p>${kmToM}</p><span class="result-span">Square Meters</span>`;
            formula.innerHTML = `<p><span>Formula</span>multiply the area value by 1000000</p>`
        }else {
            result.innerHTML = `<p>0</p><span class="result-span">Enter Value</span>`;
            formula.innerHTML = `<p><span>Formula</span></p>`
        }
    }
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
