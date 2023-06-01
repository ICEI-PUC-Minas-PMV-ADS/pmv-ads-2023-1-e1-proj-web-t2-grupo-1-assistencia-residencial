import { users } from "./database.js";
import { redirectIfNotLogged } from "./utils.js";

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

window.onload = redirectIfNotLogged;
