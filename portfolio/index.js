let menuBtn = document.getElementById("menu");
let navMenu = document.getElementById("myTopnav");

function openMenu() {
    if (navMenu.className === "head-links") {
        navMenu.className += " responsive";
        console.log("in");
    } else {
        navMenu.className = "head-links";
        console.log("out");
    }
}

menuBtn.addEventListener("click", openMenu);