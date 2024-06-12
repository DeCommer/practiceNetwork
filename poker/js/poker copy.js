let deck;
let isHeld_1 = false;
let isHeld_2 = false;
let isHeld_3 = false;
let isHeld_4 = false;
let isHeld_5 = false;
let round = 0; // round 0 is deal round, 1 is draw, and 2 is results round
console.log(`round: ${round}`)

let handArray = [];
let holdArray = []

// const holdBts = document.querySelectorAll('.hold-btn');
// const dealBtn = document.querySelector('.deal-btn');
// const holdBtn_1 = document.querySelector('.hold-btn-1');
// const holdBtn_2 = document.querySelector('.hold-btn-2');
// const holdBtn_3 = document.querySelector('.hold-btn-3');
// const holdBtn_4 = document.querySelector('.hold-btn-4');
// const holdBtn_5 = document.querySelector('.hold-btn-5');


if(round === 0) {
    holdBtn_1.disabled = true;
    holdBtn_2.disabled = true;
    holdBtn_3.disabled = true;
    holdBtn_4.disabled = true;
    holdBtn_5.disabled = true;
}

const buildDeck = () => {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['♧', '◇', '♡', '♤'];
    deck = [];
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            deck.push(`${values[j]}-${suits[i]}`);
        }
    }
    return deck;
    
}

