function getBoxHeight() {
    let box = document.querySelectorAll('.main__rate'),
    heights = [];
    
    for (let i = 0; i < box.length; i++) {
        box[i].style.height = 'auto';
    }

    for (let i = 0; i < box.length; i++) {
        heights.push(box[i].offsetHeight);
    }
    console.log(heights);
    let max = Math.max.apply(null, heights);
    if (document.documentElement.clientWidth < 992) {
        max += 20;
    }

    for (let i = 0; i < box.length; i++) {
        box[i].style.height = max + 'px';
    }
}

getBoxHeight();

window.addEventListener("resize", getBoxHeight);