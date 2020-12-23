// -------------------- OFF SCROLL -------------------//

function offScroll() {
  document.querySelector('body').classList.remove("preloader_srcoll-off");



sound.play();
startSound();
}

function startSound() {
  if (!sound.isPlaying) {
    waves.waves[0].amplitude = 0;
} else {
  sound.play();
  waves.waves[0].amplitude = 22;

}

    // document.removeEventListener("DOMContentLoaded", startSound);
};

// document.addEventListener("DOMContentLoaded", startSound);
