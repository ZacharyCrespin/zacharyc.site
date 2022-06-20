var guessme = Math.round(Math.random() * (99) + 1);
var speech = 'Loading';

function process(mystery) {
    var guess = document.getElementById("guess").value;
    var speech = '"' + guess + '" does not make sense.';
    document.getElementById("guess").value = '';
    if (guess == mystery) {
        var speech = 'Well done the number is ' + mystery + '! ';
    }
    if (mystery < guess) {
        speech = 'Less than ' + guess;
    }
    if (mystery > guess) {
        speech = 'Greater than ' + guess;
    }
    if (guess == '') {
        speech = 'You didn\'t guess anything'
    }
    document.getElementById("prompt").innerHTML = speech;
    document.getElementById("guess").focus();
}