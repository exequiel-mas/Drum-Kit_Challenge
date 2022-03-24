'use strict';

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
// Removing class when pressing for a long time
function removePlaying() {
  let playedKeys = Array.from(document.querySelectorAll('.playing'));
  playedKeys.forEach(pK => pK.classList.remove('playing'));
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.CurrentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Removing class when pressing for a long time
setInterval(document.addEventListener('transitionend', removePlaying), 10000);

window.addEventListener('keydown', playSound);
