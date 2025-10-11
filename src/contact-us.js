
document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from refreshing the page

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!firstName || !lastName || !email || !phone || !message) {
    alert("Please fill out all fields before submitting.");
    return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
    }

    // Success
    alert("Thank you! Your message has been sent.");
    form.reset();
});
});

