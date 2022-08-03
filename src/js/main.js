window.onload = function() {
    // Register Service Worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("https://zacharyc.site/js/service-worker.js");
    }
    // Hide Loader
    document.getElementById("loader").style.display = "none";
}

function menu() {
    if (document.getElementById("menu").style.display !== "inline-block") {
        document.getElementById("menu").style.display = "inline-block"
    } else {
        document.getElementById("menu").style.display = "none"
    }
}