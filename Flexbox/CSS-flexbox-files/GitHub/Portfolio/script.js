    <script>
        // JavaScript for form validation
        const contactForm = document.getElementById('contact-form');
        const emailInput = document.getElementById('email');
        const validationMessage = document.getElementById('validation-message');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailValue = emailInput.value.trim();

            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailValue)) {
                validationMessage.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('error');
            } else {
                validationMessage.textContent = '';
                emailInput.classList.remove('error');
                // You can add code here to send the form data to your server or perform other actions.
            }
        });
    </script>