window.onload = function() {
    // Update favicon for dark mode
    const darkModeListener = (event) => {
    if (event.matches) {
        document.getElementById('favicon').setAttribute("href","https://zacharyc.site/imgs/favicon-white.png");
    } else {
        document.getElementById('favicon').setAttribute("href","https://zacharyc.site/imgs/favicon-black.png");
    }
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('favicon').setAttribute("href","https://zacharyc.site/imgs/favicon-white.png");
    } else {
        document.getElementById('favicon').setAttribute("href","https://zacharyc.site/imgs/favicon-black.png");
    }
    
    // Update page theme
    if (localStorage.getItem('Theme') == 'Dark') {
        dark()
    }
    if (localStorage.getItem('Theme') == 'Light') {
        light()
    }
    if (localStorage.getItem('Theme') == 'Custom') {

        localStorage.setItem('Custom-White',  localStorage.getItem('Custom-White'));
        localStorage.setItem('Custom-Black',  localStorage.getItem('Custom-Black'));
        
        document.documentElement.style.setProperty('--white', localStorage.getItem('Custom-White'));
        document.documentElement.style.setProperty('--black', localStorage.getItem('Custom-Black'));
    }

    document.getElementById("loader").style.display = "none";

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }
}

function light() {
    localStorage.setItem('Theme',  'Light');

    document.documentElement.style.setProperty('--white', '#000000');
    document.documentElement.style.setProperty('--black', '#FFFFFF');

    localStorage.removeItem('Custom-White');
    localStorage.removeItem('Custom-Black');
}

function dark() {
    localStorage.setItem('Theme',  'Dark');

    document.documentElement.style.setProperty('--white', '#FFFFFF');
    document.documentElement.style.setProperty('--black', '#000000');

    localStorage.removeItem('Custom-White');
    localStorage.removeItem('Custom-Black');
}

function custom() {
    localStorage.setItem('Theme',  'Custom');

    localStorage.setItem('Custom-White',  document.getElementById("Custom-White").value);
    localStorage.setItem('Custom-Black',  document.getElementById("Custom-Black").value);
    
    document.documentElement.style.setProperty('--white', document.getElementById("Custom-White").value);
    document.documentElement.style.setProperty('--black', document.getElementById("Custom-Black").value);
}

function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}

function drop1() {
    var x = document.getElementById("dropdown1");
    if (x.className === "dropdown") {x.className += " open";} else {x.className = "dropdown";}
}

function settings() {
    var x = document.getElementById("settings");
    if (x.className === "settings") {x.className += " open";} else {x.className = "settings";}
}

function customTheme() {
    var x = document.getElementById("customThemePicker");
    if (x.className === "customThemePicker") {x.className += " open";} else {x.className = "customThemePicker";}
}