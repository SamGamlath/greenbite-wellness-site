// Calculate BMR (Mifflin-St Jeor Equation)
function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

// Calculate TDEE
function calculateTDEE(bmr, activityLevel) {
    return bmr * activityLevel;
}

// Save to localStorage
function saveToLocal(key, value) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    if (!Array.isArray(data)) data = [data];
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

document.getElementById('calorie-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || !activity) {
        alert('Please fill all fields with valid values.');
        return;
    }

    const bmr = calculateBMR(weight, height, age, gender);
    const tdee = calculateTDEE(bmr, activity);

    // Display results
    document.getElementById('bmr').textContent = Math.round(bmr);
    document.getElementById('tdee').textContent = Math.round(tdee);
    document.getElementById('results').style.display = 'block';

    // Animate progress bars (scale to 3000 kcal max for visualization)
    const bmrPercent = (bmr / 3000) * 100;
    const tdeePercent = (tdee / 3000) * 100;
    document.getElementById('bmr-bar').style.width = `${bmrPercent}%`;
    document.getElementById('tdee-bar').style.width = `${tdeePercent}%`;

    // Save to localStorage
    saveToLocal('calorieData', { age, gender, weight, height, activity, bmr, tdee });
    e.target.reset();
});