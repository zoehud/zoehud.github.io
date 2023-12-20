const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;

function flipCard() {
  if (!hasFlippedCard) {
    // Toggle the 'flip' class to show the back of the card
    this.classList.toggle('flip');
    hasFlippedCard = true;
  } else {
    // Toggle the 'flip' class to show the back of the card
    this.classList.toggle('flip');
    hasFlippedCard = false;
  }
}

// Add a click event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));
