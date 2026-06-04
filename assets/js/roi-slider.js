
// Encapsulated ROI Slider Logic
(function () {
    // We wrap in a function/block to avoid global variable pollution, 
    // but expose a setup function if needed. However, since we are targeting specific classes, 
    // immediate execution on DOMContentLoaded is fine.

    document.addEventListener("DOMContentLoaded", () => {
        // Configuration
        const containerSelector = ".roi-slider-container";
        const sliderSelector = ".roi-slider";
        const wrapperSelector = ".roi-slider-wrapper";
        const markerSelector = ".roi-marker-wrapper";
        const activeSlideSelector = ".roi-active-slide";

        const container = document.querySelector(containerSelector);
        if (!container) return; // Exit if ROI slider not present

        const slider = container.querySelector(sliderSelector);
        const sliderWrapper = container.querySelector(wrapperSelector);
        const markerWrapper = container.querySelector(markerSelector);
        const activeSlide = container.querySelector(activeSlideSelector);

        let target = 0;
        let current = 0;
        let ease = 0.075;
        let maxScroll = 0;

        function calculateMaxScroll() {
            if (sliderWrapper) {
                // maxScroll is content width minus viewport width
                maxScroll = sliderWrapper.scrollWidth - window.innerWidth;
                if (maxScroll < 0) maxScroll = 0;
            }
        }

        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function isMobileView() {
            return window.innerWidth <= 768;
        }

        function updateActiveSliderNumber(markerMove, markerMaxMove) {
            if (!activeSlide) return;

            const partWidth = markerMaxMove / 3;
            let currentPart;

            // Adjust offsets based on CSS alignment
            if (isMobileView()) {
                currentPart = Math.round((markerMove - 10) / partWidth) + 1;
            } else {
                currentPart = Math.round((markerMove - 70) / partWidth) + 1;
            }
            // Cap at 15 or however many slides approx? Original logic capped at 15
            // Use 15 as safe upper bound or adjustable
            currentPart = Math.min(15, currentPart);
            activeSlide.textContent = `${currentPart} / 3`;
        }

        function update() {
            current = lerp(current, target, ease);

            if (sliderWrapper) {
                // Using transform for performance
                sliderWrapper.style.transform = `translateX(${-current}px)`;
            }

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

                markerWrapper.style.transform = `translateX(${markerMove}px)`;

                updateActiveSliderNumber(markerMove, markerMaxMove);
            }

            requestAnimationFrame(update);
        }

        // Initialize dimensions
        calculateMaxScroll();
        window.addEventListener("resize", calculateMaxScroll);
        window.addEventListener("load", calculateMaxScroll);

        // --- SCROLL INTERACTION ---
        // Only hijack window scroll if the MOUSE IS OVER THE SLIDER
        // This prevents breaking the rest of the page's vertical scroll.

        let isHovering = false;
        container.addEventListener("mouseenter", () => isHovering = true);
        container.addEventListener("mouseleave", () => isHovering = false);

        window.addEventListener("wheel", (e) => {
            // Check if we should intercept:
            // 1. Mouse is over the slider container
            // 2. We are not at the edges (optional, standard behavior allows escape at edges)

            // However, typical horizontal scroll ux involves intercepting vertical scroll
            // ONLY if the section is in view or hovered.

            if (!isHovering) return; // Allow normal scroll if not hovering our slider

            // Determine delta (support horizontal trackpads)
            let delta = e.deltaY;
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                delta = e.deltaX;
            }

            let newTarget = target + delta;

            const wouldScroll = (newTarget > 0 && newTarget < maxScroll) ||
                (newTarget <= 0 && target > 0) ||
                (newTarget >= maxScroll && target < maxScroll);

            if (wouldScroll) {
                e.preventDefault();
                target = newTarget;
                target = Math.max(0, target);
                target = Math.min(maxScroll, target);
            }
        }, { passive: false });


        // --- TOUCH HANDLING ---
        let touchStartX = 0;
        let touchStartY = 0;

        container.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        container.addEventListener("touchmove", (e) => {
            const touchEndX = e.touches[0].clientX;
            const touchEndY = e.touches[0].clientY;
            const touchDiffX = touchStartX - touchEndX;
            const touchDiffY = touchStartY - touchEndY;

            // Prioritize horizontal swipe
            if (Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
                // Prevent vertical scroll while swiping horizontally if needed, 
                // but usually better to let browser decide or preventDefault if "intent" is clear.
                if (e.cancelable) e.preventDefault();

                target += touchDiffX * 1.5; // Multiplier for touch sensitivity
                target = Math.max(0, target);
                target = Math.min(maxScroll, target);
            }

            touchStartX = touchEndX;
            touchStartY = touchEndY;
        }, { passive: false });

        // Start loop
        update();
    });
})();
