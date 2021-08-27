var slideIndex = 1;
var delay = 5000;
showSlides(slideIndex);
var autoSlider = setInterval(function() { Slides(1) }, delay);
// window.addEventListener("load", function() {
//     var autoSlider = setInterval(function() { Slides(1) }, delay);
// })



function Slides(n) {
    clearInterval(autoSlider);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        autoSlider = setInterval(function() { Slides(n + 2) }, delay);
    } else {
        autoSlider = setInterval(function() { Slides(n + 1) }, delay);
    }
    // showSlides(slideIndex += n);

}

function currentSlide(n) {
    // showSlides(slideIndex = n);
    clearInterval(autoSlider);
    autoSlider = setInterval(function() { Slides(n + 1) }, delay);
    showSlides(slideIndex = n);

}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-show__item");
    var thumbles = document.getElementsByClassName("slide__thumble-item");
    console.log('showSlides')

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;

    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbles.length; i++) {

        thumbles[i].className = thumbles[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade')
    thumbles[slideIndex - 1].className += " active";
}

// pause on mouse enter and resume on mouseleave

var slideshowContainer = document.getElementsByClassName('slide-show__container')[0];
const pause = () => {
    console.log("pause")
    clearInterval(autoSlider);
}
const resume = () => {
    console.log("resume")
    clearInterval(autoSlider);
    autoSlider = setInterval(function() { Slides(slideIndex) }, delay);
}
slideshowContainer.addEventListener('mouseenter', pause)
slideshowContainer.addEventListener('mouseleave', resume)