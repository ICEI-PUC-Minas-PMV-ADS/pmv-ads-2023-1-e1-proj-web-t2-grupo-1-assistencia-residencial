import { redirectTo } from "../utils/redirect.js";
import { getUserByEmail, setLoggedUser } from "../utils/userStorage.js";

function verifyIfUserExixts(email, senha) {
  const searchedUser = getUserByEmail(email);

  if (searchedUser && searchedUser.password === senha) {
    setLoggedUser(searchedUser);
    $.notify("Login realizado com sucesso!", "success");

    redirectTo();
  } else {
    $.notify("Email ou senha incorretos!", "error");
  }
}

function checkIfEmailIsValid(email) {
  const regex = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);

  return regex.test(email);
}

function login(event) {
  event.preventDefault();

  const email = document.querySelector("#email")?.value;
  const password = document.querySelector("#password")?.value;

  if (!checkIfEmailIsValid(email)) {
    $.notify("Informe um email válido", "error");

    return;
  }

  verifyIfUserExixts(email, password);
}

const form = document.querySelector("#form");
form.addEventListener("submit", login);
