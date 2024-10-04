const array = document.getElementById("array");
const enterBtn = document.getElementById("enter-btn");
const arrLenTxt =  document.getElementById("arr-length-txt");
const clearBtn = document.getElementById("clear-btn");
const largestNum = document.getElementById("lrg-num-txt");
const smallestNum = document.getElementById("sm-num-txt");
const sumNum = document.getElementById("sum-num-txt");
const avgNum = document.getElementById("avg-num-txt");


function randomIntArray() {
    let arrLength = document.getElementById("arr-len-in").value;
	let randomArray = new Array(arrLength);
	for(let i = 0; i < arrLength; i++) {
		let randValue = Math.floor(Math.random() * 499) + 1;
		randomArray[i] = randValue;
	}
	return randomArray;
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
    array.innerHTML = `
    <div class="array-area">
    <span class="arrSpan">${arr}</span>
    </div>
    `
    arrLenTxt.innerHTML = `Array length: ${arr.length}`;
    largestNum.innerHTML =`Largest number: ${largestNumberInArray(arr)}`;
    smallestNum.innerHTML =`Smallest number: ${smallestNumberInArray(arr)}`;
    sumNum.innerHTML = `Sum: ${sumNumbersInArray(arr)}`;
    avgNum.innerHTML = `Average: ${(sumNumbersInArray(arr)/arr.length).toFixed(1)}`;
    console.log(arr);
}

enterBtn.addEventListener('click', () => {
    guts();

});

clearBtn.addEventListener('click', () => {
    array.innerHTML = ``
});