"use strict";
function register(event) {
    // Form yuborilib sahifa refresh bo'lmasligi uchun
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    if (fullName === "" ||
        email === "" ||
        password === "") {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }
    message.textContent = `Welcome ${fullName}`;
    message.style.color = "green";
    console.log(fullName);
    console.log(email);
    console.log(password);
}
// HTML onsubmit ichidan chaqirilishi uchun
window.register = register;
