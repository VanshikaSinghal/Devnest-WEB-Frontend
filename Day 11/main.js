const arr = [{
        ques: "1. I am a 7 letter word. I become longer when my third letter is removed. Who am I ?",
        a: "Longing",
        b: "Lengthy",
        c: "Lounger",
        d: "Longine",
        ans: "ans3"
    },
    {
        ques: "2. What is 3/7 chicken, 2/3 cat and 2/4 goat ?",
        a: "Chipmunk",
        b: "Childbirth",
        c: "Chiffon",
        d: "Chicago",
        ans: "ans4"
    },
    {
        ques: "3. What comes once in a minute, twice in a moment, but never in a thousand years ?",
        a: "One-tenth of a century",
        b: "1/1000 of a decade",
        c: "The letter 'M'",
        d: "Thirty-one seconds",
        ans: "ans3"
    },
    {
        ques: "4. What flies when it's born, lies when it's alive, and runs when it's dead ?",
        a: "An eaglet",
        b: "A snowflake",
        c: "A grain of sand",
        d: "A fruit fly",
        ans: "ans2"
    },
    {
        ques: "5. When I get multiplied by any number, the sum of the figures in the product is always me. What am I ?",
        a: "9",
        b: "8",
        c: "2",
        d: "4",
        ans: "ans1"
    }
];

const startQuiz = document.getElementById('start-btn');
const game = document.querySelector('.game');
const question = document.getElementById('question');
const option1 = document.getElementById('opt1');
const option2 = document.getElementById('opt2');
const option3 = document.getElementById('opt3');
const option4 = document.getElementById('opt4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const scoreCard = document.querySelector('.score-card');
const countdown = document.getElementById('countdown');
const name = document.querySelector('.name');
const cont = document.querySelector('.container');

let i = 0;
let score = 0;

const startingMinutes = 10;
let time = startingMinutes * 60;

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `<h3>Time : ${minutes}:${seconds}</h3>`;
    time--;
}

startQuiz.addEventListener('click', () => {
    startQuiz.style.display = "none";
    cont.style.background = "black";
    game.style.display = "block";
    loadQuestions();
    setInterval(updateCountdown, 1000);

});

submit.addEventListener('click', () => {
    let currAnswer = checkAnswer();
    if (currAnswer === arr[i].ans) {
        score++;
    }

    i++;
    deselectAll();
    if (i < arr.length) {
        loadQuestions();
    } else {
        game.style.display = "none";
        scoreCard.style.display = "block";
        scoreCard.innerHTML = `
      <h2>You scored ${score}/${arr.length} </h2>
      <button class="btn" onClick="location.reload()">Play Again</button>
      `
    }
});

function loadQuestions() {
    question.innerText = arr[i].ques;
    option1.innerText = arr[i].a;
    option2.innerText = arr[i].b;
    option3.innerText = arr[i].c;
    option4.innerText = arr[i].d;
}

function checkAnswer() {
    let answer;

    answers.forEach(curr => {
        if (curr.checked) {
            answer = curr.id;
        }
    });
    return answer;
}

function deselectAll() {
    answers.forEach(curr => curr.checked = false);
}