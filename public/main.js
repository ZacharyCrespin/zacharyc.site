function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
function drop() {
    var x = document.getElementById("drop");
    if (x.className === "dropdown") {x.className += "-open";} else {x.className = "dropdown";}
}
function searchOpen() {
    document.getElementById("search").style.display = "block";
    document.getElementById("searchIcon").style.display = "none"
}
function searchClose() {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchIcon").style.display = "block"
}