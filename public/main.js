function menu() {var x = document.getElementById("myTopnav");if (x.className === "topnav") {x.className += " responsive";} else {x.className = "topnav";}}

function showsearch() {
  document.getElementById("search").style.display = "block";
  document.getElementById("SearchIcon").style.display = "none";
  document.getElementById("CloseIcon").style.display = "block";
}
function hidesearch() {
  document.getElementById("search").style.display = "none";
  document.getElementById("SearchIcon").style.display = "block";
  document.getElementById("CloseIcon").style.display = "none";
}
