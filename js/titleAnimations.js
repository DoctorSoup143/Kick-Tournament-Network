// titleAnimations.js
function isInView(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function () {
    var el = document.querySelector('#myElement');
    if (isInView(el)) {
        el.classList.add('extend');
    }
});