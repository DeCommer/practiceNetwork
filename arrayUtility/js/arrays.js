const array = document.getElementById("array");
const enterBtn = document.getElementById("enter-btn");
const arrLenTxt =  document.getElementById("arr-length-txt");
const clearBtn = document.getElementById("clear-btn");
const copy = document.getElementById('copy-btn');
const largestNum = document.getElementById("lrg-num-txt");
const smallestNum = document.getElementById("sm-num-txt");
const rangeNum = document.getElementById("rng-num-txt");
const sumNum = document.getElementById("sum-num-txt");
const avgNum = document.getElementById("avg-num-txt");
const sdNum = document.getElementById("sd-num-txt");
const varianceNum = document.getElementById("vr-num-txt");
const statsArea = document.querySelector(".stats-area");
let arrLength = document.getElementById("arr-len-in");
let min = document.getElementById("min-val-in");
let max = document.getElementById("max-val-in");
let message = document.getElementById('message');

function randomIntArray() {
    let arrLength = document.getElementById("arr-len-in").value;
    let min = document.getElementById("min-val-in").value;
    let max = document.getElementById("max-val-in").value;
	let randomArray = new Array(arrLength);
        for(let i = 0; i < arrLength; i++) {
            let randValue = 
            Math.floor(Math.random() * (parseInt(max, 10) - parseInt(min, 10) + 1) + parseInt(min, 10));
            randomArray[i] = randValue;
        }
        return randomArray;
};

function arrayDisplay(arr) {
    let textArr = new Array(arrLength);
    for(let i = 0; i < arr.length; i++) {
        textArr[i] = " " + arr[i].toLocaleString('en-US');
    }
    return textArr.join(", ");
};

function largestNumberInArray(arr) {
	let maxVal = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] > maxVal) {
			maxVal = arr[i];
		}
	}
	return maxVal;
};

function smallestNumberInArray(arr) {
	let maxVal = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < maxVal) {
			maxVal = arr[i];
		}
	}
	return maxVal;
};

function sumNumbersInArray(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

function standardDeviation(arr, usePopulation = false) {
    const n = arr.length;
    const mean = arr.reduce((a, b) => a + b, 0) / n;
    return Math.sqrt(
        arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) /
        (n - (usePopulation ? 0 : 1))
)};

function variance(arr, usePopulation = false) {
    if (arr.length < 2) return 0;
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    const sumOfSquaredDifferences = arr.reduce((a, b) => a + (b - mean) ** 2, 0);
    return sumOfSquaredDifferences / (arr.length - (usePopulation ? 0 : 1));
};

function quickSort(arr, start, end) {
    if(arr != null && arr.length <= 1) {
        return;
    }
    if(start < end) {
        let pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
}

function partition(arr, start, end) {
    let pivot = arr[start];
    let i = start;
    for(let j = start + 1; j <= end; j++) {
        if(arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, start, i);
    return i;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function guts() {
    statsArea.classList.remove("hide");
    let arr = randomIntArray();
    if(parseInt(arr.length) === 1) {
        clear();
        message.innerHTML = `Array length must be greater than 1`;
        setTimeout(() =>{
            message.textContent = '';
            clear();
        }, 1500);
    }else {
        if(parseInt(max.value) < parseInt(min.value)) {
            message.innerHTML = `Max must be greater than min`;
            clear();
            setTimeout(() =>{
                message.textContent = '';
                clear();
            }, 1500);
        } else {
            quickSort(arr, 0, arr.length - 1);
            array.innerHTML = `
            <div class="array-area">
            <span class="arrSpan">[ ${arrayDisplay(arr)} ]</span>
            </div>`
            arrLenTxt.innerHTML = `Array length: <span class="num-text">${arr.length}</span>`;
            largestNum.innerHTML =`Max: <span class="num-text">${largestNumberInArray(arr).toLocaleString('en-US')}</span>`;
            smallestNum.innerHTML =`Min: <span class="num-text">${smallestNumberInArray(arr).toLocaleString('en-US')}</span>`;
            rangeNum.innerHTML = `Range: <span class="num-text">${(largestNumberInArray(arr) - smallestNumberInArray(arr)).toLocaleString('en-US')}</span>`;
            sumNum.innerHTML = `Sum ∑x : <span class="num-text">${sumNumbersInArray(arr).toLocaleString('en-US')}</span>`;
            avgNum.innerHTML = `Mean x̄ : <span class="num-text">${(sumNumbersInArray(arr)/arr.length).toLocaleString('en-US')}</span>`;
            sdNum.innerHTML = `Std dev(s): <span class="num-text">${(standardDeviation(arr)).toLocaleString('en-US')}</span>`;
            varianceNum.innerHTML = `Variance: <span class="num-text">${(variance(arr)).toLocaleString('en-US')}</span>`;
            copy.classList.remove('hide');
        }
    };

    copy.addEventListener('click', () => {
        let copyText = arr;
        navigator.clipboard.writeText(copyText)
          .then(function() {
            message.innerHTML = `<p class="message">✅ Array copied</p>`;
            setTimeout(() =>{
                message.textContent = '';
            }, 1500);
          }).catch(function(error) {
            console.log("Failed to copy text: " + error);
          });
    });
};

function clear() {
    statsArea.classList.add("hide");
    array.innerHTML = ``;
    setTimeout(() =>{
        array.innerHTML = ``;
    }, 1500);
    arrLength.value = '';
    min.value = '';
    max.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    rangeNum.innerHTML = ``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
    sdNum.innerHTML = ``;
    varianceNum.innerHTML = ``;
    copy.classList.add('hide');
};

enterBtn.addEventListener('click', () => {
    guts();
});

arrLength.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});
min.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});
max.addEventListener('keypress', (e) => {if(e.key == 'Enter')guts()});

clearBtn.addEventListener('click', () => {
    statsArea.classList.add("hide");
    array.innerHTML = ``;
    arrLength.value = '';
    min.value = '';
    max.value = '';
    arrLenTxt.innerHTML = ``;
    largestNum.innerHTML =``;
    smallestNum.innerHTML =``;
    rangeNum.innerHTML = ``;
    sumNum.innerHTML = ``;
    avgNum.innerHTML = ``;
    sdNum.innerHTML = ``;
    varianceNum.innerHTML = ``;
    copy.classList.add('hide');
});