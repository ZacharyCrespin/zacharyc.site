window.onload = function() {
    // Update Favicon for Dark Mode
    const darkModeListener = (event) => {
    if (event.matches) {
        document.getElementById('favicon').setAttribute("href","/images/favicon-white.png");
    } else {
        document.getElementById('favicon').setAttribute("href","/images/favicon-black.png");
    }
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('favicon').setAttribute("href","/images/favicon-white.png");
    } else {
        document.getElementById('favicon').setAttribute("href","/images/favicon-black.png");
    }

    // Register Service Worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("https://zacharyc.site/js/service-worker.js");
    }

    // Hide Loader
    document.getElementById("loader").style.display = "none";
}

function menu() {
    if (document.getElementById("menu").style.display !== "block") {
      document.getElementById("menu").style.display = "block"
    } else {
      document.getElementById("menu").style.display = "none"
    }
  }