// Initialize Video.js player
const player = videojs('player', {
  autoplay: false,
  controls: true,
  preload: 'auto'
});

// Default stream on page load
player.src({
  src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
  type: 'application/x-mpegURL'
});


/* -----------------------
   CONTROL BUTTONS
------------------------ */

// Play
document.getElementById('btnPlay').addEventListener('click', () => {
  player.play();
});

// Pause
document.getElementById('btnPause').addEventListener('click', () => {
  player.pause();
});

// Stop (pause + reset to start)
document.getElementById('btnStop').addEventListener('click', () => {
  player.pause();
  player.currentTime(0);
});

// Jump forward 5 seconds
document.getElementById('btnFwd').addEventListener('click', () => {
  const current = player.currentTime() || 0;
  player.currentTime(current + 5);
});

// Jump backward 5 seconds
document.getElementById('btnBack').addEventListener('click', () => {
  const current = player.currentTime() || 0;
  player.currentTime(Math.max(0, current - 5));
});


/* -----------------------
   PLAYLIST LOGIC
------------------------ */

function loadStream(url) {
  if (!url || !url.trim()) return;

  player.src({
    src: url.trim(),
    type: 'application/x-mpegURL'
  });

  player.play();
}

// Load button 1
document.getElementById('load1').addEventListener('click', () => {
  const url = document.getElementById('url1').value;
  loadStream(url);
});

// Load button 2
document.getElementById('load2').addEventListener('click', () => {
  const url = document.getElementById('url2').value;
  loadStream(url);
});


/* -----------------------
   SHUFFLE
------------------------ */

document.getElementById('btnShuffle').addEventListener('click', () => {
  const urls = [
    document.getElementById('url1').value,
    document.getElementById('url2').value
  ].filter(Boolean);

  if (urls.length === 0) return;

  const randomIndex = Math.floor(Math.random() * urls.length);
  loadStream(urls[randomIndex]);
});