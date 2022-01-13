function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
function drop() {
    var x = document.getElementById("dropdown");
    if (x.className === "dropdown") {x.className += "-open";} else {x.className = "dropdown";}
}
function openSearch() {
    var x = document.getElementById("search");
    if (x.className === "search") {x.className += "-open";} else {x.className = "search";}
}