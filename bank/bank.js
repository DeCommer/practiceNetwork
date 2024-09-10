const getDate = document.getElementById('date-time');
const now = new Date();
getDate.innerHTML=`Today is ${now.toLocaleString()}`
const accountNumber = Math.random().toString(36).slice(2);
document.getElementById('account-number').innerHTML = `Account Number: ${accountNumber}`
const inputModal = document.querySelector('.input-modal');
const overlay = document.querySelector(".overlay");
const debitBtn = document.getElementById("debit-btn");
const savingsBtn = document.getElementById("savings-btn");

let debitBalance = 0;
let savingsBalance = 0;
let totalBalance = debitBalance + savingsBalance;

function displayDebitModal() {
    let id = 1;
    console.log(id);
    overlay.style.display = "block";
    inputModal.classList.remove('hidden');
    inputModal.style.position = 'fixed';
    inputModal.style.top = `-${document.body.scrollY}px`;

    inputModal.innerHTML=`
        <h3>Deposit into Debit</h3>
        <label>Amount: </label>
        <input id="debit-amt-in" type="number" placeholder="0">
        <button id="debit-enter-button" class="sm-btn btn">Enter</button>
        <a class="close-input-modal">x</a>
    `
    const debitEntBtn = document.getElementById('debit-enter-button');
    debitEntBtn.addEventListener('click', () => {
        addFunds();
    });

    return id;
}

function addFunds(debitBalance, savingsBalance, id) {
    if(displayDebitModal.id == 1) {
        console.log("Hooraaay!!!!");
    }else {
        console.log("Shit");
    }

}

function updtateTotalBalance() {}

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
});

