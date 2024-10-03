let n = document.getElementById('n-in');
let k = document.getElementById('k-in');
const result = document.getElementById('result');
const message = document.getElementById('message');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const pBtn = document.getElementById('permutation-switch-btn');
const cBtn = document.getElementById('combination-switch-btn');

let state = "combinations";

function factorial(n) {
    if( n < 1) {
        return 1;
    }else if(n == 0 || n == 1) {			
        return 1;
    }
    return n * factorial(n - 1);
}

function combinationCalculation(n, k) {
    if(n.value < k) {
        console.log('n cannot be smaller than k')
    }else {
        return factorial(n) / (factorial(k) * factorial(n - k))
    }
}

function permutationCalculation(n, k) {
    return factorial(n) / factorial(n - k);
}

cBtn.addEventListener('click', () => {
    state = "combinations";
    document.getElementById('title').innerHTML = `Combinations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does not</u> matter`;
    cBtn.classList.add('active');
    pBtn.classList.remove('active');
});

pBtn.addEventListener('click', () => {
    state = "permutations";
    document.getElementById('title').innerHTML = `Permutations Calculator`;
    document.getElementById('description').innerHTML = `When order <u>does</u> matter`;
    cBtn.classList.remove('active');
    pBtn.classList.add('active');
});

enterBtn.addEventListener('click', () => {
    if(state === "combinations") {
        console.log('combinations');
        combinationCalculation();
    }
    if(state === "permutations") {
        console.log("permutations")
        permutationCalculation()
}
});
