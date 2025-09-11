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