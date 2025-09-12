document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact page loaded. Initializing...');
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const historyList = document.getElementById('history-list');
    const submissionHistory = document.getElementById('submission-history');
    if (!contactForm || !feedback || !historyList || !submissionHistory) {
        console.error('Contact form elements not found:', { contactForm, feedback, historyList, submissionHistory });
        alert('Error: Form components missing. Please refresh the page.');
        return;
    }

    function loadSubmissionHistory() {
        console.log('Loading submission history from localStorage.');
        try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            historyList.innerHTML = submissions.map(s => `<li>${s.name} (${s.email}) on ${new Date(s.timestamp).toLocaleString()}</li>`).join('');
            submissionHistory.style.display = submissions.length ? 'block' : 'none';
            console.log('Submission history loaded:', submissions);
        } catch (e) {
            console.error('Error loading submission history:', e);
        }
    }

    loadSubmissionHistory();

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Contact form submitted.');
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let errors = [];
        if (!name) {
            errors.push('Name is required.');
        }
        if (!email) {
            errors.push('Email is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push('Please enter a valid email address.');
        }
        if (!message) {
            errors.push('Message is required.');
        } else if (message.length < 10) {
            errors.push('Message must be at least 10 characters long.');
        }

        if (errors.length > 0) {
            console.warn('Form validation failed:', errors);
            feedback.textContent = errors.join(' ');
            feedback.classList.add('error');
            feedback.classList.remove('success');
            return;
        }

        // Save submission
        try {
            saveToLocal('contactSubmissions', { name, email, message, timestamp: new Date().toISOString() });
            console.log('Submission saved:', { name, email, message });
            feedback.textContent = 'Message sent successfully!';
            feedback.classList.add('success');
            feedback.classList.remove('error');
            contactForm.reset();
            loadSubmissionHistory();
        } catch (e) {
            console.error('Error saving submission:', e);
            feedback.textContent = 'Error saving submission. Please try again.';
            feedback.classList.add('error');
            feedback.classList.remove('success');
        }
    });

    console.log('Initialization complete. Ready for use.');
});