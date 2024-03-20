let deck;
let isHeld = false;
let round = 1;
const dealBtn = document.querySelector('.deal-btn');
const holdBtns = document.querySelectorAll('.btn');

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
    let handArray = [];
    let cardImage = document.createElement('img');
    if(round == 1) {
        for(let i = 0; i < 5; i++) {
            cardImage = document.createElement('img');
            card = deck.splice(0, 1);
            handArray.push(card);
            hand = document.getElementById('hand');
            cardImage.src = `../assets/cards/${card}.png`;
            hand.append(cardImage);
        };
        console.log(`Hand: ${handArray}`);
    }else if(round == 2){
        if(isHeld == true) {
            clearHand();
            cardImage = document.createElement('img');
            hand = document.getElementById('hand')
            cardImage.src = `../assets/cards/${holdCard}.png`;
            hand.append(cardImage);
            handArray.splice(0, 1, holdCard); 
            for(let i = 1; i < 5; i++) {
                cardImage = document.createElement('img');
                card = deck.pop();
                hand = document.getElementById('hand');
                cardImage.src = `../assets/cards/${card}.png`;
                hand.append(cardImage);
                handArray.push(card);
            };
        };
        console.log(`Hand: ${handArray}`);
    };

    for (i of holdBtns) {
        i.addEventListener('click', function() {
            round = 2; 
            if(isHeld == false) {
                isHeld = true;
                console.log('held on')
                holdCard = handArray[this.id];
                let temp = handArray[this.id];
                handArray[this.id] = holdCard;
                holdCard = temp;
                this.classList.add('hold');
                console.log(`Held: ${holdCard}`)
            }else if(isHeld == true) {
                isHeld = false;
                this.classList.remove('hold');
                holdCard = []
                console.log('held off')
            }
        });

 
    };
};
const clearHand = () => {
    hand.innerHTML = '';
    handArray = [];
}

dealBtn.addEventListener('click', () => {
    buildDeck();
    shuffleDeck();
    clearHand();
    deal();
})
