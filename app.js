const openLetter = document.getElementById('openLetter');
const letter = document.getElementById('letter');
const hint = document.getElementById('hint');
const music = document.getElementById('music');
const musicButton = document.getElementById('musicButton');

openLetter.addEventListener('click', () => {
  letter.classList.add('open');
  letter.setAttribute('aria-hidden', 'false');
  hint.textContent = 'A few words, just for you.';
  openLetter.style.display = 'none';
});

musicButton.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = '♫　Pause the song';
    } catch (error) {
      musicButton.textContent = 'Add song.mp3 beside index.html';
    }
  } else {
    music.pause();
    musicButton.textContent = '♫　Play the song';
  }
});
