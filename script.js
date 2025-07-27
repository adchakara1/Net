function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function playDemo(videoSrc) {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.src = videoSrc;
    video.play(); // Auto-play the video
    modal.style.display = 'flex';
    // Error handling
    video.onerror = () => {
        console.error('Error loading video: ' + videoSrc);
        alert('Failed to load video. Check if the file exists.');
    };
}

function closeModal() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.pause();
    video.currentTime = 0;
    modal.style.display = 'none';
}