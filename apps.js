
//for slideshow

let slidePosition = 0;
const slides = document.getElementsByClassName('item');
const totalSlides = slides.length;

document.
    getElementById('next')
    .addEventListener("click",function(){
        moveToNextSlide();
    })
document.
    getElementById('prev')
    .addEventListener("click",function(){
        MoveToPrevSlide();
    })

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('item--visible');
            slide.classList.add('item--hidden');
        }
        slides[slidePosition].classList.add('item--visible');
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides -1){
            slidePosition = 0;
        } else {
            slidePosition++;
        }

        updateSlidePosition();
    }

    function MoveToPrevSlide (){
        if (slidePosition === 0) {
            slidePosition = totalSlides -1;
        } else {
            slidePosition--;
        }

        updateSlidePosition();
    }



    // for contact form 

    