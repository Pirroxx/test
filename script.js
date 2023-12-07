document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedData = localStorage.getItem("userData");
    const userData = storedData ? JSON.parse(storedData) : {};
    const logoutButton = document.getElementById("logoutButton");
    document.addEventListener("DOMContentLoaded", function () {
      const logoutButton = document.getElementById("logoutButton");

      logoutButton.addEventListener("click", function () {
        localStorage.removeItem("userData");

        alert("You have been logged out.");
      });
    });
    if (username === userData.username && password === userData.password) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  });
});
