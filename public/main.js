window.onload = function() {
    document.getElementById("loader").style.display = "none";

    // Update favicon for dark mode
    const darkModeListener = (event) => {
    if (event.matches) {
        document.getElementById('icon').setAttribute("href","imgs/favicon-white.png");
    } else {
        document.getElementById('icon').setAttribute("href","imgs/favicon-black.png");
    }
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('icon').setAttribute("href","imgs/favicon-white.png");
    } else {
        document.getElementById('icon').setAttribute("href","imgs/favicon-black.png");
    }

    // if (localStorage.getItem('Theme') == 'Dark') {
    //     dark()
    // }
    // if (localStorage.getItem('Theme') == 'Light') {
    //     light()
    // }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }
}
// function light() {
//     localStorage.setItem('Theme',  'Light');
//     document.documentElement.style.setProperty('--white', '#000000');
//     document.documentElement.style.setProperty('--black', '#FFFFFF');
// }
// function dark() {
//     localStorage.setItem('Theme',  'Dark');
//     document.documentElement.style.setProperty('--white', '#FFFFFF');
//     document.documentElement.style.setProperty('--black', '#000000');
// }
function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}
function drop1() {
    var x = document.getElementById("dropdown1");
    if (x.className === "dropdown") {x.className += " open";} else {x.className = "dropdown";}
}