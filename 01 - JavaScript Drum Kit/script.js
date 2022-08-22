function playSound(e) {
  const charCode = e.key.toUpperCase().charCodeAt(0);
  const audio = document.querySelector(`audio[data-key="${charCode}"]`);
  const key = document.querySelector(`.key[data-key="${charCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.toggle("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
