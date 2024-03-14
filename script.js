function calculateGWA() {
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);
    const subject5 = parseFloat(document.getElementById("subject5").value);
    const subject6 = parseFloat(document.getElementById("subject6").value);

    const totalUnits = 6; // Total number of subjects

    // Check if any input is NaN or not within 0 to 100
    if (
        isNaN(subject1) ||
        isNaN(subject2) ||
        isNaN(subject3) ||
        isNaN(subject4) ||
        isNaN(subject5) ||
        isNaN(subject6) ||
        subject1 < 0 ||
        subject1 > 100 ||
        subject2 < 0 ||
        subject2 > 100 ||
        subject3 < 0 ||
        subject3 > 100 ||
        subject4 < 0 ||
        subject4 > 100 ||
        subject5 < 0 ||
        subject5 > 100 ||
        subject6 < 0 ||
        subject6 > 100
    ) {
        alert("Please enter valid grades between 0 and 100.");
        return;
    }

    // Calculate total grade points
    const totalGradePoints =
        subject1 + subject2 + subject3 + subject4 + subject5 + subject6;

    // Calculate GWA
    const gwa = totalGradePoints / totalUnits;

    // Display GWA result
    const resultInput = document.getElementById("gwaResult");
    resultInput.value = gwa.toFixed(2); // Set value instead of textContent for input field
}
