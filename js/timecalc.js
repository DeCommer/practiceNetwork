const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const addSubClearBtn = document.getElementById('as-clear-btn');
const diffSwitchBtn = document.getElementById('diff-switch-btn');
const addSubSwitchBtn = document.getElementById('addsub-switch-btn');
const resultsArea = document.querySelector('.results-area');
const diffResultsArea = document.querySelector('.diff-results-area');

diffSwitchBtn.addEventListener('click', () => {
    document.getElementById('diff-container').classList.remove('apps-container-hidden');
    document.getElementById('add-sub-container').classList.add('apps-container-hidden');
});

addSubSwitchBtn.addEventListener('click', () => {
    document.getElementById('add-sub-container').classList.remove('apps-container-hidden');
    document.getElementById('diff-container').classList.add('apps-container-hidden');
});

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
        document.getElementById('message').innerHTML = `Please enter a valid time`;
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
    return hoursDiff, minutesDiff
}

enterBtn.addEventListener('click', () => {
    diffResultsArea.classList.remove('hide');
    calculateDifference();
});

const originalTimeDisplay = () => {
    let hours = parseInt(document.getElementById('hours1-add').value);
    let minutes = parseInt(document.getElementById('minutes1-add').value);
    let minutesAdded = parseInt(document.getElementById('add-minutes1-add').value);
    let originalTimeText = document.getElementById('original-time');
    let ampm = document.getElementById('ampm3').value;
    if(isNaN(hours) || isNaN(minutes) || isNaN(minutesAdded)) {
        document.getElementById('add-message').innerHTML = `Please enter a valid time`;
        setTimeout(() => {
            document.getElementById('add-message').innerHTML = ``;
            result.innerHTML = '';
        }, 1500);
    }else {
       originalTimeText.innerHTML = `Previous time entered: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
    }
    return originalTimeText
}

clearBtn.addEventListener('click', () => {
    diffResultsArea.classList.add('hide');
    hours1.value = ''; 
    hours2.value = '';
    minutes1.value = ''; 
    minutes2.value  = '';
    ampm1.value, ampm2.value = 'AM'
    document.getElementById('message').innerHTML = ``;
    document.getElementById('result').innerHTML = ``;
    document.getElementById('total-mins').innerHTML = ``
});

const addTime = () => {
    let hours = parseInt(document.getElementById('hours1-add').value);
    let minutes = parseInt(document.getElementById('minutes1-add').value);
    let ampm = document.getElementById('ampm3').value;
    let minutesAdded = parseInt(document.getElementById('add-minutes1-add').value);
    let addedMinsDisplay = document.getElementById('added-minutes');
    let result = document.getElementById('time-after-addition');

    if (ampm === "PM" && hours !== 12) {
        hours += 12;
    } else if (ampm === "AM" && hours === 12) {
        hours = 0;
    }

    let originalTime = originalTimeDisplay();

    minutes += minutesAdded;
    
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    
    hours = hours % 24;
    
    newAmpm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    
    let newTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${newAmpm}`;

    if(isNaN(hours) || isNaN(minutes) || isNaN(minutesAdded)) {
        document.getElementById('add-message').innerHTML = `Please enter a valid time`;
        setTimeout(() => {
            document.getElementById('add-message').innerHTML = ``;
            result.innerHTML = '';
        }, 1500);
    }else {
        originalTime.originalTimeText;
        addedMinsDisplay.innerHTML = `+ ${minutesAdded} minutes`;
        addedMinsDisplay.style.color = '#2cdb00';
        document.getElementById('add-message').innerHTML = `The new time is:`;
        result.innerHTML = newTime;
    }

    return { hours, minutes, newAmpm };
}

const subTime = () => {
    let hours = parseInt(document.getElementById('hours1-add').value);
    let minutes = parseInt(document.getElementById('minutes1-add').value);
    let ampm = document.getElementById('ampm3').value;
    let minutesSubtracted = parseInt(document.getElementById('add-minutes1-add').value);
    let addedMinsDisplay = document.getElementById('added-minutes');
    let result = document.getElementById('time-after-addition');

    if (ampm === "PM" && hours !== 12) {
        hours += 12;
    } else if (ampm === "AM" && hours === 12) {
        hours = 0;
    }

    let originalTime = originalTimeDisplay();

    minutes -= minutesSubtracted;
    
    while (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }

    if (hours < 0) {
        hours = 24 + (hours % 24);
    }
    
    newAmpm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    
    let newTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${newAmpm}`;

    if(isNaN(hours) || isNaN(minutes) || isNaN(minutesSubtracted)) {
        document.getElementById('add-message').innerHTML = `Please enter a valid time`;
        setTimeout(() => {
            document.getElementById('add-message').innerHTML = ``;
            result.innerHTML = '';
        }, 1500);
    }else {
        originalTime.originalTimeText;
        addedMinsDisplay.innerHTML = `- ${minutesSubtracted} minutes`;
        addedMinsDisplay.style.color = '#ff5500';
        document.getElementById('add-message').innerHTML = `The new time is:`;
        result.innerHTML = newTime;
    }

    return { hours, minutes, newAmpm };
}

const updateAddTime = () => {
    const newTime = addTime();
    document.getElementById('hours1-add').value = String(newTime.hours).padStart(2, '');
    document.getElementById('minutes1-add').value = String(newTime.minutes).padStart(2, '0');
    document.getElementById('ampm3').value = newTime.newAmpm;
};

const updateSubTime = () => {
    const newTime = subTime();
    document.getElementById('hours1-add').value = String(newTime.hours).padStart(2, '');
    document.getElementById('minutes1-add').value = String(newTime.minutes).padStart(2, '0');
    document.getElementById('ampm3').value = newTime.newAmpm;
};

addBtn.addEventListener('click', () => {
    resultsArea.classList.remove('hide');
    addTime();
    updateAddTime();
});

subBtn.addEventListener('click', () => {
    resultsArea.classList.remove('hide');
    subTime();
    updateSubTime();
});

addSubClearBtn.addEventListener('click', () => {
    resultsArea.classList.add('hide');
    document.getElementById('hours1-add').value = '';
    document.getElementById('minutes1-add').value = '';
    document.getElementById('add-minutes1-add').value = '';
    document.getElementById('ampm3').value = 'AM';
    document.getElementById('add-message').innerHTML = '';
    document.getElementById('added-minutes').innerHTML = ''; 
    document.getElementById('time-after-addition').innerHTML = '';
    document.getElementById('original-time').innerHTML = ''; 
});