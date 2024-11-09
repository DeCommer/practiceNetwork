let n = document.getElementById('n-in').value;
let k = document.getElementById('k-in').value;
const result = document.getElementById('result');
const message = document.getElementById('message');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const pBtn = document.getElementById('permutation-switch-btn');
const cBtn = document.getElementById('combination-switch-btn');
const cMathText = document.getElementById("c-math-text");
const pMathText = document.getElementById("p-math-text");

let state = "combinations";

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combinations(n, k) {
    if (k > n) {
        return 0; // Invalid case: r cannot be greater than n
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function permutations(n, k) {
    if (k > n) {
        return 0; // Invalid case: r cannot be greater than n
    }
    return factorial(n) / factorial((n - k));
}

cBtn.addEventListener('click', () => {
    state = "combinations";
    console.log(state);
    document.getElementById('title').innerHTML = `Combinations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does not</u> matter`;
    cBtn.classList.add('active');
    pBtn.classList.remove('active');
});

pBtn.addEventListener('click', () => {
    state = "permutations";
    console.log(state);
    document.getElementById('title').innerHTML = `Permutations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does</u> matter`;
    cBtn.classList.remove('active');
    pBtn.classList.add('active');
});

enterBtn.addEventListener('click', () => {
    if(state === "combinations") {
        result.innerHTML = combinations(n, k);
        cMathText.classList.remove("hide");
        pMathText.classList.add("hide");
    }
    else if(state === "permutations") {
        result.innerHTML = permutations(n,k);
        pMathText.classList.remove("hide");
        cMathText.classList.add("hide");
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