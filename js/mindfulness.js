let timerInterval;
let timeLeft = 0;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer(duration) {
    clearInterval(timerInterval);
    timeLeft = duration * 60;
    isRunning = true;
    const timerDisplay = document.getElementById('timer-display');
    const breathingCircle = document.getElementById('breathing-circle');
    const startBtn = document.getElementById('start-meditation');
    const pauseBtn = document.getElementById('pause-meditation');
    timerDisplay.textContent = formatTime(timeLeft);
    breathingCircle.classList.add('breathe-active');
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Done!';
            breathingCircle.classList.remove('breathe-active');
            isRunning = false;
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            saveToLocal('meditationSessions', { duration, timestamp: new Date().toISOString() });
            loadHistory();
            return;
        }
        timerDisplay.textContent = formatTime(timeLeft);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById('breathing-circle').classList.remove('breathe-active');
    document.getElementById('start-meditation').disabled = false;
    document.getElementById('pause-meditation').disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    const duration = parseInt(document.getElementById('duration').value) || 5;
    timeLeft = duration * 60;
    document.getElementById('timer-display').textContent = formatTime(timeLeft);
    document.getElementById('breathing-circle').classList.remove('breathe-active');
    document.getElementById('start-meditation').disabled = false;
    document.getElementById('pause-meditation').disabled = true;
}

function loadHistory() {
    const historyList = document.getElementById('history-list');
    const sessions = JSON.parse(localStorage.getItem('meditationSessions')) || [];
    historyList.innerHTML = sessions.map(s => `<li>${s.duration} min on ${new Date(s.timestamp).toLocaleString()}</li>`).join('');
    document.getElementById('session-history').style.display = sessions.length ? 'block' : 'none';
}

document.getElementById('start-meditation').addEventListener('click', () => {
    const duration = parseInt(document.getElementById('duration').value);
    if (duration < 1 || duration > 15 || isNaN(duration)) {
        alert('Please enter a duration between 1 and 15 minutes.');
        return;
    }
    startTimer(duration);
});

document.getElementById('pause-meditation').addEventListener('click', pauseTimer);

document.getElementById('reset-meditation').addEventListener('click', () => {
    resetTimer();
    loadHistory();
});

document.getElementById('duration').addEventListener('change', () => {
    if (!isRunning) {
        const duration = parseInt(document.getElementById('duration').value) || 5;
        timeLeft = duration * 60;
        document.getElementById('timer-display').textContent = formatTime(timeLeft);
    }
});

document.addEventListener('DOMContentLoaded', loadHistory);