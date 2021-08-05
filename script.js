const navbar = document.getElementById("navbar");

const toggleMenu = document.getElementById("toggle-menu");

// The first time the user clicks the hamburger menu, I want it to change the display,
// but the way I currently have the code, it's checking for toggleMenu.style.display
// to equal "none". Even though that is the default setting, it doesn't show as none
// it shows up as blank when i console log it, i I am adding this variable to make
// sure that thefirst click gives the desired response
let count = 0;

function changeNavbar() {
    if (navbar.style.backgroundColor === "rgb(0, 0, 0)") {
        navbar.style.backgroundColor = "dodgerblue";
    } else {
        navbar.style.backgroundColor = "#000";
    }
}

function flipMenu() {
    if (count < 1) {
        count++;
        return toggleMenu.style.display = "block";
    }    
    if (toggleMenu.style.display === "none") {
        toggleMenu.style.display="block";
    } else {
        toggleMenu.style.display = "none";
    }
}