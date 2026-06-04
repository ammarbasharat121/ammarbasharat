(function () {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Disable F12 key (which opens the DevTools in most browsers)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });

    // Detect if DevTools is open and log a warning instead of forcing navigation.
    // The original code redirected the user (window.location.replace), which causes
    // an immediate and repeated navigation. Replace that behavior with a harmless
    // console warning so the page won't reload/redirect unexpectedly.
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            // Previously: window.location.replace('https://www.google.com');
            // Avoid forcing navigation — just log a message instead.
            console.warn('DevTools detection triggered — navigation blocked.');
            return 'devtools-check';
        }
    });
    // Check less frequently to avoid busy logging.
    setInterval(function () {
        // Use console.debug so normal users won't see the message unless devtools are open.
        console.debug(element);
    }, 5000);

})();
