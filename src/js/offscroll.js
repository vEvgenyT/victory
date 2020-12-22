// -------------------- OFF SCROLL -------------------//

function offScroll() {
  document.querySelector('body').classList.remove("preloader_srcoll-off");
  // animationOut();

  if (!sound.isPlaying) {
  sound.play();
  waves.waves[0].amplitude = 22;
}


function startSound(event) {
      if (!sound.isPlaying) {
  sound.play();
  waves.waves[0].amplitude = 22;
}

    target.removeEventListener("DOMContentLoaded", startSound);
};

let target = document.querySelector("html");
target.addEventListener("DOMContentLoaded", startSound);
}
