// main.js - JavaScript code for handling form validation, data manipulation, and DOM interactions

// Function to validate the input data
const validateInput = (name, coefficient, score) => {
    if (!name || !coefficient || !score) {
        alert("All fields are required.");
        return false;
    }
    if (isNaN(score) || score < 0 || score > 10) {
        alert("Score must be a number between 0 and 10.");
        return false;
    }
    return true;
};

// Function to determine button color based on student ID
const setButtonColor = () => {
    const studentId = "123456"; // Replace with actual student ID
    const lastDigit = parseInt(studentId.charAt(studentId.length - 1));
    const button = document.getElementById("submit-button");
    button.className = lastDigit % 2 === 0 ? "btn-green" : "btn-blue"; // Set class based on last digit
};

// Function to add data to the table
const addDataToTable = (name, coefficient, score) => {
    const tableBody = document.getElementById("grades-table-body");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${coefficient}</td>
        <td>${score}</td>
        <td><button class="delete-button">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
};

// Function to calculate average score
const calculateAverage = () => {
    const scores = Array.from(document.querySelectorAll("#grades-table-body tr td:nth-child(3)"))
        .map(td => parseFloat(td.textContent));
    const total = scores.reduce((acc, score) => acc + score, 0); // Accumulator function
    const average = total / scores.length || 0; // Calculate average
    document.getElementById("average-score").textContent = `Average Score: ${average.toFixed(2)}`;
};

// Event listener for form submission
document.getElementById("grades-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("subject-name").value;
    const coefficient = document.getElementById("coefficient").value;
    const score = document.getElementById("score").value;

    if (validateInput(name, coefficient, score)) {
        addDataToTable(name, coefficient, score);
        calculateAverage();
        event.target.reset(); // Reset form fields
    }
});

// Event delegation for delete buttons
$(document).on("click", ".delete-button", function() {
    const row = $(this).closest("tr");
    row.fadeOut(300, function() {
        $(this).remove();
        calculateAverage(); // Recalculate average after deletion
    });
});

// Initialize button color on page load
window.onload = setButtonColor;