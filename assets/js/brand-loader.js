
// $(document).ready(function () {
//     // Check if preloader has been shown in the current session
//     if (!sessionStorage.getItem('brand-preloader')) {
//         // Simulate loading process
//         let progress = 0;
//         const interval = setInterval(() => {
//             progress += 10;
//             gsap.to(".progress-bar-inner", {
//                 width: progress + "%",
//                 duration: 0.2,
//                 ease: "power1.out"
//             });

//             if (progress >= 100) {
//                 clearInterval(interval);
//                 gsap.to(".progress-para", {
//                     top: "30%",
//                     opacity: 0,
//                     duration: 1,
//                     ease: "power4.inOut"
//                 });

//                 gsap.to("#preloader2", {
//                     top: "-130%",
//                     duration: 1.5,
//                     delay: 0.5,
//                     ease: "power4.inOut",
//                     onComplete: function () {
//                         document.body.style.overflowY = 'hidden';
//                     }
//                 });

//                 gsap.from(".title", {
//                     y: 10,
//                     opacity: 0,
//                     duration: 2,
//                     delay: 1.5,
//                     ease: "expo.inOut"
//                 });
//                 // Set flag in session storage
//                 sessionStorage.setItem('brand-preloader', 'true');
//             }
//         }, 500); // Update every 500ms
//     } else {
//         $("#preloader2").remove();
//     }
// });







$(document).ready(function () {
    // Check if preloader has been shown in the current session
    if (!Cookies.get('brand-preloader')) {
        // Simulate loading process
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            gsap.to(".progress-bar-inner", {
                width: progress + "%",
                duration: 0.2,
                ease: "power1.out"
            });

            if (progress >= 100) {
                clearInterval(interval);
                gsap.to(".progress-para", {
                    top: "30%",
                    opacity: 0,
                    duration: 1,
                    ease: "power4.inOut"
                });

                gsap.to("#preloader2", {
                    top: "-130%",
                    duration: 1.5,
                    delay: 0.5,
                    ease: "power4.inOut",
                    onComplete: function () {
                        document.body.style.overflowY = 'hidden';
                    }
                });

                gsap.from(".title", {
                    y: 10,
                    opacity: 0,
                    duration: 2,
                    delay: 1.5,
                    ease: "expo.inOut"
                });
                // Set flag in session storage
                Cookies.set('brand-preloader', 'true');
            }
        }, 500); // Update every 500ms
    } else {
        $("#preloader2").remove();
    }
});