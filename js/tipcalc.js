let billTotal = document.getElementById('bill-total-input');
let percent = document.getElementById('percent-input');
let numberOfTippers = document.getElementById('tippers-input');
const calcBtn =  document.getElementById('calc-btn');
const resetBtn =  document.getElementById('reset-btn');

const tipAmountTxt = document.getElementById('tip-amount');
const perPersonTxt = document.getElementById('per-person-amount');
const perPersonTotalTxt = document.getElementById('per-person-total-amount')
const totalAmountText = document.getElementById('total-amount')


calcBtn.addEventListener('click', () => {
    let tipPercent = percent.value/100;
    let tipAmount = billTotal.value * tipPercent;
    let perPersonAmount = tipAmount / numberOfTippers.value;
    let perPersonTotalAmount = (billTotal.value / numberOfTippers.value) + (tipAmount / numberOfTippers.value);
    let totalAmount = tipAmount + parseInt(billTotal.value);
    tipAmountTxt.textContent = `$${tipAmount.toFixed(2)}`
    perPersonTxt.textContent = `$${perPersonAmount.toFixed(2)}`
    perPersonTotalTxt.textContent = `$${perPersonTotalAmount.toFixed(2)}`
    totalAmountText.textContent = `$${totalAmount.toFixed(2)}`

});

resetBtn.addEventListener('click', () => {
    billTotal.value = '';
    percent.value = '';
    numberOfTippers.value = '1';
    tipAmountTxt.textContent = `$0`
    perPersonTxt.textContent = `$0`
    perPersonTotalTxt.textContent = `$0`
    totalAmountText.textContent = `$0`
});












// const bill = document.getElementById('bill')
// const percent = document.getElementById('tip')
// const tippers = document.getElementById('tippers')
// let tip = document.getElementById('tip')

// const calc = document.getElementById('calculate')
// calc.addEventListener('click', calcTip)

// function calcTip() {
//     if(bill.value === '' || tip === 0) {
//         alert("enter values")
//     }
//     if(tippers.value === '' || tippers.value <= 1) {
//         tippers.value === 1;
//     }

//     let totalTip = bill.value * tip.value
//     let dividedTip = totalTip / tippers.value
//     let totalBill =  totalTip + parseInt(bill.value)
//     let ppt = totalBill / tippers.value

//     document.getElementById('pptAmountNum').innerHTML = "$" + ppt.toFixed(2)
//     document.getElementById('tipAmountNum').innerText = "$" + totalTip.toFixed(2)
//     document.getElementById('tippersAmountNum').innerText = "$" + dividedTip.toFixed(2)
//     document.getElementById('totalAmountNum').innerHTML = "$" + totalBill.toFixed(2)
// }

// //reset area
// document.getElementById('reset').addEventListener('click', () => {
//     document.getElementById('bill').value = '';
//     document.getElementById('tip').value = '0';
//     document.getElementById('tippers').value = '1';
//     document.getElementById('tipAmountNum').innerHTML = '$0';
//     document.getElementById('tippersAmountNum').innerHTML = '$0';
//     document.getElementById('pptAmountNum').innerHTML = '$0';
//     document.getElementById('totalAmountNum').innerHTML = '$0';
// })

