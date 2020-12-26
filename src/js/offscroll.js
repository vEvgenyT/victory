// -------------------- OFF SCROLL -------------------//

function offScroll() {
  document.querySelector('body').classList.remove("preloader_srcoll-off");


checkSound();



}

function checkSound() {
  if (!sound.isPlaying) {
    waves.waves[0].amplitude = 0;
} else {
  waves.waves[0].amplitude = 22;

}

    // document.removeEventListener("DOMContentLoaded", startSound);
};

// document.addEventListener("DOMContentLoaded", startSound);
