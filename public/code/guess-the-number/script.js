var guessme = Math.round(Math.random() * (99) + 1);
var speech = 'Loading';

function process(mystery) {
    var guess = document.forms.guessquiz.guess.value;
    var speech = '"' + guess + '" does not make sense.';
    document.forms.guessquiz.guess.value = '';
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
    document.forms.guessquiz.prompt.value = speech;
    document.forms.guessquiz.guess.focus();
}