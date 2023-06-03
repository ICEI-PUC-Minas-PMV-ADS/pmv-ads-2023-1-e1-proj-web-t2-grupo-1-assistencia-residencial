import { getUsers } from "../utils/index.js";

function verifyIfUserExixts(email, senha) {
  const users = getUsers();

  for (let index = 0; index < users.length; index++) {
    const userData = users[index];

    if (userData.email === email && userData.password === senha) {
      localStorage.setItem("@loggedUser", JSON.stringify(userData));

      document.location.replace("/index.html");
    }
  }
}

function checkIfEmailIsValid(email) {
  const regex = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
  return regex.test(email);
}

function login(event) {
  event.preventDefault();

  const email = document.querySelector("#email");
  const valorEmail = email.value;

  const password = document.querySelector("#password");
  const valorPassword = password.value;

  if (!checkIfEmailIsValid(valorEmail)) {
    email.setCustomValidity("Insira um e-mail válido!");
    email.reportValidity();

    return;
  }

  verifyIfUserExixts(valorEmail, valorPassword);
}

const form = document.querySelector("#form");

form.addEventListener("submit", login);
