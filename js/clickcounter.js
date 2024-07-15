let countNum = document.getElementById('count-num');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');

countNum.innerHTML = 0;

enterBtn.addEventListener('click', () => {
    countNum.innerHTML++;
});

clearBtn.addEventListener('click', () => {
    countNum.innerHTML = 0;
});
