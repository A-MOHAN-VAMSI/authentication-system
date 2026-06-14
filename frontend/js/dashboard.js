const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const username = localStorage.getItem("username");

document.getElementById("welcomeText").textContent =
    `Welcome ${username}`;

fetch("http://localhost:5000/api/auth/dashboard", {
    headers: {
        Authorization: token
    }
})
.then(res => {
    if (!res.ok) {
        localStorage.clear();
        window.location.href = "login.html";
        return;
    }

    return res.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});

document.getElementById("logoutBtn")
.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "login.html";
});