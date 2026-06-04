
// Brand Slider Logic with Robust Scroll Handling

// Initialize variables
let target = 0;
let current = 0;
let ease = 0.075;

// Select elements defensively
const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

// Initialize maxScroll
let maxScroll = 0;

// Helper to calculate maxScroll based on content width
function calculateMaxScroll() {
    if (sliderWrapper) {
        // scrollWidth gives the full width of the content, including overflow
        // We subtract the window width to find the maximum scrollable distance
        maxScroll = sliderWrapper.scrollWidth - window.innerWidth;
        if (maxScroll < 0) maxScroll = 0;
        // console.log("Max scroll recalculated:", maxScroll);
    }
}

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function isMobileView() {
    return window.innerWidth <= 768;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
    if (!activeSlide) return; // Guard clause

    const partWidth = markerMaxMove / 3;
    let currentPart;
    if (isMobileView()) {
        currentPart = Math.round((markerMove - 10) / partWidth) + 1;
    } else {
        currentPart = Math.round((markerMove - 70) / partWidth) + 1;
    }
    currentPart = Math.min(15, currentPart);
    activeSlide.textContent = `${currentPart} / 3`;
}

function update() {
    current = lerp(current, target, ease);

    // Move the slider
    if (sliderWrapper) {
        gsap.set(".slider-wrapper", {
            x: -current,
        });
    }

    // Update marker logic if elements exist
    if (markerWrapper) {
        let moveRatio = (maxScroll > 0) ? current / maxScroll : 0;
        let markerMaxMove;

        if (isMobileView()) {
            markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 200;
        } else {
            markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 410;
        }

        let markerMove;
        if (isMobileView()) {
            markerMove = 10 + moveRatio * markerMaxMove;
        } else {
            markerMove = 70 + moveRatio * markerMaxMove;
        }

        gsap.set(".marker-wrapper", {
            x: markerMove,
        });

        updateActiveSliderNumber(markerMove, markerMaxMove);
    }

    requestAnimationFrame(update);
}

// Event Listeners

// 1. Resize Handling
window.addEventListener("resize", calculateMaxScroll);

// 2. Load Handling (Critical for correct image widths)
window.addEventListener("load", calculateMaxScroll);

// 3. Immediate Init
calculateMaxScroll();

// 4. Scroll Hijacking (The Core Logic) - IMPROVED
window.addEventListener("wheel", (e) => {
    // Only hijack if the slider exists
    if (slider) {
        // Support both vertical scroll (mouse wheel) and horizontal swipe (trackpad)
        let delta = e.deltaY;

        // If horizontal scroll is dominant, use it
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            delta = e.deltaX;
        }

        // Calculate what the new target would be
        let newTarget = target + delta;

        // Only prevent default if we're actually going to scroll the slider
        // (i.e., if we're not at the edges or trying to go past them)
        const wouldScroll = (newTarget > 0 && newTarget < maxScroll) ||
            (newTarget <= 0 && target > 0) ||
            (newTarget >= maxScroll && target < maxScroll);

        if (wouldScroll) {
            e.preventDefault(); // Only prevent default when actively scrolling the slider
            target = newTarget;
            target = Math.max(0, target);
            target = Math.min(maxScroll, target);
        }
        // If we're at the edges and trying to scroll further, allow default behavior (vertical page scroll)
    }
}, { passive: false });


// 5. Touch Handling for Mobile
let touchStartX = 0;
let touchStartY = 0;

if (slider) {
    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    slider.addEventListener("touchmove", (e) => {
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        const touchDiffX = touchStartX - touchEndX;
        const touchDiffY = touchStartY - touchEndY;

        // Allow horizontal swipe
        if (Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
            // e.preventDefault(); // Optional: prevent creating history navigation on some browsers
            target += touchDiffX;
            target = Math.max(0, target);
            target = Math.min(maxScroll, target);
        }

        touchStartX = touchEndX;
        touchStartY = touchEndY;
    }, { passive: false });
}

// Start the animation loop
update();
