document.getElementById('historia-card').addEventListener('click', function() {
    playAudio('audio_allen_come_on.mp3', 'content/historia.html');
});

document.getElementById('armas-card').addEventListener('click', function() {
    playAudio('audio_metal_slug_ok.mp3', 'content/armas.html');
});

document.getElementById('consejos-card').addEventListener('click', function() {
    playAudio('audio_prisionero.mp3', 'content/consejos.html');
});

function playAudio(audioFileName, redirectUrl) {
    var audio = new Audio('media/' + audioFileName);

    // Redirigir a la nueva página después de que termine la reproducción
    audio.addEventListener('ended', function() {
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });

    audio.play();
}
