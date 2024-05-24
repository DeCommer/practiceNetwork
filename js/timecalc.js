const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');

const calculateDifference = () => {
    let hours1 = parseInt(document.getElementById('hours1').value);
    let minutes1 = parseInt(document.getElementById('minutes1').value);
    let ampm1 = document.getElementById('ampm1').value;
    let hours2 = parseInt(document.getElementById('hours2').value);
    let minutes2 = parseInt(document.getElementById('minutes2').value);
    let ampm2 = document.getElementById('ampm2').value;

    if (ampm1 === 'PM' && hours1 !== 12) {
        hours1 += 12;
    }
    if (ampm2 === 'PM' && hours2 !== 12) {
        hours2 += 12;
    }
    if (ampm1 === 'AM' && hours1 === 12) {
        hours1 = 0;
    }
    if (ampm2 === 'AM' && hours2 === 12) {
        hours2 = 0;
    }
    let totalMinutes1 = hours1 * 60 + minutes1;
    let totalMinutes2 = hours2 * 60 + minutes2;
    let differenceMinutes = totalMinutes2 - totalMinutes1;

    if (differenceMinutes < 0) {
        differenceMinutes += 24 * 60;
    }

    let hoursDiff = Math.floor(differenceMinutes / 60);
    let minutesDiff = differenceMinutes % 60;

    if(isNaN(hoursDiff) && isNaN(minutesDiff)) {
        document.getElementById('message').innerHTML = `Please enter a time`;
        setTimeout(() => {
            document.getElementById('message').innerHTML = ``;
        }, 1500);
    }else if(hoursDiff <= 1 && minutesDiff <= 1) {
        document.getElementById('message').innerHTML = `The difference is:`;
        document.getElementById('result').innerHTML = `${hoursDiff} hour and ${minutesDiff} minute`;
    }else if(hoursDiff <= 1 && minutesDiff >= 2) {
        document.getElementById('message').innerHTML = `The difference is:`;
        document.getElementById('result').innerHTML = `${hoursDiff} hour and ${minutesDiff} minutes`;
    }else if(hoursDiff >= 2 && minutesDiff <= 1) {
        document.getElementById('message').innerHTML = `The difference is:`;
        document.getElementById('result').innerHTML = `${hoursDiff} hours and ${minutesDiff} minute`;
    } else if(hoursDiff >= 2 && minutesDiff >= 2 ) {
        document.getElementById('message').innerHTML = `The difference is:`;
        document.getElementById('result').innerHTML = `${hoursDiff} hours and ${minutesDiff} minutes`;
    }
    if(isNaN(differenceMinutes)) {
        document.getElementById('total-mins').innerHTML = ``
    }else {
        document.getElementById('total-mins').innerHTML = `Total Minutes: <span>${differenceMinutes}</span>`
    }
}

enterBtn.addEventListener('click', () => {
    calculateDifference();
})

clearBtn.addEventListener('click', () => {
    hours1.value = '';
    minutes1.value = '';
    ampm1.value = 'AM'
    hours2.value = '';
    minutes2.value = '';
    ampm2.value = 'AM'
    document.getElementById('message').innerHTML = ``;
    document.getElementById('result').innerHTML = ``;
    document.getElementById('total-mins').innerHTML = ``
})








