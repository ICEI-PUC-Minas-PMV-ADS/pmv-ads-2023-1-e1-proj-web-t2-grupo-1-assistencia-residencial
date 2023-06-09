import { redirectIfNotLogged } from "../utils/redirect.js";
import {
  getLoggedUser,
  getUserByEmail,
  updateUser,
} from "../utils/userStorage.js";
import { defaultProfileImagePath } from "../utils/usersDatabase.js";

function addGradeToProfessional(grade) {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  const professionalData = getUserByEmail(email);

  console.log(professionalData);
}

//Avaliação
const elementosEstrela = document.querySelectorAll(".avaliar");
elementosEstrela.forEach((item) => {
  item.addEventListener("click", function () {
    avaliar(item.dataset.estrela);
  });
});
function avaliar(estrela) {
  if (estrela == 5) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s5").src = "../img/icons/estrela_avaliacao.svg";
    addGradeToProfessional(5);
  } else if (estrela == 4) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
    addGradeToProfessional(4);
  } else if (estrela == 3) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
    addGradeToProfessional(3);
  } else if (estrela == 2) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s3").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
    addGradeToProfessional(2);
  } else if (estrela == 1) {
    document.getElementById("s1").src = "../img/icons/estrela_avaliacao.svg";
    document.getElementById("s2").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s3").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s4").src = "../img/icons/estrela_vazia.svg";
    document.getElementById("s5").src = "../img/icons/estrela_vazia.svg";
    addGradeToProfessional(1);
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

const setProfessionalFeedbacks = (user) => {
  let feedbacksElement = document.querySelector(".feedbacks");
  feedbacksElement.innerHTML = "";

  if (user.feedbacks && user.feedbacks.length) {
    user.feedbacks.forEach((feedback) => {
      feedbacksElement.innerHTML += `
      <div class="fb1">
        <h3>${feedback.username}</h3>
        <p>${feedback.message}</p>
      </div>
      `;
    });
  } else {
    feedbacksElement.innerHTML += `
    <div class="fb1">
      <h3>Ainda não há feedbacks para este profissional</h3>
    </div>
    `;
  }
};

const addProfessionalFeedback = (user) => {
  const feedbacksElement = document.getElementById("comentario");
  const loggedUser = getLoggedUser();

  if (!feedbacksElement.value) {
    return alert("O comentário não pode ser vazio");
  }

  if (!loggedUser) {
    return;
  }

  const feedback = {
    username: loggedUser.name,
    message: feedbacksElement.value,
  };

  if (user.feedbacks && user.feedbacks.length) {
    user.feedbacks.push(feedback);
  } else {
    user.feedbacks = [feedback];
  }

  updateUser(user);
  window.location.reload();
};

window.onload = () => {
  redirectIfNotLogged();

  const addFeedbackButton = document.getElementById("adicionarComentario");
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  const user = getUserByEmail(email);

  if (!email || !user) {
    return window.location.replace("/src/pages/404.html");
  }

  setProfessionalInfos(user);
  setProfessionalFeedbacks(user);

  addFeedbackButton.onclick = () => addProfessionalFeedback(user);
};
