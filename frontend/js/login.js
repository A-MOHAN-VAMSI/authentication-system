const API_URL =
"https://authentication-system-p0gd.onrender.com/api/auth/login";
const form =
document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {
        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value
    };

    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await res.json();

    if (res.ok) {

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "username",
            data.username
        );

        window.location.href =
        "dashboard.html";

    } else {

        alert(data.message);

    }

});