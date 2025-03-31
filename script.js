// Initialize EmailJS
(function() {
    emailjs.init("Fhd0_cPJ0DwJwViPl"); // Replace with your actual EmailJS Public Key
})();

// Add event listener to form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_dl113hq", "template_wwhulpp", params)
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});