const shuffleDeck = () => {
    for(let i = 0; i < deck.length; i++) {
        let shuffle = Math.floor(Math.random() * deck.length)
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
}

const deal = () => {
    holdBtn_1.disabled = false;
    holdBtn_2.disabled = false;
    holdBtn_3.disabled = false;
    holdBtn_4.disabled = false;
    holdBtn_5.disabled = false;
    round = 1;
    let cardImage = document.createElement('img');
    for(let i = 0; i < 5; i++) {
        cardImage = document.createElement('img');
        handArray[i] = deck.splice(0, 1);
        handArray.push(handArray[i]);
        hand = document.getElementById('hand');
        cardImage.src = `../assets/cards/${handArray[i]}.png`;
        hand.append(cardImage);
    };
    test();
    console.log(`Initial Hand Array ${handArray}`)
    console.log(`round: ${round}`)
    dealBtn.textContent = "Draw";
};

const draw = () => {
    round = 2;
    finalHand = [];
    console.log(`draw hold array: ${holdArray}`)
    console.log(`draw final hand: ${finalHand}`)

    if(isHeld_1 || isHeld_2 || isHeld_3 || isHeld_4 || isHeld_5) {
        for(let i = 0; i < holdArray.length; i++) {
            cardImage = document.createElement('img');
            hand = document.getElementById('hand');
            cardImage.src = `../assets/cards/${holdArray[i]}.png`;
            hand.append(cardImage);
            
        }
        // console.log(`Held Array: ${holdArray}`);
        // console.log(`Held Array length: ${holdArray.length}`);
        // console.log(`Hand Array: ${handArray}`);
        // console.log(`Hand Array length: ${handArray.length}`);
    }else {
        for(let i = 0; i < 5; i++) {
            cardImage = document.createElement('img');
            hand = document.getElementById('hand');
            cardImage.src = `../assets/cards/${handArray[i]}.png`;
            hand.append(cardImage);
            
        };
        console.log(`No cards held: ${handArray}`);
    }
    console.log(`round: ${round}, end`)
}

const test = () => {
    console.log(`Hand type: ${typeof(handArray)}`);
    console.log(`Hand: ${handArray}`);
    console.log(`Card 1: ${handArray[0]}`);
    console.log(`Card 2: ${handArray[1]}`);
    console.log(`Card 3: ${handArray[2]}`);
    console.log(`Card 4: ${handArray[3]}`);
    console.log(`Card 5: ${handArray[4]}`);
    console.log(`Card 6? ${handArray[5]}`);
    console.log(deck);
}

holdBtn_1.addEventListener('click', () => { //This is always position 1 if pressed.
    if(isHeld_1 == false) {
        isHeld_1 = true;
        holdBtn_1.classList.add('hold');
        holdArray.push(handArray[0]);
        console.log(`${handArray[0]} is held from position ${holdArray.indexOf(handArray[0])}`);
        console.log(`Hold array: ${holdArray}`)
    }else if (isHeld_1 === true) {
        isHeld_1 = false;
        holdArray.pop(handArray[0]);
        holdBtn_1.classList.remove('hold');
        console.log(`Card 1 is no longer held`);
        console.log(`Hold array: ${holdArray}`)
    }
});

holdBtn_2.addEventListener('click', () => { 
    if(isHeld_2 == false) {
        isHeld_2 = true;
        holdBtn_2.classList.add('hold');
        holdArray.push(handArray[1]);
        console.log(`${handArray[1]} is held from position ${holdArray.indexOf(handArray[1])}`);
        console.log(`Hold array: ${holdArray}`)
    }else if (isHeld_2 === true) {
        isHeld_2 = false;
        holdArray.pop(handArray[1]);
        holdBtn_2.classList.remove('hold');
        console.log(`Card 2 is no longer held`);
        console.log(`Hold array: ${holdArray}`)
    }
});

holdBtn_3.addEventListener('click', () => {
    if(isHeld_3 == false) {
        isHeld_3 = true;
        holdBtn_3.classList.add('hold');
        holdArray.push(handArray[2]);
        console.log(`${handArray[2]} is held from position ${holdArray.indexOf(handArray[2])}`);
        console.log(`Hold array: ${holdArray}`)
    }else if (isHeld_3 === true) {
        isHeld_3 = false;
        holdArray.pop(handArray[2]);
        holdBtn_3.classList.remove('hold');
        console.log(`Card 3 is no longer held`);
    }
});

holdBtn_4.addEventListener('click', () => {
    if(isHeld_4 == false) {
        isHeld_4 = true;
        holdBtn_4.classList.add('hold');
        holdArray.push(handArray[3]);
        console.log(`${handArray[3]} is held from position ${holdArray.indexOf(handArray[3])}`);
        console.log(`Hold array: ${holdArray}`)
    }else if (isHeld_4 === true) {
        isHeld_4 = false;
        holdArray.pop(handArray[3]);
        holdBtn_4.classList.remove('hold');
        console.log(`Card 4 is no longer held`);
        console.log(`Hold array: ${holdArray}`)
    }
});

holdBtn_5.addEventListener('click', () => {
    if(isHeld_5 == false) {
        isHeld_5 = true;
        holdBtn_5.classList.add('hold');
        holdArray.push(handArray[4]);
        console.log(`${handArray[4]} is held from position ${holdArray.indexOf(handArray[4])}`);
        console.log(`Hold array: ${holdArray}`)
    }else if (isHeld_5 === true) {
        isHeld_5 = false;
        holdArray.pop(handArray[4]);
        holdBtn_5.classList.remove('hold');
        console.log(`Card 5 is no longer held`);
        console.log(`Hold array: ${holdArray}`)
    }
});

const clearHand = () => {
    hand.innerHTML = '';
}

dealBtn.addEventListener('click', () => {
    clearHand();
    if(round === 0) {
        buildDeck();
        shuffleDeck();
        deal();
    }else if(round === 1) {
        draw();
        dealBtn.textContent = "Deal";
    }else if(round === 2) {
        clearHand();
        buildDeck();
        shuffleDeck();
        deal();
    }
});

// if(round === 1) {
//     holdBtn_1.classList.add('inactive');
//     holdBtn_2.classList.add('inactive'); 
//     holdBtn_3.classList.add('inactive'); 
//     holdBtn_4.classList.add('inactive'); 
//     holdBtn_5.classList.add('inactive'); 
// }if (round === 2) {
//     holdBtn_1.classList.remove('inactive');
//     holdBtn_2.classList.remove('inactive'); 
//     holdBtn_3.classList.remove('inactive'); 
//     holdBtn_4.classList.remove('inactive'); 
//     holdBtn_5.classList.remove('inactive'); 
// }

document.getElementById('dev-reset-btn').addEventListener('click', () => {
    window.location.reload();
});

//use parts of this!!!


function createNewArray(originalArray, holdIndex) {
    let newArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        if (i === holdIndex) {
            newArray.push(originalArray[i]);
        } else {
            newArray.push(Math.floor(Math.random() * 100) + 1);  // Generate new random element
        }
    }
    return newArray;
}

// Example usage
let originalArray = [10, 20, 30, 40, 50];
let holdIndex = 2;  // Let's hold the element at index 2

let newArray = createNewArray(originalArray, holdIndex);
console.log("Original array:", originalArray);
console.log("hold position:", holdIndex);
console.log("New array:", newArray);
