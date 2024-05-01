const dispType = document.getElementById('dispType');
const input = document.getElementById('input');
const miBtn = document.getElementById('mi-btn');
const kmBtn = document.getElementById('km-btn');
const enterBtn = document.getElementById('enterBtn');
const clearBtn = document.getElementById('clear-btn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const formula = document.getElementById('formula')
const resultTempTxt = document.getElementById('result-temp-txt');

let state = 'miles';

miBtn.addEventListener('click', () => {
    state = 'miles';
    dispType.textContent = 'mi - km'
    miBtn.classList.add('active');
    kmBtn.classList.remove('active');
});

kmBtn.addEventListener('click', () => {
    dispType.textContent = 'km - mi'
    state = 'kilometers';
    kmBtn.classList.add('active');
    miBtn.classList.remove('active');
})

enterBtn.addEventListener('click', () => {
    if(input.value === '') {
        formula.textContent = "Please enter a numeric value";
        setTimeout(() => {
            formula.textContent = "";
        }, 1500);
    }else if(state === 'miles') {
        let mi = input.value
        toKm = mi * 1.609;
        message.textContent = `${input.value} miles equals`
        resultTempTxt.innerHTML = `${toKm.toFixed(2)}<span>km</span>`;
        formula.textContent = `Formula: miles x 1.609 = kilometers`;
    }else if (state === 'kilometers') {
        let km = input.value
        toMi = km / 1.609;
        message.textContent = `${input.value} kilometers equals`
        resultTempTxt.innerHTML = `${toMi.toFixed(2)}<span>mi</span>`;
        formula.textContent = `Formula: kilometers / 1.609 = miles`;
    }
});

clearBtn.addEventListener('click', () => {
    state = 'miles';
    input.value = '';
    dispType.textContent = 'mi - km';
    message.textContent = ``;
    resultTempTxt.textContent = `0`;
    formula.textContent = ``;
});


// let convertType = "miles";
// const heading = document.querySelector('h1');
// const intro = document.querySelector('p');
// const answerDiv = document.getElementById('convert');
// const form = document.getElementById('convert');
// const instruct = document.getElementById('instructions');

// document.addEventListener('keydown', function(e) {
//     let key = e.code
//     if(key == 'KeyK') {
//         convertType = 'kilometers';
//         heading.innerHTML = "Kilometers to Miles Converter"
//         intro.innerHTML = "Type in a number to convert Km to Mi"
        
//     } else if( key == 'KeyM') {
//         convertType = 'miles';
//         heading.innerHTML = "Miles to Kilometer Converter"
//         intro.innerHTML = "Type in a number to convert Mi to Km"
//     }
// });
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const distance = parseFloat(document.getElementById('distance').value);
//     if(distance) {
//         if(convertType == "miles") {
//             const converted = (distance * 1.609344).toFixed(3);
//             answer.innerHTML = `${distance} miles equals ${converted} kilometers`;
//         }
//         else {
//             const converted = (distance * 0.621371192).toFixed(3);
//             answer.innerHTML = `${distance} kilometers equals ${converted} miles`
//         }
//     }
//     else {
//         instruct.innerHTML = "<p>Enter a number</p>";
//         answerDiv.reset();
//         setTimeout(() => {
//             const element = instruct.innerHTML = "<p>Press k for kilometer conversion or m for mile conversion</p>";
//             element.remove();
//         }, 1200);

//     }
// });
