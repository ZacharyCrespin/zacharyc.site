fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json();
})
.then(response => {
    document.getElementById('advice').innerHTML = response.slip.advice;
})