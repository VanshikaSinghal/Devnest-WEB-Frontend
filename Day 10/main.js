const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 35;
let score = 0;
const movesSpan = document.querySelector(".moves");
const scoreSpan = document.querySelector(".score");

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    moves--;
    movesSpan.innerText = moves;

    if (moves == 0) {
        alert('Game Over!\nYou Lose!\nYour Score is: ' + score)
        window.location.reload()
    }

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? removeCards() : unflipCards();
}

function removeCards() {
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";
    score += 10;
    scoreSpan.innerText = score;

    if (score == 100) {
        alert('Congratulations!\nYou Won!\nYour Score is: ' + score)
        window.location.reload()
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));