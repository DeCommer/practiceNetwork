const array = document.getElementById("array");
const enterBtn = document.getElementById("enter-btn");
const arrLenTxt =  document.getElementById("arr-length-txt");
const clearBtn = document.getElementById("clear-btn");
const largestNum = document.getElementById("lrg-num-txt");
const smallestNum = document.getElementById("sm-num-txt");
const sumNum = document.getElementById("sum-num-txt");
const avgNum = document.getElementById("avg-num-txt");
let arrLength = document.getElementById("arr-len-in");
let elementVal = document.getElementById("el-val-in");

function randomIntArray() {
    let arrLength = document.getElementById("arr-len-in").value;
    let elementVal = document.getElementById("el-val-in").value;
	let randomArray = new Array(arrLength);
	for(let i = 0; i < arrLength; i++) {
		let randValue = Math.floor(Math.random() * elementVal) + 1;
		randomArray[i] = randValue;
	}
	return randomArray;
}

function arrayDisplay(arr) {
    let textArr = new Array(arrLength);
    for(let i = 0; i < arr.length; i++) {
        textArr[i] = " " + arr[i].toLocaleString('en-US');
    }
    return textArr.join("");
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

function guts() {
    let arr = randomIntArray();
    if(arr.length === 1 || elementVal === 1) {
        clear();
    } else {
        array.innerHTML = `
        <div class="array-area">
        <span class="arrSpan">${arrayDisplay(arr)}</span>
        </div>
        `
        arrLenTxt.innerHTML = `Array length: <span class="num-text">${arr.length}</span>`;
        largestNum.innerHTML =`Largest number: <span class="num-text">${largestNumberInArray(arr).toLocaleString('en-US')}</span>`;
        smallestNum.innerHTML =`Smallest number: <span class="num-text">${smallestNumberInArray(arr).toLocaleString('en-US')}</span>`;
        sumNum.innerHTML = `Sum: <span class="num-text">${sumNumbersInArray(arr).toLocaleString('en-US')}</span>`;
        avgNum.innerHTML = `Average: <span class="num-text">${(sumNumbersInArray(arr)/arr.length).toLocaleString('en-US')}</span>`;
        // console.log(arr.length);
    }
}

function clear() {
    array.innerHTML = `Enter value`;
    setTimeout(() =>{
        array.innerHTML = ``;
    }, 1500);
    arrLength.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
}

enterBtn.addEventListener('click', () => {
    guts();
});

arrLength.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});
elementVal.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});

clearBtn.addEventListener('click', () => {
    array.innerHTML = ``;
    arrLength.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
});