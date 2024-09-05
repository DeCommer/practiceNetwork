// Helper functions
const getElement = id => document.getElementById(id);
const getQueryElement = selector => document.querySelector(selector);

const toggleVisibility = (showId, hideId) => {
    getElement(showId).classList.remove('apps-container-hidden');
    getElement(hideId).classList.add('apps-container-hidden');
};

const getTimeValues = (prefix) => {
    return {
        hours: parseInt(getElement(`${prefix}-hours`).value),
        minutes: parseInt(getElement(`${prefix}-minutes`).value),
        ampm: getElement(`${prefix}-ampm`).value
    };
};

const convertTo24HourFormat = (hours, ampm) => {
    if (ampm === 'PM' && hours !== 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
    return hours;
};

const formatTime = (hours, minutes) => {
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
};

const updateMessage = (elementId, message, clearAfter = 1500) => {
    const messageElem = getElement(elementId);
    messageElem.innerHTML = message;
    if (clearAfter) {
        setTimeout(() => messageElem.innerHTML = '', clearAfter);
    }
};

// Event listeners
getElement('diff-switch-btn').addEventListener('click', () => {
    toggleVisibility('diff-container', 'add-sub-container');
});

getElement('addsub-switch-btn').addEventListener('click', () => {
    toggleVisibility('add-sub-container', 'diff-container');
});

getElement('enter-btn').addEventListener('click', () => {
    getQueryElement('.diff-results-area').classList.remove('hide');
    calculateDifference();
});

getElement('clear-btn').addEventListener('click', () => {
    getQueryElement('.diff-results-area').classList.add('hide');
    ['hours1', 'hours2', 'minutes1', 'minutes2'].forEach(id => getElement(id).value = '');
    ['ampm1', 'ampm2'].forEach(id => getElement(id).value = 'AM');
    updateMessage('message', '');
    updateMessage('result', '');
    updateMessage('total-mins', '');
});

getElement('add-btn').addEventListener('click', () => {
    getQueryElement('.results-area').classList.remove('hide');
    const { hours, minutes, ampm } = getTimeValues('hours1-add');
    const minutesAdded = parseInt(getElement('add-minutes1-add').value);
    const resultElem = getElement('time-after-addition');
    const addedMinsDisplay = getElement('added-minutes');

    if (isNaN(hours) || isNaN(minutes) || isNaN(minutesAdded)) {
        updateMessage('add-message', 'Please enter a valid time');
        resultElem.innerHTML = '';
        return;
    }

    hours = convertTo24HourFormat(hours, ampm);
    minutes += minutesAdded;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    
    const newTime = formatTime(hours, minutes);
    addedMinsDisplay.innerHTML = `+ ${minutesAdded} minutes`;
    addedMinsDisplay.style.color = '#2cdb00';
    updateMessage('add-message', 'The new time is:');
    resultElem.innerHTML = newTime;
    
    getElement('hours1-add').value = String(hours).padStart(2, '');
    getElement('minutes1-add').value = String(minutes).padStart(2, '0');
    getElement('ampm3').value = newTime.includes('PM') ? 'PM' : 'AM';
});

getElement('sub-btn').addEventListener('click', () => {
    getQueryElement('.results-area').classList.remove('hide');
    const { hours, minutes, ampm } = getTimeValues('hours1-add');
    const minutesSubtracted = parseInt(getElement('add-minutes1-add').value);
    const resultElem = getElement('time-after-addition');
    const addedMinsDisplay = getElement('added-minutes');

    if (isNaN(hours) || isNaN(minutes) || isNaN(minutesSubtracted)) {
        updateMessage('add-message', 'Please enter a valid time');
        resultElem.innerHTML = '';
        return;
    }

    hours = convertTo24HourFormat(hours, ampm);
    minutes -= minutesSubtracted;
    while (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }
    if (hours < 0) hours = 24 + (hours % 24);

    const newTime = formatTime(hours, minutes);
    addedMinsDisplay.innerHTML = `- ${minutesSubtracted} minutes`;
    addedMinsDisplay.style.color = '#ff5500';
    updateMessage('add-message', 'The new time is:');
    resultElem.innerHTML = newTime;

    getElement('hours1-add').value = String(hours).padStart(2, '');
    getElement('minutes1-add').value = String(minutes).padStart(2, '0');
    getElement('ampm3').value = newTime.includes('PM') ? 'PM' : 'AM';
});

getElement('as-clear-btn').addEventListener('click', () => {
    getQueryElement('.results-area').classList.add('hide');
    ['hours1-add', 'minutes1-add', 'add-minutes1-add'].forEach(id => getElement(id).value = '');
    getElement('ampm3').value = 'AM';
    updateMessage('add-message', '');
    updateMessage('added-minutes', '');
    updateMessage('time-after-addition', '');
    updateMessage('original-time', '');
});

// Calculate difference function
const calculateDifference = () => {
    const { hours: hours1, minutes: minutes1, ampm: ampm1 } = getTimeValues('hours1');
    const { hours: hours2, minutes: minutes2, ampm: ampm2 } = getTimeValues('hours2');

    const totalMinutes1 = convertTo24HourFormat(hours1, ampm1) * 60 + minutes1;
    const totalMinutes2 = convertTo24HourFormat(hours2, ampm2) * 60 + minutes2;
    let differenceMinutes = totalMinutes2 - totalMinutes1;

    if (differenceMinutes < 0) differenceMinutes += 24 * 60;

    const hoursDiff = Math.floor(differenceMinutes / 60);
    const minutesDiff = differenceMinutes % 60;

    let resultMessage = `The difference is: ${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} and ${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''}`;
    if (isNaN(hoursDiff) || isNaN(minutesDiff)) {
        resultMessage = 'Please enter a valid time';
    }

    updateMessage('message', resultMessage);
    updateMessage('result', resultMessage);
    updateMessage('total-mins', `Total Minutes: <span>${differenceMinutes}</span>`);
};
