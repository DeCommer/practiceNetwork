let deck;
let holdCard1Bool = false;
let holdCard2Bool = false;
let holdCard3Bool = false;
let holdCard4Bool = false;
let holdCard5Bool = false;
const dealBtn = document.querySelector('.deal-btn');
const holdBtn1 = document.getElementById('hold-btn-1');
const holdBtn2 = document.getElementById('hold-btn-2');
const holdBtn3 = document.getElementById('hold-btn-3');
const holdBtn4 = document.getElementById('hold-btn-4');
const holdBtn5 = document.getElementById('hold-btn-5');

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

const getValueOfEachCard = (card) => {
    let data = card.split('-');
    let value = data[0];
    if(isNaN(value)) { //sets card values for lettered cards
        if(value == 'A') {
            return 11;
        } else {
            return 10;
        }
    }
    return parseInt(value);
}

const deal = () => {
    let handArray = []
    let cardImage = document.createElement('img');
    for(let i = 0; i < 5; i++) {
        cardImage = document.createElement('img');
        card = deck.pop();
        hand = document.getElementById('hand')
        cardImage.src = `../assets/cards/${card}.png`
        hand.append(cardImage);
        handArray.push(card);
    }
    if(holdCard1Bool == true){
        clearHand();
        cardImage = document.createElement('img');
        hand = document.getElementById('hand')
        cardImage.src = `../assets/cards/${holdCard1}.png`
        hand.append(cardImage);
        handArray.push(holdCard1);
    }
    // console.log(`
    // 1st card: ${handArray[0]}
    // 2nd card: ${handArray[1]}
    // 3rd card: ${handArray[2]}
    // 4th card: ${handArray[3]}
    // 5th card: ${handArray[4]}`
    // );
    holdBtn1.addEventListener('click', () => {
        holdCard1Bool = true;
        holdCard1 = handArray.splice(0, 1, handArray[0]);
        holdBtn1.classList.add('hold');
    });

}

const clearHand = () => {
    hand.innerHTML = '';
}

dealBtn.addEventListener('click', () => {
    buildDeck();
    shuffleDeck();
    clearHand();
    deal();
})

