// -------------------- PRELOADER -------------------//


window.onload = function() {


    noise();
    preloaderOut();
    initAnimation();
    starterAnimation();
    // startSound();
    setTimeout(offScroll, 2000);
}

const preloaderOut = () => {

  let preload = document.querySelector('.preloader');

  preload.classList.toggle("preload_out");

  let preloaderOut = document.querySelector('.preloader__img');
  preloaderOut.classList.toggle("preload__img_out");

}


