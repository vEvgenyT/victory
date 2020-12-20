// -------------------- OFF SCROLL -------------------//

function offScroll() {
  document.querySelector('body').classList.remove("preloader_srcoll-off");
  // animationOut();

  if (!sound.isPlaying) {
  sound.play();
  waves.waves[0].amplitude = 22;
}
}
