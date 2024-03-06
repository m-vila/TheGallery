// Function to validate email using regular expression
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone using regular expression
function validatePhone(phone) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
}

// Form validation function
function validateForm() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
        alert('All fields are required');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number in the format xxx-xxx-xxxx');
        return false;
    }

    return true;
}
