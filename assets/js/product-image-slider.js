
// const slider = document.querySelector('.gallery');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', e => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const SCROLL_SPEED = 3;
//     const walk = (x - startX) * SCROLL_SPEED;
//     slider.scrollLeft = scrollLeft - walk;
// });

// slider.addEventListener('wheel', e => {
//     e.preventDefault();
//     const SCROLL_SPEED = 10; // Adjust the speed as needed

//     // 2 mobile

//     slider.scrollLeft += e.deltaY * SCROLL_SPEED;
// });





const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

// Mouse events
slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('wheel', e => {
    e.preventDefault();
    const SCROLL_SPEED = 10;
    slider.scrollLeft += e.deltaY * SCROLL_SPEED;
});







// Touch events
// slider.addEventListener('touchstart', e => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.touches[0].pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('touchend', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('touchmove', e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.touches[0].pageX - slider.offsetLeft;
//     const SCROLL_SPEED = 3.6; // Adjust the speed as needed for touch
//     const walk = (x - startX) * SCROLL_SPEED;
//     slider.scrollLeft = scrollLeft - walk;
// });









// const arrowLeft = document.querySelector('.arrow-left');
// const arrowRight = document.querySelector('.arrow-right');
// const SCROLL_AMOUNT = 392; // Adjust scroll amount as needed

// // Arrow click events
// arrowLeft.addEventListener('click', () => {
//     slider.scrollLeft -= SCROLL_AMOUNT;
// });

// arrowRight.addEventListener('click', () => {
//     slider.scrollLeft += SCROLL_AMOUNT;
// });











const slides = Array.from(slider.querySelectorAll('li:not([class*="product-img-pc-slide"])'));
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

// Arrow click events
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    scrollToCenter(currentIndex);
});

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    scrollToCenter(currentIndex);
});

// Function to center the slide
function scrollToCenter(index) {
    const slide = slides[index];
    if (!slide) return; // Handle case where slide is undefined

    const slideWidth = slide.offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const scrollLeft = slide.offsetLeft - (sliderWidth / 2) + (slideWidth / 2);

    slider.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}


















