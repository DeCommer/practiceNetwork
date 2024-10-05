const array = document.getElementById("array");
const enterBtn = document.getElementById("enter-btn");
const arrLenTxt =  document.getElementById("arr-length-txt");
const clearBtn = document.getElementById("clear-btn");
const copy = document.getElementById('copy-btn');
const largestNum = document.getElementById("lrg-num-txt");
const smallestNum = document.getElementById("sm-num-txt");
const sumNum = document.getElementById("sum-num-txt");
const avgNum = document.getElementById("avg-num-txt");
const sdNum = document.getElementById("sd-num-txt");
let arrLength = document.getElementById("arr-len-in");
let elementVal = document.getElementById("el-val-in");
let message = document.getElementById('message');

function randomIntArray() {
    let arrLength = document.getElementById("arr-len-in").value;
    let elementVal = document.getElementById("el-val-in").value;
	let randomArray = new Array(arrLength);
	for(let i = 0; i < arrLength; i++) {
		let randValue = Math.floor(Math.random() * elementVal);
		randomArray[i] = randValue;
	}
	return randomArray;
}

function arrayDisplay(arr) {
    let textArr = new Array(arrLength);
    for(let i = 0; i < arr.length; i++) {
        textArr[i] = " " + arr[i].toLocaleString('en-US');
    }
    return textArr.join(", ");
}

function largestNumberInArray(arr) {
	let maxVal = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] > maxVal) {
			maxVal = arr[i];
		}
	}
	return maxVal;
}

function smallestNumberInArray(arr) {
	let maxVal = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < maxVal) {
			maxVal = arr[i];
		}
	}
	return maxVal;
}

function sumNumbersInArray(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function standardDeviation(arr, usePopulation = false) {
    const n = arr.length;
    const mean = arr.reduce((a, b) => a + b, 0) / n;
    return Math.sqrt(
        arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) /
        (n - (usePopulation ? 0 : 1))
)};

function guts() {
    let arr = randomIntArray();
    if(arr.length === 1) {
        clear();
    } else {
        array.innerHTML = `
        <div class="array-area">
        <span class="arrSpan">[ ${arrayDisplay(arr)} ]</span>
        </div>`
        arrLenTxt.innerHTML = `Array length: <span class="num-text">${arr.length}</span>`;
        largestNum.innerHTML =`Largest number: <span class="num-text">${largestNumberInArray(arr).toLocaleString('en-US')}</span>`;
        smallestNum.innerHTML =`Smallest number: <span class="num-text">${smallestNumberInArray(arr).toLocaleString('en-US')}</span>`;
        sumNum.innerHTML = `Sum ∑x : <span class="num-text">${sumNumbersInArray(arr).toLocaleString('en-US')}</span>`;
        avgNum.innerHTML = `Mean x̄ : <span class="num-text">${(sumNumbersInArray(arr)/arr.length).toLocaleString('en-US')}</span>`;
        sdNum.innerHTML = `Std dev(s): <span class="num-text">${(standardDeviation(arr)).toLocaleString('en-US')}</span>`;
        copy.classList.remove('hide');
    }

    copy.addEventListener('click', () => {
        let copyText = arr;
        navigator.clipboard.writeText(copyText)
          .then(function() {
            message.innerHTML = `<p class="message">✅ Array copied</p>`
            setTimeout(() =>{
                message.textContent = '';
            }, 1500);
          })
          .catch(function(error) {
            console.log("Failed to copy text: " + error);
          });
      });
}

function clear() {
    array.innerHTML = `Array length must be at least 2`;
    setTimeout(() =>{
        array.innerHTML = ``;
    }, 1500);
    arrLength.value = '';
    elementVal.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
    sdNum.innerHTML = ``;
    copy.classList.add('hide');
}

enterBtn.addEventListener('click', () => {
    guts();
});

arrLength.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});
elementVal.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});

clearBtn.addEventListener('click', () => {
    array.innerHTML = ``;
    arrLength.value = '';
    elementVal.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
    sdNum.innerHTML = ``;
    copy.classList.add('hide');
});