const cards = document.querySelectorAll('.card');

let cardsUp =  0;
let flipped = false;
let freeze = false;
let originCard, matchCard;

function flip() {
    if(freeze) return;
    if(this === originCard) return;
    this.classList.add('flip');
    if(!flipped) {
        flipped = true;
        originCard = this;
        return;
    } 
    matchCard = this;
    checkMatch();
}

function hasClass(element, clsName) {
  return (' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}

function checkMatch() {
    let match = originCard.dataset.framework === matchCard.dataset.framework 
    match ? flippedCards() : notFlippedCards();

}
function checkWin() {
    if(cardsUp === 12) {
        document.querySelector('.modal').classList.add('active');
        document.querySelector('.overlay').classList.add('active');
        start();
        stop();
        
        document.querySelector('.modal').addEventListener('click') = window.location.reload();
    }
}

const start = () => {
    setTimeout(function() {
        confetti.start();
    }, 200)
}
const stop = () => {
    setTimeout(function() {
        confetti.stop();
    }, 5000)
}

function flippedCards() {
    originCard.removeEventListener('click', flip);
    matchCard.removeEventListener('click', flip);
    cardsUp += 2;
    checkWin();
    reset();
}

function notFlippedCards() {
    freeze = true;
    setTimeout(() => {
        originCard.classList.remove('flip');
        matchCard.classList.remove('flip');
        reset();
    }, 1000);
}

function reset() {
    [flipped, freeze] = [false, false];
    [originCard, matchCard] = [null, null];
}

(function shuffleOrder() {
    cards.forEach(card => {
        let position = Math.floor(Math.random() * 12);
        card.style.order = position;
    })
})();

cards.forEach(card => card.addEventListener('click', flip));