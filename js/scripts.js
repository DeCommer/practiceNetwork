const year = document.querySelectorAll('.year');
year.forEach(year => {
    yearText = new Date().getFullYear();
    year.textContent = yearText;
})

// const randNum = document.querySelectorAll(".randNum");
// setInterval(() =>{
//     randNum.forEach(randNum => {
//     let num = Math.floor(Math.random() * 90 + 10);
//     randNum.innerHTML = `${num}`;
// });
// }, 500)

let url = window.location.href;
console.log(url)

if(url.includes("10.0.0") || url.includes("127.0.0.1")) {
    document.querySelector(".title").innerHTML = `Joseph DeCommer (Local)`;
    console.log("local");
}else {
    console.log('online');
}

var toggle = document.getElementById("theme-toggle");
const icon = document.querySelector(".theme-icon");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    icon.innerHTML = `🌑` ;
    if (currentTheme === "light") {
        targetTheme = "dark";
        icon.innerHTML = `🌕` ;
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

function displayTime() {
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        // const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const secs = `${seconds}`;
        document.getElementById('seconds').innerHTML = secs;
        const currentTime = `${String(hours).padStart(2, '0')}.${minutes}`;
        document.getElementById('time').innerHTML =currentTime;
    };
    updateTime();
    setInterval(updateTime, 1000);
}

function displayMobileTime() {
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        // const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const secs = `${seconds}`;
        document.getElementById('mobile-seconds').innerHTML = secs;
        const currentTime = `${String(hours).padStart(2, '0')}.${minutes}`;
        document.getElementById('mobile-time').innerHTML =currentTime;
    };
    updateTime();
    setInterval(updateTime, 1000);
}

displayTime();
displayMobileTime();

displayTime();
displayMobileTime();
