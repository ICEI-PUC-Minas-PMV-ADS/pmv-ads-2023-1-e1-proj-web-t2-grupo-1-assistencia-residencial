import { getUsers } from "./utils.js";

function verifyIfUserExixts(email, senha) {
  const users = getUsers();

  for (let index = 0; index < users.length; index++) {
    const userData = users[index];

    if (userData.email === email && userData.senha === senha) {
      localStorage.setItem("@loggedUser", JSON.stringify(userData)); //Salva o usuário no localStorage

      document.location.replace("/index.html"); //Redireciona para a página index.html
    }
  }
}

function checkIfEmailIsValid(email) {
  const regex = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
  return regex.test(email);
}

function login(event) {
  event.preventDefault(); // impede de recarregar a tela após enviar o formulário

  const email = document.querySelector("#email"); //Pega o elemento Input onde foi digitado o email
  const valorEmail = email.value; //Salva o email digitado em valorEmail

  const password = document.querySelector("#password"); //Pega o elemento Input onde foi digitado a senha e já salva em valorPassword
  const valorPassword = password.value; //Salva a senha digitada em valorPassword

  if (!checkIfEmailIsValid(valorEmail)) {
    email.setCustomValidity("Insira um e-mail válido!");
    email.reportValidity();

    return;
  }

  verifyIfUserExixts(valorEmail, valorPassword);
}

const form = document.querySelector("#form");

form.addEventListener("submit", login);
