function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {x.className += " open";} else {x.className = "menu";}
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};