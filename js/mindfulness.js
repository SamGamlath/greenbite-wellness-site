const breathText = document.getElementById('breath-text');
let inhale = true;
setInterval(() => {
    breathText.textContent = inhale ? 'Inhale...' : 'Exhale...';
    inhale = !inhale;
}, 2000);

let timerInterval;
function startTimer() {
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 1;
    let seconds = minutes * 60;
    timerInterval = setInterval(() => {
        seconds--;
        document.getElementById('timer-display').textContent = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
        if (seconds <= 0) {
            clearInterval(timerInterval);
            new Audio('assets/sounds/beep.mp3').play();
            const count = parseInt(localStorage.getItem('sessions') || '0') + 1;
            saveToLocal('sessions', count);
            document.getElementById('session-count').textContent = count;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').textContent = '0:00';
}

const sounds = { rain: new Audio('assets/sounds/rain.mp3'), ocean: new Audio('assets/sounds/ocean.mp3') };
function toggleSound(name) {
    const sound = sounds[name];
    const btn = document.querySelector(`button[onclick="toggleSound('${name}')"]`);
    if (sound.paused) {
        sound.play();
        btn.classList.add('active');
    } else {
        sound.pause();
        btn.classList.remove('active');
    }
}

document.getElementById('session-count').textContent = localStorage.getItem('sessions') || '0';