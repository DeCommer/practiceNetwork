const year = document.querySelectorAll('.year');
year.forEach(year => {
    yearText = new Date().getFullYear();
    year.textContent = yearText;
})

const randNum = document.querySelectorAll(".randNum");
setInterval(() =>{
    randNum.forEach(randNum => {
    let num = Math.floor(Math.random() * 90 + 10);
    randNum.innerHTML = `${num}`;
});
}, 500)

// const modeBtn = document.querySelector('#mode-btn');
// modeBtn.addEventListener('click', () => {
//     const theme = document.getElementsByTagName('link')[0]; 
//     if (theme.getAttribute('href') == './css/main.css') { 
//         theme.setAttribute('href', './css/dark.css');
//         modeBtn.innerHTML = '🌕';
//     } else { 
//         theme.setAttribute('href', './css/main.css');
//         modeBtn.innerHTML = '🌑'; 
//     } 
// });