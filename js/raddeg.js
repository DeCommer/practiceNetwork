const dispType = document.getElementById('dispType');
const input = document.getElementById('input');
const radBtn = document.getElementById('radBtn');
const degBtn = document.getElementById('degBtn');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('result');
const formula = document.getElementById('formula')
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'degrees';

radBtn.addEventListener('click', () => {
    state = 'radians';
    dispType.textContent = 'Rad - Deg'
    radBtn.classList.add('active');
    degBtn.classList.remove('active');
});

degBtn.addEventListener('click', () => {
    dispType.textContent = 'Deg - Rad'
    state = 'degrees';
    degBtn.classList.add('active');
    radBtn.classList.remove('active');
})

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        formula.textContent = "Please enter a value";
    }else if(state === 'degrees') {
        let deg = input.value
        toRad = ((deg * Math.PI) / 180).toFixed(3);
        resultTempTxt.textContent = `${toRad}`;
        formula.textContent = `Formula: ${deg}° x π/180 = ${toRad}rad`;
    }else if (state === 'radians') {
        let rad = input.value
        toDeg = ((rad * 180) / Math.PI).toFixed(3)
        resultTempTxt.textContent = `${toDeg}`;
        formula.textContent = `Formula: ${rad}rad x 180/π = ${toDeg}°`;
    }
});

clearBtn.addEventListener('click', () => {
    state = 'degrees';
    input.value = '';
    dispType.textContent = 'Deg - Rad';
});