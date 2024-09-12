const getDate = document.getElementById('date-time')
const inputModal = document.querySelector('.input-modal');
const overlay = document.querySelector(".overlay");
const debitBtn = document.getElementById("debit-btn");
const savingsBtn = document.getElementById("savings-btn");

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
        <input id="amt-in" type="number" placeholder="0"  min="1">
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
    return debitBalance;
};

function displaySavingsModal() {
    overlay.style.display = "block";
    inputModal.classList.remove('hidden');
    inputModal.style.position = 'fixed';
    inputModal.style.top = `-${document.body.scrollY}px`;
    inputModal.innerHTML=`
        <h3>Deposit into Savings</h3>
        <label>Amount: </label>
        <input id="amt-in" type="number" placeholder="0" min="1">
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
    return savingsBalance;
};

function updtateTotalBalance() {
    const totalBalanceDisplay = document.getElementById("total-balance");
    let totalBalance = debitBalance + savingsBalance;
    totalBalanceDisplay.innerHTML = `${moneyFormatter.format(totalBalance)}`;
    return totalBalance;
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

fetch("./accounts.json")
.then(response => response.json())
.then(data => getAccounts(data));

getAccounts = (data) => {
    const accounts = data.accounts;
    console.log(accounts);

    // const accountNumber = Math.random().toString(36).slice(2);
    const userIn = document.getElementById("user-in");
    const passwordIn = document.getElementById("pass-in");

    function login() {
        let userName = userIn.value;

        if(userName === accounts[0].username && passwordIn.value === accounts[0].password) {
            document.querySelector(".login-apps-container").classList.add('hide'); 
            document.querySelector(".apps-container").classList.remove('hide');
            document.getElementById("greeting-txt").innerHTML = `${accounts[0].username}`;
            document.getElementById('account-number').innerHTML = `${accounts[0].accountNumber}`;
            savingsBalance = accounts[0].savingsBalance;
            debitBalance = accounts[0].debitBalance;
            savingsBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[0].savingsBalance)}`;
            debitBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[0].debitBalance)}`;
            updtateTotalBalance();
        }else if(userName === accounts[1].username && passwordIn.value === accounts[1].password) {
            document.querySelector(".login-apps-container").classList.add('hide'); 
            document.querySelector(".apps-container").classList.remove('hide');
            document.getElementById("greeting-txt").innerHTML = `${accounts[1].username}`;
            document.getElementById('account-number').innerHTML = `${accounts[1].accountNumber}`;
            savingsBalance = accounts[1].savingsBalance;
            debitBalance = accounts[1].debitBalance;
            savingsBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[1].savingsBalance)}`;
            debitBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[1].debitBalance)}`;
            updtateTotalBalance();
        }else if(userName === accounts[2].username && passwordIn.value === accounts[2].password) {
            document.querySelector(".login-apps-container").classList.add('hide'); 
            document.querySelector(".apps-container").classList.remove('hide');
            document.getElementById("greeting-txt").innerHTML = `${accounts[2].username}`;
            document.getElementById('account-number').innerHTML = `${accounts[2].accountNumber}`;
            savingsBalance = accounts[2].savingsBalance;
            debitBalance = accounts[2].debitBalance;
            savingsBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[2].savingsBalance)}`;
            debitBalanceDisplay.innerHTML = `${moneyFormatter.format(accounts[2].debitBalance)}`;
            updtateTotalBalance();
        }else {
            setTimeout(() => {
                document.getElementById('message').innerHTML = ''
            },1500);
            document.getElementById('message').innerHTML = 'Invalid credentials';
        }
    };

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

}
