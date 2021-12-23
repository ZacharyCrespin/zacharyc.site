function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
function searchOpen() {
    document.getElementById("search").style.display = "block";
    document.getElementById("searchIcon").style.display = "none"
}
function searchClose() {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchIcon").style.display = "block"
}