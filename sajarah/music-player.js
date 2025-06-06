document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const audio = document.getElementById('bgMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressFill = document.querySelector('.progress-ring-circle-fill');
    const playIcon = playPauseBtn.querySelector('i');
    const circumference = 2 * Math.PI * 48; // 2 * π * radius (48)
    
    // Set initial progress to 0
    progressFill.style.strokeDashoffset = circumference;
    
    // Toggle play/pause
    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            playPauseBtn.classList.add('playing');
            playPauseBtn.setAttribute('aria-label', 'Jeda Musik');
        } else {
            audio.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playPauseBtn.classList.remove('playing');
            playPauseBtn.setAttribute('aria-label', 'Putar Musik');
        }
    }
    
    // Update progress circle
    function updateProgress() {
        const progress = audio.currentTime / audio.duration;
        const offset = circumference * (1 - progress);
        progressFill.style.strokeDashoffset = offset;
    }
    
    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlay);
    
    // Update progress as audio plays
    audio.addEventListener('timeupdate', updateProgress);
    
    // Handle audio end
    audio.addEventListener('ended', () => {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        playPauseBtn.classList.remove('playing');
        playPauseBtn.setAttribute('aria-label', 'Putar Musik');
    });
    
    // Handle spacebar to play/pause
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            togglePlay();
        }
    });
});
