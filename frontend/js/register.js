const API_URL =
"http://localhost:5000/api/auth/register";

const form =
document.getElementById("registerForm");

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const user = {

        username:
        document.getElementById("username").value,

        email:
        document.getElementById("email").value,

        password:
        document.getElementById("password").value

    };

    const res = await fetch(API_URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)

    });

    const data = await res.json();

    alert(data.message);

    if(res.ok){

        window.location.href =
        "login.html";

    }

});