const coinIcon = document.getElementById('coin');
const tossBtn = document.getElementById('flip-button');
const resetBtn = document.getElementById('reset-button');
const result = document.getElementById('result');
const flipCountTxt = document.getElementById('flip-count');
const headsCountTxt = document.getElementById('heads-count');
const tailsCountTxt = document.getElementById('tails-count');
const simFlipCountTxt = document.getElementById('sim-flip-count');
const simHeadsCountTxt = document.getElementById('sim-heads-count');
const simTailsCountTxt = document.getElementById('sim-tails-count');
const headsPercentTxt = document.getElementById('heads-percent');
const tailsPercentTxt = document.getElementById('tails-percent');
const simHeadsPercentTxt = document.getElementById('sim-heads-percent');
const simTailsPercentTxt = document.getElementById('sim-tails-percent');
const arrayText = document.getElementById('array-txt');
const simArrayText = document.getElementById('sim-array-txt');
const numberOfFlipsIn = document.getElementById('number-of-flips-in');
const flipsSimBtn = document.getElementById('flip-sim-btn');
const resetSimBtn = document.getElementById('reset-sim-btn');
const simMessage = document.getElementById('message');

let flips = 0;
let heads = 0;
let tails = 0;
let headsPercent = 0;
let tailsPercent = 0;
let htArray = [];
let simHtArray = [];

tossBtn.addEventListener('click', () => { 
	coinFlipper9000(); 
	tossBtn.disabled = true; 
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
    result.innerHTML = `<span>H</span><br>Result`;
    flipCountTxt.innerHTML = `<span>0</span><br>Flips`;
    headsCountTxt.innerHTML = `<span>0</span><br>Heads`;
    tailsCountTxt.innerHTML = `<span>0</span><br>Tails`;
    headsPercentTxt.innerHTML = `<span>0.00%</span><br>Heads`;
    tailsPercentTxt.innerHTML = `<span>0.00%</span><br>Tails`;
});

const coinFlipper9000 = () => { 
	const randomVal = Math.random(); 
	const faceCoin = randomVal < 0.5 ? 'H' : 'T'; 
	const imageUrl = faceCoin === 'H' ? './assets/img/heads.png' : './assets/img/tails.png';
    flips += 1;
	coinIcon.classList.add('flip'); 
	setTimeout(() => { 
		coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`; 
		coinIcon.classList.remove('flip'); 
		setTimeout(() => { 
			result.innerHTML = `<span>${faceCoin}</span><br>Result`; 
			tossBtn.disabled = false; 
        if(faceCoin === 'H') {
            heads +=1;
            headsCountTxt.innerHTML = `<span>${heads}</span><br>Heads`;
            percentCalc();
            htArray.push(' H');
            arrayText.textContent  = htArray;
        }else if(faceCoin === 'T'){
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

const simulateNFlips = () => {
    simHtArray = [];
    var headsCount = 0;
    var tailsCount = 0;
    for (let i = 0; i < numberOfFlipsIn.value; i++) {
        let outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        if (outcome === 'Heads') {
            headsCount++;
            simHtArray.push(' H');
        } else {
            tailsCount++;
            simHtArray.push(' T');
        }
    }
    if(numberOfFlipsIn.value >= 181) {
        simMessage.textContent = ('🔻Scroll to see full results🔻');
    }else {
        simMessage.textContent = ('');
    };
    console.log(simHtArray);
    var headsPercentage = (headsCount / numberOfFlipsIn.value * 100).toFixed(2);
    var tailsPercentage = (tailsCount / numberOfFlipsIn.value * 100).toFixed(2);
    // console.log(`Number of flips: ${numberOfFlipsIn.value}.`)
    // console.log(`Heads Percentage: ${headsPercentage}%, Tails Percentage: ${tailsPercentage}%`)
    simFlipCountTxt.innerHTML = `<span>${numberOfFlipsIn.value}</span><br>Flips`
    simHeadsCountTxt.innerHTML = `<span>${headsCount}</span><br>Heads`
    simTailsCountTxt.innerHTML = `<span>${tailsCount}</span><br>Tails`
    simHeadsPercentTxt.innerHTML = `<span>${headsPercentage}%</span><br>Heads`;
    simTailsPercentTxt.innerHTML = `<span>${tailsPercentage}%</span><br>Tails`;
    simArrayText.textContent = simHtArray;
};

flipsSimBtn.addEventListener('click', () => {
    if(numberOfFlipsIn.value === '') {
        simMessage.textContent = ('Enter a value');
        setInterval(() =>{
            simMessage.textContent = ('');
        }, 1500)
    } else {
        simulateNFlips();
    }
});

resetSimBtn.addEventListener('click', () => {
    simHtArray = [];
    simMessage.textContent = ('')
    numberOfFlipsIn.value = ''
    simFlipCountTxt.innerHTML = `<span>0</span><br>Flips`
    simHeadsCountTxt.innerHTML = `<span>0</span><br>Heads`
    simTailsCountTxt.innerHTML = `<span>0</span><br>Tails`
    simHeadsPercentTxt.innerHTML = `<span>0.00%</span><br>Heads`;
    simTailsPercentTxt.innerHTML = `<span>0.00%</span><br>Tails`;
    simArrayText.textContent = '';
});

const binomBtn = document.getElementById('binom-btn');
const binomReset = document.getElementById('binom-reset-btn');

let myChart = null;

const simulate = () => {
    const flips = parseInt(document.getElementById('flips').value);
    const trials = parseInt(document.getElementById('trials').value);
    const ctx = document.getElementById('myChart').getContext('2d');
    const labels = [];
    let results = new Array(flips + 1).fill(0);

    for (let i = 0; i < trials; i++) {
        let heads = 0;
        for (let j = 0; j < flips; j++) {
            if (Math.random() < 0.5) {
                heads++;
            }
        }
        results[heads]++;
    }

    for (let i = 0; i <= flips; i++) {
        labels.push(i.toString());
    }

    const data = {
        labels: labels,
        datasets: [{
            label: 'Number of Heads',
            data: results,
            backgroundColor: '#42e31aff',
            borderColor: '#27830f',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff',
                        font: {
                            size: 20
                          }
                    }
                }
            },
            scales: {
                y: {
                    ticks: { color: '#fff', beginAtZero: true}
                },
                x: {
                    ticks: { color: '#fff', beginAtZero: true}
                }
            }
        }
    };

    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, config);
}

binomBtn.addEventListener('click', () =>{
    simulate();
});

binomReset.addEventListener('click', () => {
    myChart.destroy();
});



