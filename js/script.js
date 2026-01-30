document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');

    setTimeout(function() {
        preloader.classList.add('loaded');
    }, 300);
});
