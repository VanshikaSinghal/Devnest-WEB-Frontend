const names = document.querySelector('#names')

function focusEvent() {
    names.style.background = "#56b356"
}

function clickEvent() {
    alert("You have clicked on the submit button");
}

function changeEvent() {
    var e = document.getElementById("branch");
    var opt = e.options[e.selectedIndex].value;
    var val = e.options[e.selectedIndex].text;
    alert("Your selected branch is " + val);
}

function submitEvent(event) {
    console.log(event);
    event.preventDefault();
    // alert("Your form has been submitted");
}

function dragEvent() {
    alert("You have dragged a file over textarea");
}

function dropEvent(event) {
    console.log("File dropped on textarea is ");
}