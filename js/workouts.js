document.getElementById('workout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const bodyPart = document.getElementById('body-part').value;
    const equipment = document.getElementById('equipment').value;
    const filtered = workouts.filter(w => (!bodyPart || w.bodyPart === bodyPart) && (!equipment || w.equipment === equipment));
    const plan = filtered.sort(() => Math.random() - 0.5).slice(0, 3); // Random 3
    const planDiv = document.getElementById('workout-plan');
    planDiv.innerHTML = '';
    plan.forEach(w => {
        const div = document.createElement('div');
        div.classList.add('workout-item');
        div.innerHTML = `<p>${w.name} (30s)</p><button onclick="startTimer(this, 30)">Start Timer</button><span class="timer">30</span>`;
        planDiv.appendChild(div);
    });
});

function startTimer(btn, seconds) {
    btn.disabled = true;
    const timer = btn.nextElementSibling;
    let time = seconds;
    const interval = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time <= 0) {
            clearInterval(interval);
            new Audio('assets/sounds/beep.mp3').play();
            btn.disabled = false;
            timer.textContent = seconds;
        }
    }, 1000);
}