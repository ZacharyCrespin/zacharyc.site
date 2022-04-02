window.onload = function() {
    // Update Favicon for Dark Mode
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

    // Register Servic Worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("https://zacharyc.site/service-worker.js");
    }

    // Hide Loader
    document.getElementById("loader").style.display = "none";
}

function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}

function drop1() {
    var x = document.getElementById("dropdown1");
    if (x.className === "dropdown") {x.className += " open";} else {x.className = "dropdown";}
}