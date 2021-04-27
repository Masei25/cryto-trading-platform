const banner = document.querySelector(".banner");

window.onload = function(){ 
    setInterval(function(){
        banner.classList.remove("animate-bounce");
    }, 2000)
}

//lazy loading
const images = document.querySelectorAll(".img");

let imageOption = {};

let observer = new IntersectionObserver((val, observer) => {
    val.forEach((entry) => {
        console.log(entry);
        if(!entry.isIntersecting) return;
        const image = entry.target
        const imgSrc = image.getAttribute("src");
        image.src = imgSrc;
    });
}, imageOption);

images.forEach((image) => {
    observer.observe(image);      
});

 
//slider
// let slideBanner = document.querySelectorAll(".slides");
// let currentBanner = 0;

// function reset() {
//     for(let i = 0; i<slideBanner.length; i++) {
//         slideBanner[i].style.display = "block";
//     }
// }

// function startSlide(){
//     reset();
//     sliderBanner[currentBanner].style.display = "block"; 
// }
// startSlide();
