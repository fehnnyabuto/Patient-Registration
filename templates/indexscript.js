document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        if (username.trim() === "" || password.trim() === "") {
            event.preventDefault(); // Prevent form submission
            alert("Username and password are required.");
        }
    });
});
