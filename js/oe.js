
function process() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let oe1 = document.getElementById('num1OE');
    let oe2 = document.getElementById('num2OE');
    const plusRes = parseInt(num1) + parseInt(num2);
    const minRes = parseInt(num1) - parseInt(num2);
    const timesRes = parseInt(num1) * parseInt(num2);
    let divRes = parseInt(num1) / parseInt(num2);
    divRes = divRes.toFixed(2);

    if(num1 % 2 === 0) {
        oe1.innerHTML = "even";
    }
    else {
        oe1.innerHTML = "odd";
    }
    if( num2 % 2 === 0) {
        oe2.innerHTML = "even";
    }else {
        oe2.innerHTML = "odd";
    }


    document.getElementById('plusResult').innerHTML = plusRes;
    if(plusRes % 2 == 0) {
        document.getElementById('res1OE').innerHTML = "even"
    }
    else {
        document.getElementById('res1OE').innerHTML = "odd"
    }
    document.getElementById('minResult').innerHTML = minRes;
    if(minRes % 2 == 0) {
        document.getElementById('res2OE').innerHTML = "even"
    }
    else {
        document.getElementById('res2OE').innerHTML = "odd"
    }
    document.getElementById('timesResult').innerHTML = timesRes;
    if(timesRes % 2 == 0) {
        document.getElementById('res3OE').innerHTML = "even"
    }
    else {
        document.getElementById('res3OE').innerHTML = "odd"
    }

    document.getElementById('divResult').innerHTML = divRes;
    if(divRes % 2 == 0) {
        document.getElementById('res4OE').innerHTML = "even";
        console.log('even');
    }
    else { 
        document.getElementById('res4OE').innerHTML = "odd";
        console.log('odd');
    }
}










