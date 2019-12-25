let slides = document.querySelectorAll(".slider-item"),
    dots = document.querySelectorAll(".dots-item"),
    slider = document.querySelector('.slider'),
    curSlide = 0,
    video = document.querySelectorAll('video');

slider.addEventListener('click', videoClick);



for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        if (i !== curSlide) {
            slides[curSlide].classList.remove("active");
            video[curSlide].currentTime = 0;
            video[curSlide].pause();
            dots[curSlide].style.backgroundColor = 'lightgray';
            curSlide = i;
            slides[curSlide].classList.add("active");
            dots[curSlide].style.backgroundColor = '#00beff';
            video[curSlide].play();
            video[curSlide].addEventListener('ended', nextSlide);
        }
    });
}


video[curSlide].play();
video[curSlide].addEventListener('ended', nextSlide);
dots[curSlide].style.backgroundColor = '#00beff';

function nextSlide() {
    slides[curSlide].classList.remove("active");
    video[curSlide].currentTime = 0;
    video[curSlide].pause();
    dots[curSlide].style.backgroundColor = 'lightgray';
    curSlide++;
    curSlide = curSlide < slides.length ? curSlide : 0;
    slides[curSlide].classList.add("active");
    dots[curSlide].style.backgroundColor = '#00beff';
    video[curSlide].play();
    video[curSlide].addEventListener('ended', nextSlide);
}

function videoClick() {
    
    if (video[curSlide].paused) {
        video[curSlide].play();
    } else {
        video[curSlide].pause();
    }
}

function dotClick () {
    if (i === curslide) {
        return;
    }
    else {

    }
}