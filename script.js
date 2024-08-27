document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation (you can replace this with more complex logic)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page, or take some other action here
        window.location.href = "dashboard.html"; // example redirection
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
});
