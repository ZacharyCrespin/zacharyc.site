function menu() {var x = document.getElementById("myTopnav");if (x.className === "topnav") {x.className += " responsive";} else {x.className = "topnav";}}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};

function openSearch() {
    document.getElementById("searchBox").style.display = "block";
    document.getElementById("searchIcon").style.display = "none";
    document.getElementById("myTopnav").className = "topnav";
};
function closeSearch() {
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("searchIcon").style.display = "block";
};