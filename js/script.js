let slides = document.querySelectorAll(".slider-item"),
    slider = document.querySelector('#slider');
    curSlide = 0,
    prevArrow = document.querySelector("#prev"),
    nextArrow = document.querySelector('#next');
    video = document.querySelectorAll('video');

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);
slider.addEventListener('click', videoClick);



video[curSlide].play();
video[curSlide].addEventListener('ended', nextSlide);

function prevSlide () {
    slides[curSlide].classList.remove("active");
    video[curSlide].currentTime = 0;
    video[curSlide].pause();
    curSlide--;
    curSlide = curSlide > -1 ? curSlide : slides.length-1;
    slides[curSlide].classList.add("active");
    video[curSlide].play();
    video[curSlide].addEventListener('ended', nextSlide); 
}

function nextSlide() {
    slides[curSlide].classList.remove("active");
    video[curSlide].currentTime = 0;
    video[curSlide].pause();
    curSlide++;
    curSlide = curSlide < slides.length ? curSlide : 0;
    slides[curSlide].classList.add("active");
    video[curSlide].play();
    video[curSlide].addEventListener('ended', nextSlide);
}

function videoClick() {
    
    if (video[curSlide].paused) {
        console.log('clcik');
        video[curSlide].play();
    } else {
        video[curSlide].pause();
    }
}