/*=====================================
DARASIMI PORTFOLIO
JavaScript
=====================================*/

// =============================
// SELECT ELEMENTS
// =============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const themeButton = document.getElementById("theme-toggle");

const themeIcon = themeButton.querySelector("i");

const backToTop = document.getElementById("backToTop");


// =============================
// MOBILE NAVIGATION
// =============================

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


// =============================
// CLOSE MENU WHEN LINK IS CLICKED
// =============================

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


// =============================
// DARK/LIGHT MODE
// =============================

const lightTheme = {

    background: "#F8FAFC",

    card: "#FFFFFF",

    white: "#0F172A",

    text: "#334155",

    grey: "#64748B"

};

const darkTheme = {

    background: "#0F172A",

    card: "#1E293B",

    white: "#F8FAFC",

    text: "#CBD5E1",

    grey: "#94A3B8"

};


function applyTheme(theme){

    document.documentElement.style.setProperty("--background", theme.background);

    document.documentElement.style.setProperty("--card", theme.card);

    document.documentElement.style.setProperty("--white", theme.white);

    document.documentElement.style.setProperty("--text", theme.text);

    document.documentElement.style.setProperty("--grey", theme.grey);

}


let darkMode = true;


themeButton.addEventListener("click", () => {

    darkMode = !darkMode;

    if(darkMode){

        applyTheme(darkTheme);

        themeIcon.className = "fa-solid fa-moon";

    }

    else{

        applyTheme(lightTheme);

        themeIcon.className = "fa-solid fa-sun";

    }

});


// =============================
// BACK TO TOP BUTTON
// =============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "flex";

    }

    else{

        backToTop.style.display = "none";

    }

});


backToTop.style.display = "none";


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =============================
// SIMPLE SCROLL REVEAL
// =============================

const revealItems = document.querySelectorAll(

".hero, .featured, .portfolio-preview, .card"

);


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},

{

    threshold:0.15

}


);


revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="all .8s ease";

    observer.observe(item);

});


// =============================
// CURRENT YEAR
// =============================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

    `&copy; ${year} Darasimi Jegede<br>Designed and Developed by Darasimi Jegede`;

}


// =============================
// CONSOLE MESSAGE
// =============================

console.log("Welcome to Darasimi Portfolio v1.0 🚀");