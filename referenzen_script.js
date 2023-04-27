// Preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

// Schließen des Dropdown-Menüs, wenn auf einen Link geklickt wird
var dropdown = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.getElementsByClassName("container-dropdown")[0];
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }            
});
}

var dropbtn = document.getElementById("myBtn");
dropbtn.addEventListener("click", function() {
this.classList.toggle("clicked");
});   