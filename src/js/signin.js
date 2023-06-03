import { addUser, getUserByEmail, getUsers } from "../utils/userStorage.js";
import { redirectIfLogged } from "../utils/redirect.js";

const radio = document.querySelectorAll("input[type='radio']");

function convertCheckInputsInArray(object) {
  object.category = [];

  for (let chave in object) {
    if (object[chave] === "on") {
      object.category.push(chave);
      delete object[chave];
    }
  }

  return object;
}

function removeEmptyKeys(objeto) {
  for (let key in objeto) {
    if (
      objeto[key] === "" ||
      (Array.isArray(objeto[key]) && objeto[key].length === 0) ||
      (typeof objeto[key] === "object" && Object.keys(objeto[key]).length === 0)
    ) {
      delete objeto[key];
    } else if (typeof objeto[key] === "object") {
      removeEmptyKeys(objeto[key]);
      if (Array.isArray(objeto[key]) && objeto[key].length === 0) {
        delete objeto[key];
      }
    }
  }
  return objeto;
}

function HideOrShowElement(event) {
  const elementTarget = event.target;
  const input = elementTarget.closest("input");

  if (input && input.checked) {
    const inputValue = input.value;
    const elementToChange = document.querySelector(".professional__data");

    if (inputValue === "cliente") {
      elementToChange.style.display = "none";
    } else if (inputValue === "profissional") {
      elementToChange.style.display = "block";
    }
  }
}

for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("change", HideOrShowElement);
}

function checkIfPhoneIsValid(celular) {
  const regex = new RegExp(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/);
  return regex.test(celular);
}

function checkIfUserExists(email) {
  return getUserByEmail(email);
}

function checkIfEmailIsValid(email) {
  const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(email);
}

function checkIfPasswordIsValid(senha) {
  const regex = new RegExp(/^\d{6,12}$/);
  return regex.test(senha);
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  let data = removeEmptyKeys(Object.fromEntries(formData.entries()));
  data = convertCheckInputsInArray(data);

  if (!checkIfPhoneIsValid(data.telephone)) {
    const inputCelular = document.getElementById("celular");
    const feedbackCelularInvalido = "Insira um número válido!";

    inputCelular.setCustomValidity(feedbackCelularInvalido);
    inputCelular.reportValidity();

    return;
  }

  if (!checkIfEmailIsValid(data.email)) {
    const inputEmail = document.getElementById("email");
    const feedbackEmailInvalido = "Insira um e-mail válido!";

    inputEmail.setCustomValidity(feedbackEmailInvalido);
    inputEmail.reportValidity();

    return;
  }

  const userExists = checkIfUserExists(data.email);

  if (userExists) {
    alert("Usuário já cadastrado!");
    return;
  }

  if (!checkIfPasswordIsValid(data.password)) {
    const inputSenha = document.getElementById("senha");
    const feedbackSenhaIncorreta =
      "A senha deve conter entre 6 a 12 caracteres numéricos!";

    inputSenha.setCustomValidity(feedbackSenhaIncorreta);
    inputSenha.reportValidity();

    return;
  }

  const senha = document.getElementById("senha").value;
  const senha_confirmacao = document.getElementById("senha_confirmacao").value;

  if (senha !== senha_confirmacao) {
    return alert("Senhas não conferem!");
  } else {
    alert("Usuário criado com sucesso!");
  }

  addUser(data);
  console.log(getUsers());
  form.reset();

  window.location.href = "login.html";
}

const formulario = document.getElementById("form");
formulario.addEventListener("submit", handleSubmit);

window.onload = redirectIfLogged;
