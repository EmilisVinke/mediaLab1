const player = videojs('player');

player.src({
  src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
  type: 'application/x-mpegURL'
});

document.getElementById('btnPlay').addEventListener('click', () => {
  player.play();
});

document.getElementById('btnPause').addEventListener('click', () => {
  player.pause();
});

document.getElementById('btnStop').addEventListener('click', () => {
  player.pause();
  player.currentTime(0);
});

document.getElementById('btnFwd').addEventListener('click', () => {
  player.currentTime((player.currentTime() || 0) + 5);
});

document.getElementById('btnBack').addEventListener('click', () => {
  const current = player.currentTime() || 0;
  const newTime = current - 5;
  player.currentTime(newTime < 0 ? 0 : newTime);
});

