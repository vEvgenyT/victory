// -------------------- PRELOADER -------------------//

window.onload = function() {

    let preload = document.querySelector('.preloader');

    preload.classList.toggle("preload_out");

    let preloaderOut = document.querySelector('.preloader__img');
    preloaderOut.classList.toggle("preload__img_out");

    noise();
    setTimeout(offScroll, 2000);
}
