import { getUserByEmail } from "../utils/userStorage.js";
import { defaultProfileImagePath } from "../utils/usersDatabase.js";

//Comentarios

const botao = document.getElementById("adicionarComentario");
const divMensagem = document.getElementById("recebe-mensagem");
botao.addEventListener("click", function () {
  const usuario = users[0].nome;
  const comentario = document.getElementById("comentario");
  if (comentario.value == "") {
    alert("Por favor, digite um comentário.");
  } else {
    let mensagem = `<div class="fb2"><h3>${usuario}</h3> <p>${comentario.value}</p></div>`;
    divMensagem.innerHTML = mensagem;

    comentario.value = "";
  }
});

//Avaliação
const elementosEstrela = document.querySelectorAll(".avaliar");
elementosEstrela.forEach((item) => {
  item.addEventListener("click", function () {
    avaliar(item.dataset.estrela);
  });
});
function avaliar(estrela) {
  var url = window.location;

  if (estrela == 5) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s5").src = "../img/icons/estrela_avaliacao.svg";
  } else if (estrela == 4) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
  } else if (estrela == 3) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
  } else if (estrela == 2) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
  } else if (estrela == 1) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s3").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
  }
}

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return phoneNumber;
};

const formatCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const setProfessionalInfos = (user) => {
  const nameElement = document.getElementById("professional_name");
  const photoElement = document.getElementById("professional_photo");
  const emailElement = document.getElementById("professional_email");
  const phoneElement = document.getElementById("professional_phone");
  const aboutElement = document.getElementById("professional_about");
  const categoryElement = document.getElementById("professional_category");
  const portfolioElement = document.getElementById("professional_portfolio");

  nameElement.innerText = user.name;
  emailElement.innerText = user.email;
  aboutElement.innerText = user.about;
  photoElement.src = user.profile_image || defaultProfileImagePath;
  categoryElement.innerText = user.category && formatCategory(user.category);
  phoneElement.innerText = formatPhoneNumber(user.telephone || "71999998888");

  for (let i = 1; i <= 3; i++) {
    portfolioElement.innerHTML += `<img src="/src/img/${user.category}/${
      user.category + i
    }.png" >`;
  }
};

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  const user = getUserByEmail(email);

  if (!email || !user) {
    return window.location.replace("/src/pages/404.html");
  }

  setProfessionalInfos(user);
};
