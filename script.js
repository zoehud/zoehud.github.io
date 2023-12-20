const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let flippedCard;

function flipCard() {
  if (lockBoard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    flippedCard = this;
  } else {
    // You can perform any logic related to the flipped card here
    // For example, you can access the flippedCard.dataset.framework
    console.log('Flipped Card:', flippedCard.dataset.framework);
  }
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  flippedCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
