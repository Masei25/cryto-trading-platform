//scroll
var myNav = document.getElementById("nav");

window.onscroll = function () {
"use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("bg-blue-900", "opacity-90");
    } else {
        myNav.classList.remove("bg-blue-900", "opacity-90");
    }
};

//slide show
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

const init = (n) => {
    slides.forEach((slide) => {
        slide.style.display = "none";
    })
    slides[n].style.display = "block"
} 

document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide);
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    init(currentSlide);
}

setInterval(() => {
    next()
}, 4000)

