let deck;
let isHeld_1 = false;
let isHeld_2 = false;
let isHeld_3 = false;
let isHeld_4 = false;
let isHeld_5 = false;
let round = 1; // round 1 is deal round, 2 is draw, and 3 is results round
console.log('round 1')
let handArray = [];

// const holdBts = document.querySelectorAll('.hold-btn');
const dealBtn = document.querySelector('.deal-btn');
const holdBtn_1 = document.querySelector('.hold-btn-1');
const holdBtn_2 = document.querySelector('.hold-btn-2');
const holdBtn_3 = document.querySelector('.hold-btn-3');
const holdBtn_4 = document.querySelector('.hold-btn-4');
const holdBtn_5 = document.querySelector('.hold-btn-5');

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
    round = 2;
    let cardImage = document.createElement('img');
    for(let i = 0; i < 5; i++) {
        cardImage = document.createElement('img');
        handArray[i] = deck.splice(0, 1);
        handArray.push(handArray[i]);
        hand = document.getElementById('hand');
        cardImage.src = `../assets/cards/${handArray[i]}.png`;
        hand.append(cardImage);
    };
    // test();
    console.log(`Initial Hand Array ${handArray}`)
    console.log('round 2')
};

const draw = () => {
    handArray = [];
    for(let i = 0; i < 5; i++) {
        handArray[i] = deck.splice(0, 1);
        handArray.push(handArray[i]);
    }
    finalArray = [...heldArray, ...handArray];
    finalArray = finalArray.slice(0, 5);
    round = 3
    if(isHeld_1 || isHeld_2 || isHeld_3 || isHeld_4 || isHeld_5) {
        for(let i = 0; i < finalArray.length; i++) {
            cardImage = document.createElement('img');
            hand = document.getElementById('hand');
            cardImage.src = `../assets/cards/${finalArray[i]}.png`;
            hand.append(cardImage);
        }

    }else {
        for(let i = 0; i < 5; i++) {
            cardImage = document.createElement('img');
            handArray[i] = deck.splice(0, 1);
            handArray.push(handArray[i]);
            hand = document.getElementById('hand');
            cardImage.src = `../assets/cards/${handArray[i]}.png`;
            hand.append(cardImage);
        };
    }
    console.log(`Held Array: ${heldArray}`);
    console.log(`Held Array length: ${heldArray.length}`);
    console.log(`Hand Array: ${handArray}`);
    console.log(`Hand Array length: ${handArray.length}`);
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
    // console.log(deck);
}
let heldArray = []

holdBtn_1.addEventListener('click', () => {
    if(isHeld_1 == false) {
        isHeld_1 = true;
        holdBtn_1.classList.add('hold');
        heldArray.push(handArray[0]);
        console.log(`${handArray[0]} is held`);
    }else if (isHeld_1 === true) {
        isHeld_1 = false;
        heldArray.pop(handArray[0]);
        holdBtn_1.classList.remove('hold');
        console.log(`Card 1 is no longer held`);
    }
});

holdBtn_2.addEventListener('click', () => {
    if(isHeld_2 == false) {
        isHeld_2 = true;
        holdBtn_2.classList.add('hold');
        heldArray.push(handArray[1]);
        console.log(`${handArray[1]} is held`);
        console.log(`Hand Array From hold 2 press: ${handArray}`);
    }else if (isHeld_2 === true) {
        isHeld_2 = false;
        heldArray.pop(handArray[1]);
        holdBtn_2.classList.remove('hold');
        console.log(`Card 2 is no longer held`);
    }
});

holdBtn_3.addEventListener('click', () => {
    if(isHeld_3 == false) {
        isHeld_3 = true;
        holdBtn_3.classList.add('hold');
        heldArray.push(handArray[2]);
        console.log(`${handArray[2]} is held`);
    }else if (isHeld_3 === true) {
        isHeld_3 = false;
        heldArray.pop(handArray[2]);
        holdBtn_3.classList.remove('hold');
        console.log(`Card 3 is no longer held`);
    }
});

holdBtn_4.addEventListener('click', () => {
    if(isHeld_4 == false) {
        isHeld_4 = true;
        holdBtn_4.classList.add('hold');
        heldArray.push(handArray[3]);
        console.log(`${handArray[3]} is held`);
    }else if (isHeld_4 === true) {
        isHeld_4 = false;
        heldArray.pop(handArray[3]);
        holdBtn_4.classList.remove('hold');
        console.log(`Card 4 is no longer held`);
    }
});

holdBtn_5.addEventListener('click', () => {
    if(isHeld_5 == false) {
        isHeld_5 = true;
        holdBtn_5.classList.add('hold');
        heldArray.push(handArray[4]);
        console.log(`${handArray[4]} is held`);
    }else if (isHeld_5 === true) {
        isHeld_5 = false;
        heldArray.pop(handArray[4]);
        holdBtn_5.classList.remove('hold');
        console.log(`Card 5 is no longer held`);
    }
});

const clearHand = () => {
    hand.innerHTML = '';
    handArray = [];
}

dealBtn.addEventListener('click', () => {
    buildDeck();
    shuffleDeck();
    clearHand();
    if(round == 1) {
        deal();
    }else if(round == 2) {
        draw();
    }
});

document.getElementById('dev-reset-btn').addEventListener('click', () => {
    window.location.reload();
})
