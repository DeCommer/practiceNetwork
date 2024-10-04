const array = document.getElementById("array");
const enterBtn = document.getElementById("enter-btn");
const clearBtn = document.getElementById("clear-btn");


function randonmIntArray() {
    let arrLength = document.getElementById("arr-len-in").value;
	let randomArray = new Array(arrLength);
	for(let i = 0; i < arrLength; i++) {
		let randValue = Math.floor(Math.random() * 499) + 1;
		randomArray[i] = randValue;
	}
	return randomArray;
}




enterBtn.addEventListener('click', () => {
    array.innerHTML = `<b>Array:</b> <span>${randonmIntArray(array)}</span>`
});

clearBtn.addEventListener('click', () => {
    array.innerHTML = ``
});