document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let message = document.getElementById("message");

  // Validation
  if (name === "" || email === "" || password === "") {
    message.textContent = "Error: All fields are required";
    message.className = "error"; // ✅ here
    return;
  }

  if (!(email.indexOf("@") > -1 && email.endsWith("gmail.com"))) {
    message.textContent =
      "Error: Enter a valid Gmail address (example@gmail.com)";
    message.className = "error";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Error: Password must be at least 6 characters";
    message.className = "error"; // ✅ here
    return;
  }

  // Success
  message.textContent = "Form submitted successfully!";
  message.className = "success"; // ✅ here
});
