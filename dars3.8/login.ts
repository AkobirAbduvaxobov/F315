function login(): void {

    const email =
        (document.getElementById("email") as HTMLInputElement).value;

    const password =
        (document.getElementById("password") as HTMLInputElement).value;

    const result =
        document.getElementById("result") as HTMLHeadingElement;

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
(window as any).login = login;
