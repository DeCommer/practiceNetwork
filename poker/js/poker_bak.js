let deck;
let isHeld = false;
let round = 1; // round 1 is deal round, 2 is draw, and 3 is results round
let handArray = [];

const dealBtn = document.querySelector('.deal-btn');
const hold1 = document.querySelector('.hold-btn-1');
const hold2 = document.querySelector('.hold-btn-2');
const hold3 = document.querySelector('.hold-btn-3');
const hold4 = document.querySelector('.hold-btn-4');
const hold5 = document.querySelector('.hold-btn-5');

const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
        card = deck.splice(0, 1);
        handArray.push(card);
        hand = document.getElementById('hand');
        cardImage.src = `../assets/cards/${card}.png`;
        hand.append(cardImage);
    };
    // test();
};

// const replaceCard = (index) => {
//     handArray[index] = deck.splice(0, 1);
// }

const draw = () => {
    round = 1;
    console.log('draw');
    console.log(`Hand Array: ${handArray}`);
}

const test = () => {
    console.log(`Hand type: ${typeof(handArray)}`);
    console.log(`Hand: ${handArray}`);
    console.log(`Card 1: ${handArray[0]}`);
    console.log(`Card 2: ${handArray[1]}`);
    console.log(`Card 3: ${handArray[2]}`);
    console.log(`Card 4: ${handArray[3]}`);
    console.log(`Card 5: ${handArray[4]}`);
    console.log(deck);
}

hold1.addEventListener('click', () => {
    holdCard1 = handArray[0];
    // replaceCard(1);
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
})

// Function to generate a random playing card
function generateRandomCard() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    
    return randomRank + ' of ' + randomSuit;
}

// Initialize an array with 5 random cards
let hand = [];
for (let i = 0; i < 5; i++) {
    hand.push(generateRandomCard());
}

// Function to replace a card at a given index in the hand
function replaceCard(index) {
    hand[index] = generateRandomCard();
    console.log('Card at index ' + index + ' replaced with ' + hand[index]);
}

// Sample usage
console.log('Initial Hand:', hand);

// Simulating discarding cards at index 1 and 3
replaceCard(1);
replaceCard(3);

console.log('Final Hand:', hand);
