document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
        alert('Invalid input');
        return;
    }
    saveToLocal('feedback', { name, email, message });
    document.getElementById('confirmation').style.display = 'block';
    e.target.reset();
});

function toggleFAQ(el) {
    const content = el.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}