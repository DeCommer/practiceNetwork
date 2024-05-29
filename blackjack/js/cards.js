let dealerShowing = 0;
let dealerSum = 0;
let playerSum = 0;
let dealerAces = 0;
let playerAces = 0;
let credits = 9000;
let hidden;
let deck;
let aHit = true;

const hitBtn = document.getElementById('hit');
const standBtn = document.getElementById('stand');
const playAgainBtn =  document.getElementById('play-again-btn');
const dialog = document.getElementById("dialog");
const nameDialog = document.getElementById('name-dialog');
let usrName = document.getElementById('usr-name');
const usrNameEnter = document.getElementById('usr-name-enter');

const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['♧', '◇', '♡', '♤'];
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
    // nameEntry();
    hidden = deck.pop();
    dealerSum += getValueOfEachCard(hidden);
    dealerAces += checkAce(hidden);
    let cardImage = document.createElement('img'); //creates a card that has been dealt
    let card = deck.pop();
    cardImage.src = `../assets/cards/${card}.png`
    dealerSum += getValueOfEachCard(card);
    dealerAces += checkAce(card);
    dealerCards = document.getElementById('dealer-cards')
    dealerCards.append(cardImage);

    for(let i = 0; i < 2; i++) {
        let cardImage = document.createElement('img'); //creates a card that has been dealt
        let card = deck.pop();
        cardImage.src = `../assets/cards/${card}.png`
        playerSum += getValueOfEachCard(card);
        playerAces += checkAce(card);
        playerCards = document.getElementById('player-cards')
        playerCards.append(cardImage);
    }
    dealerShowing += getValueOfEachCard(card);
    
    document.getElementById('player-sum').textContent = playerSum;
    document.getElementById('dealer-sum').textContent = dealerShowing;
    hitBtn.addEventListener('click', hit)
    standBtn.addEventListener('click', stand)

    console.log(hidden);
    console.log(card);
    console.log(dealerSum);
    console.log(playerSum);
    console.log(dealerCards)
    console.log(playerCards)
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
    if(playerSum > 21) {
        message = 'Player busts'
        document.getElementById('results').textContent = message;
        dialog.showModal();
    }
    document.getElementById('player-sum').textContent = playerSum;
}

const stand = () => {
    dealerSum = reduceAce(dealerSum, dealerAces);
    playerSum = reduceAce(playerSum, playerAces);
    aHit = false;
    // document.getElementById('hidden').src = `../assets/cards/${hidden}.png`
    console.log(`Hidden card; ${hidden}, card showing: ${dealerShowing}`);
    
    while (dealerSum < 17) {
        let cardImage = document.createElement('img'); //creates a card that has been dealt
        card = deck.pop();
        cardImage.src = `../assets/cards/${card}.png`
        dealerSum += getValueOfEachCard(card);
        dealerAces += checkAce(card);
        document.getElementById('dealer-cards').append(cardImage);
    }

    let message = '';
    if(playerSum > 21) {
        message = 'Player busts'
    }else if(dealerSum > 21) {
        message = 'Dealer busts! You win!'
    }else if (playerSum == dealerSum) {
        message = 'Push'
    }else if(playerSum > dealerSum) {
        message = 'You win!'
    }else if(playerSum < dealerSum) {
        message = 'You lose.'
    }

    document.getElementById('results').textContent = message;
    document.getElementById('dealer-sum').textContent = dealerSum;
    document.getElementById('player-sum').textContent = playerSum;

    dialog.showModal();
}

const reset = () => {
    dealerCards.innerHTML = `<img src="../assets/cards/BACK.png">`
    playerCards.innerHTML = ''
    dealerShowing = 0;
    dealerSum = 0;
    playerSum = 0;
    dealerAces = 0;
    playerAces = 0;
    hidden;
    buildDeck();
    shuffleDeck();
    aHit = true;
    startGame();
}

buildDeck();
shuffleDeck();
startGame();

playAgainBtn.addEventListener('click', () => {
    dialog.close()
    reset();
});