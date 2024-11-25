function showFullScreenImage() {
    const fullscreen = document.querySelector('.fullscreen');
    fullscreen.classList.remove('hidden');

    // Play the audio when the full screen image is revealed
    const audio = document.getElementById('birthday-audio');
    audio.play();  // Start playing automatically

    // Stop the audio after 20 seconds (20000 milliseconds)
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;  // Reset the audio to the beginning
    }, 20000);  // 20 seconds
}

function closeFullScreen() {
    const fullscreen = document.querySelector('.fullscreen');
    fullscreen.classList.add('hidden');
}
