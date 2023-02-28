//the bad way.

/* document.getElementById('billAmntSubmit').addEventListener('submit', function (e) {
    e.preventDefault();

    const bill = document.getElementById('billAmntField').value;
    let tip = parseFloat(bill* .05).toFixed(2);
    const total = bill + tip
    const tippers = document.getElementById('tipperField').value;
    let percentList = document.getElementById('tip').value;

    console.log(total);

    if(percentList == .05) {
        document.getElementById('tipAmountNum').innerHTML = tip
        document.getElementById('totalAmountNum').innerHTML = total
    }
}); */ 

//The better way
const bill = document.getElementById('bill')
const tippers = document.getElementById('tippers')
const percent = document.getElementById('tip')

let tip = document.getElementById('tip')

const calc = document.getElementById('calculate')
calc.addEventListener('click', calcTip)

function calcTip() {
    if(bill.value === '' || tip === 0) {
        alert("enter values")
    }
    if(tippers.value === '' || tippers.value <= 1) {
        tippers.value === 1;
    }

    let totalTip = bill.value * tip.value
    let dividedTip = totalTip / tippers.value
    let totalBill =  totalTip + parseInt(bill.value)
    let ppt = totalBill / tippers.value

    document.getElementById('pptAmountNum').innerHTML = "$" + ppt.toFixed(2)
    document.getElementById('tipAmountNum').innerText = "$" + totalTip.toFixed(2)
    document.getElementById('tippersAmountNum').innerText = "$" + dividedTip.toFixed(2)
    document.getElementById('totalAmountNum').innerHTML = "$" + totalBill.toFixed(2)
}

//reset area
document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('bill').value = '';
    document.getElementById('tip').value = '0';
    document.getElementById('tippers').value = '1';
    document.getElementById('tipAmountNum').innerHTML = '$0';
    document.getElementById('tippersAmountNum').innerHTML = '$0';
    document.getElementById('pptAmountNum').innerHTML = '$0';
    document.getElementById('totalAmountNum').innerHTML = '$0';
})

