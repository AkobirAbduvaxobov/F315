
function register(event: Event): void {

    // Form yuborilib sahifa refresh bo'lmasligi uchun
    event.preventDefault();

    const fullName =
        (document.getElementById("fullName") as HTMLInputElement).value;

    const email =
        (document.getElementById("email") as HTMLInputElement).value;

    const password =
        (document.getElementById("password") as HTMLInputElement).value;

    const message =
        document.getElementById("message") as HTMLHeadingElement;

    if (
        fullName === "" ||
        email === "" ||
        password === ""
    ) {

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
(window as any).register = register;
