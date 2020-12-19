// -------------------- PRELOADER -------------------//

window.onload = function() {

    // let preload = document.querySelector('.preloader');

    // preload.classList.toggle("preload_out");

    // let preloaderOut = document.querySelector('.preloader__img');
    // preloaderOut.classList.toggle("preload__img_out");
    preloaderOut();
    noise();
    setTimeout(offScroll, 2000);
}


const preloaderOut = () => {
  // let preload = document.querySelector('.preloader');

  let preload = document.querySelector('.preloader');

  preload.classList.toggle("preload_out");

  let preloaderOut = document.querySelector('.preloader__img');
  preloaderOut.classList.toggle("preload__img_out");

}


const preloaderIn = () => {
  let preload = document.querySelector('.preloader');

  const tl = gsap.timeline({})
  .fromTo(preload, {
    opacity: 0,
    y: "150%",
    ease: 'power2.inOut'
  }, {
    opacity: 1,
    y: "0%",
    duration: 1.15,
    ease: 'power2.inOut'
  })
}
