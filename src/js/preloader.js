// -------------------- PRELOADER -------------------//

window.onload = function() {

    let preload = document.querySelector('.preloader');

    preload.classList.toggle("preload_out");

    noise();
    setTimeout(offScroll, 2000);
}
