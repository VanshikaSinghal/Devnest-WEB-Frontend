function screen(val) {
    document.getElementById("box").value = val;
    document.getElementById("boxok").value = val;
}

function clearit() {
    document.getElementById("box").value = "";
    document.getElementById("boxok").value = "";
}

function number(val) {
    document.getElementById("box").value += val;
}

function backspace() {
    var valueNeeded = document.getElementById("box").value;
    var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length - 1);
    document.getElementById("box").value = finalValueNeeded;

}

function solve() {
    try {
        screen(eval(document.getElementById("box").value))
    } catch (e) {
        screen('Error')
    }
}