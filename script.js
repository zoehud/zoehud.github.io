const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  // Toggle the 'flip' class to show the back of the card
  this.classList.toggle('flip');
}

// Add a click event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));
