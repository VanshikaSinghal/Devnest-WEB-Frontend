const container = document.querySelector(".container");
const totalSeats = 300;
let bookedSeats = 0;

const bookedSeatsSpan = document.querySelector(".booked-seats");
const remainingSeatsSpan = document.querySelector(".remaining-seats");

function updateCounts() {
    bookedSeatsSpan.innerText = bookedSeats;
    remainingSeatsSpan.innerText = totalSeats - bookedSeats;
}

for (let i = 0; i < 300; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.addEventListener("click", (event) => {
        // console.log(event);
        // console.log(e.target.classList);
        const element = event.target;
        if (element.classList.contains("occupied")) {
            element.classList.remove("occupied");
            bookedSeats--;
        } else {
            element.classList.add("occupied");
            bookedSeats++;
        }
        updateCounts();
    });
    container.appendChild(seat);
}