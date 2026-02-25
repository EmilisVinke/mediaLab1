const player = videojs('player');

player.src({
  src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
  type: 'application/x-mpegURL'
});

document.getElementById('btnPlay').addEventListener('click', () => {
  player.play();

document.getElementById('btnPause').addEventListener('click', () => {
  player.pause();
});
});

