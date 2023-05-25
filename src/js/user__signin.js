import { users } from "./database.js";

const radio = document.querySelectorAll("input[type='radio']");

function HideOrShowElement(event) {
  const elementTarget = event.target;
  const input = elementTarget.closest("input");

  if (input && input.checked) {
    const inputValue = input.value;
    const elementToChange = document.querySelector(".professional__data");

    if (inputValue === "client") {
      elementToChange.style.display = "none";
    } else if (inputValue === "professional") {
      elementToChange.style.display = "block";
    }
  }
}

for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener("change", HideOrShowElement);
}

//================================================

function checkIfPhoneIsValid(celular) {
  const regex = new RegExp(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/);
  return regex.test(celular);
}

function checkIfUserExists(email) {
  return users.some((user) => user.email === email);
}

function checkIfEmailIsValid(email) {
  const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(email);
}

function checkIfPasswordIsValid(pw) {
  const regex = new RegExp(/^\d{6,12}$/);
  return regex.test(pw);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (!checkIfPhoneIsValid(data.celular)) {
    const inputCelular = document.getElementById("celular");

    inputCelular.setCustomValidity("Insira um número válido!");
    inputCelular.reportValidity();

    return;
  }

  if (!checkIfEmailIsValid(data.email)) {
    const inputEmail = document.getElementById("email");

    inputEmail.setCustomValidity("Insira um e-mail válido!");
    inputEmail.reportValidity();

    return;
  }

  const userExists = checkIfUserExists(data.email);

  if (userExists) {
    alert("Usuário já cadastrado!");
    return;
  }

  if (!checkIfPasswordIsValid(data.pw)) {
    const inputSenha = document.getElementById("pw");

    inputSenha.setCustomValidity(
      "A senha deve conter entre 6 a 12 caracteres numéricos!"
    );
    inputSenha.reportValidity();

    return;
  }

  const pw1 = document.getElementById("pw").value;
  const pw2 = document.getElementById("pw__c").value;

  if (pw1 !== pw2) {
    alert("Senhas não conferem!");

    return;
  } else {
    alert("Usuário criado com sucesso!");
  }

  users.push(data);
  form.reset();

  console.log(users);
}

const formulario = document.getElementById("form"); //Pegar o elemento que contém o formulário
formulario.addEventListener("submit", handleSubmit); //Adicionou um escutador de eventos

//================================================

// function checkIfHaveEight(elemento) {
//   console.log(elemento);
// }

// const numbers = [1, 2, 3, 4, 8, 5, 6, 7, 8, 8, 8];
// let result = false;

// const checkIfHaveEight = (elemento) => {
//   if (elemento === 8) {
//     return true;
//   } else {
//     return false;
//   }
// };

// for (let i = 0; i < numbers.length; i++) {
//   const elemento = numbers[i];
//   const isEight = checkIfHaveEight(elemento);

//   if (isEight) {
//     result = true;
//     break;
//   }
// }

// if (result === true) {
//   console.log("Existe um número 8 no array");
// }

// numbers.some((elemento) => {console.log(elemento)});
