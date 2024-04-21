const coinIcon = document.getElementById('coin');
const tossBtn = document.getElementById('toss-button');
const resetBtn = document.getElementById('reset-button');
const result = document.getElementById('result');
const flipCountTxt = document.getElementById('flip-count');
const headsCountTxt = document.getElementById('heads-count');
const tailsCountTxt = document.getElementById('tails-count');
const headsPercentTxt = document.getElementById('heads-percent');
const tailsPercentTxt = document.getElementById('tails-percent');
const arrayText = document.getElementById('array-txt');

let flips = 0;
let heads = 0;
let tails = 0;
let headsPercent = 0;
let tailsPercent = 0;
let htArray = [];

tossBtn.addEventListener('click', () => { 
	tossBtn.disabled = true; 
	filpCoin(); 
    flipCountTxt.innerHTML = `<span>${flips}</span><br>Flips`;
});

resetBtn.addEventListener('click', () => {
    flips = 0;
    heads = 0;
    tails = 0;
    headsPercent = 0;
    tailsPercent = 0;
    htArray = [];
    arrayText.textContent  = '';
    coinIcon.innerHTML = `<img src="./assets/img/heads.png" alt="Heads">`;
    result.innerHTML = `<span>-</span><br>Result`;
    flipCountTxt.innerHTML = `<span>0</span><br>Flips`;
    headsCountTxt.innerHTML = `<span>0</span><br>Heads`;
    tailsCountTxt.innerHTML = `<span>0</span><br>Tails`;
    headsPercentTxt.innerHTML = `<span>0.00%</span><br>Heads`;
    tailsPercentTxt.innerHTML = `<span>0.00%</span><br>Tails`;
    
});

const filpCoin = () => { 
	const randomVal = Math.random(); 
	const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails'; 
	const imageUrl = faceCoin === 'Heads' ? './assets/img/heads.png' : './assets/img/tails.png';
    flips += 1;

	coinIcon.classList.add('flip'); 
	setTimeout(() => { 
		coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`; 
		coinIcon.classList.remove('flip'); 
		setTimeout(() => { 
			result.innerHTML = `<span>${faceCoin}</span><br>Result`; 
			tossBtn.disabled = false; 
        if(faceCoin === 'Heads') {
            heads +=1;
            headsCountTxt.innerHTML = `<span>${heads}</span><br>Heads`;
            percentCalc();
            htArray.push(' H');
            arrayText.textContent  = htArray;
        }else if(faceCoin === 'Tails'){
            tails +=1;
            tailsCountTxt.innerHTML = `<span>${tails}</span><br>Tails`
            percentCalc();
            htArray.push(' T');
            arrayText.textContent  = htArray;
        }
		}, 100); 
	}, 400);
};

const percentCalc = () => {
    headsPercent = (heads / flips) * 100;
    tailsPercent = (tails / flips) * 100;
    headsPercentTxt.innerHTML = `<span>${headsPercent.toFixed(2)}%</span><br>Heads`;
    tailsPercentTxt.innerHTML = `<span>${tailsPercent.toFixed(2)}%</span><br>Tails`;
};
