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
        if(!entry.isIntersecting) return;
        const image = entry.target
        const imgSrc = image.getAttribute("src");
        image.src = imgSrc;
    });
}, imageOption);

images.forEach((image) => {
    observer.observe(image);      
});

 