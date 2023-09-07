const video = document.getElementById('video-player');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const seekForwardButton = document.getElementById('seek-forward');
const changeSpeedButton = document.getElementById('change-speed');

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

stopButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playPauseButton.textContent = 'Play';
});

seekForwardButton.addEventListener('click', () => {
    video.currentTime += 10; // Seek forward by 10 seconds
});

changeSpeedButton.addEventListener('click', () => {
    if (video.playbackRate === 1.0) {
        video.playbackRate = 1.5;
    } else {
        video.playbackRate = 1.0;
    }
});
