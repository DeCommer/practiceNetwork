const userInput = document.getElementById('date');
const futureDate = new Date().toISOString().split('T')[0];
const message = document.getElementById('message');
const result = document.getElementById('result');
const additional = document.getElementById('additional');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');

const calculateAge = () => {
    let bd = new Date(userInput.value);
    let bdHours = bd.getHours(userInput.value);
    let bdMinutes = bd.getMinutes(userInput.value);
    let bdSeconds = bd.getSeconds(userInput.value);
    let d1 = bd.getDate();
    let m1 = bd.getMonth() + 1;
    let y1 = bd.getFullYear();
    let today = new Date();

    bdHours = (Math.abs(bd - Date.now()) / 36e5).toFixed(0);
    bdMinutes = (Math.abs(bd - Date.now()) / 1000 / 60).toFixed(0);
    bdSeconds = (Math.abs(bd - Date.now()) / 1000).toFixed(0);

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3; y3 = y2 - y1;

    if(bd > Date.now() || bd == 'Invalid Date') {
        result.innerHTML = `Invalid date`;
        setTimeout(() => {
            result.innerHTML = ``;
        }, 1500)
    } else {
        if(m2 >= m1) {
            m3 = m2 - m1;
        }else {
            y3--;
            m3 = 12 + m2 - m1;
        }
        if(d2 >= d1) {
            d3 = d2 - d1;
        }else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1; 
        }
        if(m3 < 0) {
            m3 = 11;
            y3--;
        }
        message.innerHTML = `You have been alive for:`;
        result.innerHTML = `${y3} <span class="span">years,</span> ${m3} <span class="span">months and</span> ${d3} <span class="span">days.</span>`;
        additional.innerHTML = 'That is:'
        days.innerHTML = `${formatNumber((bdHours / 24).toFixed(0))} <span class="span">Days</span>`;
        hours.innerHTML = `${formatNumber(bdHours)} <span class="span">hours</span>`;
        minutes.innerHTML = `${formatNumber(bdMinutes)} <span class="span">minutes and</span>`;
        function updateMinutes() {
            bdMinutes++;
            minutes.innerHTML = `${formatNumber(bdMinutes)} <span class="span">minutes and</span>`;
        }setInterval(updateMinutes, 60000);

        seconds.innerHTML = `${formatNumber(bdSeconds)} <span class="span">seconds</span">`;
        function updateSeconds() {
            bdSeconds++;
            seconds.innerHTML = `${formatNumber(bdSeconds)} <span class="span">seconds</span">`;
        }setInterval(updateSeconds, 1000);
    }
 }; 

 function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

 const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
 }

 const clear = () => {
    window.location.reload();
}

userInput.addEventListener('keypress', (e) => {if(e.key == 'Enter')calculateAge()});
enterBtn.addEventListener('click', calculateAge);
clearBtn.addEventListener('click', clear);

// const deathCountdown = (() => {
//     startTime = 
// })