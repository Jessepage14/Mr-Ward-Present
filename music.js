window.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-toggle');
    const modalBg = document.getElementById('music-modal-bg');
    const closeBtn = document.getElementById('music-close');
    const onoff = document.getElementById('music-onoff');
    const select = document.getElementById('music-select');
    const volume = document.getElementById('music-volume');
    const audio = document.getElementById('bg-music');

    // Show modal
    musicBtn.onclick = () => {
        modalBg.style.display = 'flex';
        onoff.checked = !audio.paused;
        select.value = audio.src.split('/').pop();
        volume.value = audio.volume;
    };

    // Hide modal
    closeBtn.onclick = () => {
        modalBg.style.display = 'none';
    };
    modalBg.onclick = (e) => {
        if (e.target === modalBg) modalBg.style.display = 'none';
    };

    // On/Off toggle
    onoff.onchange = () => {
        if (onoff.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    // Song select
    select.onchange = () => {
        audio.src = select.value;
        if (onoff.checked) audio.play();
    };

    // Volume control
    volume.oninput = () => {
        audio.volume = volume.value;
    };
});