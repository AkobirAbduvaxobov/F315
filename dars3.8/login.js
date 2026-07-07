"use strict";
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");
    if (email === "" || password === "") {
        result.textContent = "Please fill all fields.";
        result.style.color = "red";
        return;
    }
    result.textContent = `Welcome ${email}`;
    result.style.color = "green";
    console.log(email);
    console.log(password);
}
// HTML onclick ichidan chaqirilishi uchun
window.login = login;
