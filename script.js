// JavaScript for MC Taxi Rental App
document.addEventListener("DOMContentLoaded", function () {
    // Redirect to register page when clicking the 'Get Started' button
    const getStartedBtn = document.querySelector("button");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            window.location.href = "register.html";
        });
    }

    // Form validation for the registration page
    const registerForm = document.querySelector("form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            // Basic validation using Regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^[0-9]{10,11}$/; // Adjust based on required phone format

            if (!name || !email || !phone) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!phonePattern.test(phone)) {
                alert("Please enter a valid phone number (10-11 digits).");
                return;
            }

            alert("Registration successful! We will contact you soon.");
            registerForm.reset();
        });
    }
});
