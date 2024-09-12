fetch("./accounts.json")
.then(response => response.json())
.then(data => getAccounts(data));


getAccounts = (data) => {
    const accounts = data.accounts;
    console.log(accounts);
}

const getDate = document.getElementById('date-time')
const inputModal = document.querySelector('.input-modal');
const overlay = document.querySelector(".overlay");
const debitBtn = document.getElementById("debit-btn");
const savingsBtn = document.getElementById("savings-btn");
const accountNumber = Math.random().toString(36).slice(2);
document.getElementById('account-number').innerHTML = `${accountNumber}`;

const now = new Date();
getDate.innerHTML=`Today is ${now.toLocaleString()}`;

let debitBalance = 0;
let savingsBalance = 0;

const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function displayDebitModal() {
    overlay.style.display = "block";
    inputModal.classList.remove('hidden');
    inputModal.style.position = 'fixed';
    inputModal.style.top = `-${document.body.scrollY}px`;
    inputModal.innerHTML=`
        <h3>Deposit into Debit</h3>
        <label>Amount: </label>
        <input id="amt-in" type="number" placeholder="0">
        <button id="debit-enter-button" class="sm-btn btn">Enter</button>
        <a class="close-input-modal">x</a>
    `;
    const debitEntBtn = document.getElementById('debit-enter-button');
    debitEntBtn.addEventListener('click', () => {
        addDebitFunds();
        updtateTotalBalance();
    });
};

const debitBalanceDisplay = document.getElementById('debit-balance');

function addDebitFunds() {
    let debitIn = document.getElementById('amt-in').value;
    debitBalance += Number(debitIn);
    debitBalanceDisplay.innerHTML = `${moneyFormatter.format(debitBalance)}`;
    overlay.style.display = "none";
    inputModal.classList.add('hidden');
};

function displaySavingsModal() {
    overlay.style.display = "block";
    inputModal.classList.remove('hidden');
    inputModal.style.position = 'fixed';
    inputModal.style.top = `-${document.body.scrollY}px`;
    inputModal.innerHTML=`
        <h3>Deposit into Savings</h3>
        <label>Amount: </label>
        <input id="amt-in" type="number" placeholder="0">
        <button id="savings-enter-button" class="sm-btn btn">Enter</button>
        <a class="close-input-modal">x</a>
    `;
    const savingsEntBtn = document.getElementById('savings-enter-button');
    savingsEntBtn.addEventListener('click', () => {
        addSavingsFunds();
        updtateTotalBalance();
    });
};

const savingsBalanceDisplay = document.getElementById('savings-balance');

function addSavingsFunds() {
    let savingsIn = document.getElementById('amt-in').value;
    savingsBalance += Number(savingsIn);
    savingsBalanceDisplay.innerHTML = `${moneyFormatter.format(savingsBalance)}`;
    overlay.style.display = "none";
    inputModal.classList.add('hidden');
};

function updtateTotalBalance() {
    const totalBalanceDisplay = document.getElementById("total-balance");
    let totalBalance = debitBalance + savingsBalance;
    totalBalanceDisplay.innerHTML = `${moneyFormatter.format(totalBalance)}`;
};

function closeModal() {
    const closeImageBtn = document.querySelector('.close-input-modal');
    closeImageBtn.addEventListener('click', () => {
        overlay.style.display = "none";
        inputModal.classList.add('hidden');
    });
}

debitBtn.addEventListener("click", (e) => {
    displayDebitModal();
    closeModal();
});

savingsBtn.addEventListener("click", (e) => {
    displaySavingsModal();
    closeModal();
});

//Login / logout

const userIn = document.getElementById("user-in");

function login() {
    let userName = userIn.value;
    if(passwordIn.value === '1234') {
        document.querySelector(".login-apps-container").classList.add('hide'); 
        document.querySelector(".apps-container").classList.remove('hide'); 
        document.getElementById("greeting-txt").innerHTML = `${userName}`;
    }else {
        setTimeout(() => {
            document.getElementById('message').innerHTML = ''
        },1500);
        document.getElementById('message').innerHTML = 'Invalid credentials';
    }
};

const passwordIn = document.getElementById("pass-in");

passwordIn.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        login();
    }
  });

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', () => {
    login();
});

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
    document.querySelector(".login-apps-container").classList.remove('hide'); 
    document.querySelector(".apps-container").classList.add('hide'); 
    userIn.value = "";
    passwordIn.value = "";
});


