let n = parseInt(document.getElementById('n-in').value);
let k = parseInt(document.getElementById('k-in').value);
const result = document.getElementById('result');
const message = document.getElementById('message');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const pBtn = document.getElementById('permutation-switch-btn');
const cBtn = document.getElementById('combination-switch-btn');
const cMathText = document.getElementById("c-math-text");
const pMathText = document.getElementById("p-math-text");

// Add replacement feature later
// permutations with replacement = n^k
// combinations with replacement = (k + n - 1)! / k!(n-1)!

let state = "combinations";

function factorial(n) {
    let result = 1;
    if (n === 0 || n === 1) return 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function combinations(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function permutations(n, k) {
    return factorial(n) / factorial((n - k));
}

function cResult(n, k) {
    if(n < k) {
        message.innerHTML= `k must be smaller than n`
        setTimeout(() =>{
            message.innerHTML= ``;
        }, 1000);
    }else {
        result.innerHTML = formatNumber(combinations(n, k));
        cMathText.classList.remove("hide");
        pMathText.classList.add("hide");
    }
}

function pResult(n, k) {
    if(n < k) {
        message.innerHTML= `k must be smaller than n`
        setTimeout(() =>{
            message.innerHTML= ``;
        }, 1000);
    }else {
        result.innerHTML = formatNumber(permutations(n,k));
        pMathText.classList.remove("hide");
        cMathText.classList.add("hide");
    }
}

cBtn.addEventListener('click', () => {
    let n = parseInt(document.getElementById('n-in').value);
    let k = parseInt(document.getElementById('k-in').value);
    cResult(n, k);
    state = "combinations";
    document.getElementById('title').innerHTML = `Combinations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does not</u> matter`;
    cBtn.classList.add('active');
    pBtn.classList.remove('active');
});

pBtn.addEventListener('click', () => {
    let n = parseInt(document.getElementById('n-in').value);
    let k = parseInt(document.getElementById('k-in').value);
    pResult(n, k);
    state = "permutations";
    document.getElementById('title').innerHTML = `Permutations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does</u> matter`;
    cBtn.classList.remove('active');
    pBtn.classList.add('active');
});

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

enterBtn.addEventListener('click', () => {
    let n = parseInt(document.getElementById('n-in').value);
    let k = parseInt(document.getElementById('k-in').value);
    if(state === "combinations") {
        cResult(n, k);
    }else if(state === "permutations") {
        pResult(n, k);
    }
});

clearBtn.addEventListener('click', () => {
    state = "combinations";
    cBtn.classList.add('active');
    pBtn.classList.remove('active');
    document.getElementById('title').innerHTML = `Combinations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does not</u> matter`;
    cMathText.classList.add("hide");
    pMathText.classList.add("hide");
    result.innerHTML = `0`;
});