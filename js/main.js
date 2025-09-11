// Reusable save to localStorage
function saveToLocal(key, value) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    if (!Array.isArray(data)) data = [data];
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Newsletter form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (/^\S+@\S+\.\S+$/.test(email)) {
        saveToLocal('newsletter', email);
        alert('Subscribed!');
    } else {
        alert('Invalid email');
    }
});

// Hero quote rotator
const quotes = ['Eat well, live well!', 'Move your body, feel alive!', 'Mindfulness every day!', 'Healthy habits, happy life!'];
let quoteIndex = 0;
setInterval(() => {
    document.getElementById('hero-quote').textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}, 5000);

// Daily tip
const tips = ['Drink 8 glasses of water.', 'Eat 5 servings of veggies.', 'Sleep 7-8 hours.', 'Walk 10,000 steps.'];
const today = new Date().getDay();
document.getElementById('daily-tip').textContent = tips[today % tips.length];

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});
observer.observe(document.getElementById('daily-tip'));