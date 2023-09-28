document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const fullName = document.querySelector("#full_name").value;
        const nextOfKinName = document.querySelector("#next_of_kin_name").value;
        const appointmentDate = document.querySelector("#appointment_date").value;
        const appointmentTime = document.querySelector("#appointment_time").value;

        if (fullName.trim() === "" || nextOfKinName.trim() === "" || appointmentDate.trim() === "" || appointmentTime.trim() === "") {
            event.preventDefault(); // Prevent form submission
            alert("All fields are required.");
        }
    });
});
