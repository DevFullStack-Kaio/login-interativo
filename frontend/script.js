const lampSwitch = document.getElementById("lampSwitch");
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");


// ===============================
// ACENDER / APAGAR A LÂMPADA
// ===============================

lampSwitch.addEventListener("click", function () {

    document.body.classList.toggle("light");

});


// ===============================
// LOGIN
// ===============================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    // Exemplo temporário
    // Depois podemos substituir pelo backend

    if (
        email === "teste@email.com" &&
        password === "1234"
    ) {

        errorMsg.textContent = "";

        alert("Login realizado com sucesso!");

    } else {

        errorMsg.textContent =
            "Email ou senha inválidos.";

    }

});