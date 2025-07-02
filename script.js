document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Simple static validation
  if (username === "Gab" && password === "5114") {
    // Store the username and redirect
    localStorage.setItem("loggedInUser", username);
    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
