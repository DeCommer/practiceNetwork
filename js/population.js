// const worldPopTxt = document.getElementById('world-pop-txt');
// const usPopTxt = document.getElementById('us-pop-txt');

// let startWorldPop = 8048729900;

// const startPop = () => {
//     startWorldPop++;
//     worldPopTxt.innerHTML =  `${startWorldPop}`;
// }
// setInterval(startPop, 1500);

let population = 8_168_924_892; 
const growthRatePerSecond = 2.4;
const worldPopTxt = document.getElementById('world-pop-txt');

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const updatePopulation = () => {
    const secondsSinceLoad = (new Date().getTime() - startTime) / 1000;
    const currentPopulation = population + (secondsSinceLoad * growthRatePerSecond);
    worldPopTxt.textContent = formatNumber(Math.floor(currentPopulation));
}

const startTime = new Date().getTime();
updatePopulation();
setInterval(updatePopulation, 1000);

