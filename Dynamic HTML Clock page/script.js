document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = "";

    let errors = [];

    // Check for empty fields
    if (!name || !email || !password || !confirmPassword) {
        errors.push("All fields are required.");
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Invalid email format.");
    }

    // Password match validation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Password strength validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        errors.push("Password must be at least 8 characters long, contain a number and an uppercase letter.");
    }

    if (errors.length > 0) {
        errorDiv.innerHTML = errors.join("<br>");
    } else {
        alert("Form submitted successfully!");
        // Here you could proceed with form submission or reset
    }
});
