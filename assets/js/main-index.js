// MAISON DU LYS - Index Page JavaScript
// This script handles animations, navigation, and interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== STEP 1: FORCE CONTENT VISIBILITY =====
    // This MUST run first to prevent content from disappearing
    setTimeout(function() {
        const animatedElements = document.querySelectorAll(
            '.about-animation, .concept-animation, .partner-animation, .licence-animation'
        );
        animatedElements.forEach(function(element) {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.transform = 'none';
        });
    }, 100);
    
    // ===== STEP 2: INITIALIZE WOW.JS =====
    if (typeof WOW === 'function') {
        new WOW({
            offset: 100,
            mobile: true // Enable animations on mobile
        }).init();
    }
    
    // ===== STEP 3: GSAP ANIMATIONS =====
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        function createScrollAnimation(selector, delay = 0) {
            gsap.utils.toArray(selector).forEach((element, index) => {
                if (!element.hasAttribute('data-animated')) {
                    element.setAttribute('data-animated', 'true');
                    
                    gsap.fromTo(
                        element,
                        {
                            y: 100,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            delay: delay,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                end: "top 30%",
                                toggleActions: "play none none none",
                                once: true
                            }
                        }
                    );
                }
            });
        }
        
        // Apply animations to each section
        createScrollAnimation('.about-animation');
        createScrollAnimation('.concept-animation');
        createScrollAnimation('.partner-animation');
        createScrollAnimation('.licence-animation');
    }
    
    // ===== STEP 4: HEADER SCROLL EFFECT =====
    const header = document.querySelector('.white-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            updateActiveSection();
        });
    }
    
    // ===== STEP 5: SMOOTH SCROLLING FOR NAVIGATION =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's a hash-only link or external file
            if (targetId === '#' || targetId.includes('.html')) return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = 50; // Fixed header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                updateActiveLink(targetId);
            }
        });
    });
    
    // ===== STEP 6: UPDATE ACTIVE NAVIGATION LINK =====
    function updateActiveLink(targetId) {
        document.querySelectorAll('.main-navigation a').forEach(link => {
            link.classList.remove('active-section');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active-section');
            }
        });
    }
    
    // ===== STEP 7: UPDATE ACTIVE SECTION ON SCROLL =====
    function updateActiveSection() {
        const sections = document.querySelectorAll(
            '#maison-lys-shop, #accueil, #about-page, #concept-page, #partner-page, #licence-section'
        );
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = '#' + sectionId;
            }
        });
        
        if (currentSection) {
            updateActiveLink(currentSection);
        }
    }
    
    // Initialize active section on page load
    updateActiveSection();
    
    // ===== STEP 8: FIX SHOP IMAGE DISPLAY =====
    function fixShopImage() {
        const shopImage = document.querySelector('.shop-main-image');
        if (shopImage) {
            shopImage.style.objectFit = 'contain';
            shopImage.style.objectPosition = 'center center';
            shopImage.style.width = '100%';
            shopImage.style.height = '100%';
        }
    }
    
    fixShopImage();
    window.addEventListener('resize', fixShopImage);
    window.addEventListener('load', fixShopImage);
    
    // ===== STEP 9: HANDLE WINDOW RESIZE =====
    window.addEventListener('resize', function() {
        updateActiveSection();
    });
    
});

// ===== PREVENT FLASH OF UNSTYLED CONTENT =====
window.addEventListener('load', function() {
    document.querySelectorAll('.about-animation, .concept-animation, .partner-animation, .licence-animation').forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
    });
});