let deck;

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
    console.log(deck);
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

buildDeck();
shuffleDeck();

const deal = () => {
    hand = [];
    
}

