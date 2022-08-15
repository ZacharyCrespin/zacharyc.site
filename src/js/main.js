function consentGranted() {
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });
    window.clarity('consent');
}
function acceptCookies() {
    localStorage.setItem("cookies", true)
    consentGranted()
    document.getElementById("cookie-consent").style.display = "none";
}
function declineCookies() {
    localStorage.setItem("cookies", false)
    document.getElementById("cookie-consent").style.display = "none";
}
window.onload = function() {
    // Register Service Worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("https://zacharyc.site/js/sw.js");
    }
    // 
    if (localStorage.getItem("cookies") == "true") {
        consentGranted()
    } else {
        document.getElementById("cookie-consent").style.display = "";
    }
}

function menu() {
    if (document.getElementById("menu").style.display !== "inline-block") {
        document.getElementById("menu").style.display = "inline-block"
    } else {
        document.getElementById("menu").style.display = "none"
    }
}