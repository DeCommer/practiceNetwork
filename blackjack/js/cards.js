let dealerSum = 0;
let dealerShowing = 0;
let playerSum = 0;
let dealerAces = 0;
let playerAces = 0;
let hidden;
let deck;
let aHit = true;

const hitBtn = document.getElementById('hit');
const standBtn = document.getElementById('stand');
const resetBtn =  document.getElementById('reset-btn');
const dialog = document.getElementById("dialog");

window.onload = () => {
    buildDeck();
    shuffleDeck();
    startGame();
}

const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['C', 'D', 'H', 'S'];
    deck = []
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
    // console.log(deck);
}

const startGame = () => {
    hidden = deck.pop();
    dealerSum += getValueOfEachCard(hidden);
    dealerAces += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    // console.log(dealerSum)
    let cardImage = document.createElement('img'); //creates a card that has been dealt
    let card = deck.pop();
    cardImage.src = `../assets/cards/${card}.png`
    dealerSum += getValueOfEachCard(card);
    dealerAces += checkAce(card);
    document.getElementById('dealer-cards').append(cardImage);

    for(let i = 0; i < 2; i++) {
        let cardImage = document.createElement('img'); //creates a card that has been dealt
        let card = deck.pop();
        cardImage.src = `../assets/cards/${card}.png`
        playerSum += getValueOfEachCard(card);
        playerAces += checkAce(card);
        document.getElementById('player-cards').append(cardImage);
    }
    dealerShowing += getValueOfEachCard(card);
    
    document.getElementById('player-sum').textContent = playerSum;
    document.getElementById('dealer-sum').textContent = dealerShowing;
    hitBtn.addEventListener('click', hit)
    standBtn.addEventListener('click', stand)
}

const hit = () => {
    if(!aHit) {
        return;
    } else {
        let cardImage = document.createElement('img'); //creates a card that has been dealt
        let card = deck.pop();
        cardImage.src = `../assets/cards/${card}.png`
        playerSum += getValueOfEachCard(card);
        playerAces += checkAce(card);
        document.getElementById('player-cards').append(cardImage);
        if(reduceAce(playerSum, playerAces) > 21) {
            aHit = false;
        }
    }
    document.getElementById('player-sum').textContent = playerSum;
}

const stand = () => {
    dealerSum = reduceAce(dealerSum, dealerAces);
    playerSum = reduceAce(playerSum, playerAces);
    aHit = false;
    document.getElementById('hidden').src = `../assets/cards/${hidden}.png`

    let message = '';
    if(playerSum > 21) {
        message = 'You bust '
    }else if(dealerSum > 21) {
        message = 'You win!'
    }else if (playerSum == dealerSum) {
        message = 'Push'
    }else if(playerSum > dealerSum) {
        message = 'You win!'
    }else if(playerSum < dealerSum) {
        message = 'You lose.'
    }
    while (dealerSum < 17) {
        let cardImage = document.createElement('img'); //creates a card that has been dealt
        let card = deck.pop();
        cardImage.src = `../assets/cards/${card}.png`
        dealerSum += getValueOfEachCard(card);
        dealerAces += checkAce(card);
        document.getElementById('dealer-cards').append(cardImage);
    }

    document.getElementById('results').textContent = message;
    document.getElementById('dealer-sum').textContent = dealerSum;
    document.getElementById('player-sum').textContent = playerSum;

    dialog.showModal();
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

const checkAce = (card) => {
    if(card[0] == 'A') {
        return 1;
    } else {
        return 0;
    }
}

const reduceAce = (playerSum, playerAces) => {
    while(playerSum > 21 && playerAces > 0) {
        playerSum += 10;
        playerAces -= 1;
    }
    return playerSum;
}

resetBtn.addEventListener('click', () => {
    window.location.reload();
});
