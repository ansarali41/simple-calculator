var text = '';
function updateText(value) {
    text += value;
    document.getElementById('display').innerHTML = text;
}
function reset() {
    text = '';
    document.getElementById('display').innerHTML = '0';
}
function operation() {
    if (text == '') {
        document.getElementById('display').innerHTML = '0';
    }
    else {
        var result = eval(text);
        document.getElementById('display').innerHTML = result;
    }
}
