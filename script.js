let maxScrollPosition = 550;

window.addEventListener('scroll', function () {
    if (window.scrollY > maxScrollPosition) {
        window.scrollTo(0, maxScrollPosition);
    }
});

