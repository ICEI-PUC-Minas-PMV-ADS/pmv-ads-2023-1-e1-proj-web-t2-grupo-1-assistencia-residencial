import { getUsers, redirectTo } from "../utils/index.js";

const getProfessionalMostRecentFeedback = (user) => {
  const mostRecentFeedback =
    user.feedbacks &&
    Array.isArray(user.feedbacks) &&
    user.feedbacks[user.feedbacks.length - 1];

  if (!mostRecentFeedback) {
    return;
  }

  const feedbackTemplate = `
  <div class="professional-card__feedback">
    <p class="professional-card__feedback-title">
      Feedback mais recente
    </p>
    <p class="professional-card__feedback-owner">${mostRecentFeedback.username}</p>
    <p class="professional-card__feedback-message">
    ${mostRecentFeedback.message}
    </p>
  </div>`;

  return feedbackTemplate;
};

const getProfessionalGaleryImages = (category) => {
  let imagesUl = '<ul class="professional-card__images">';

  for (let i = 1; i <= 3; i++) {
    imagesUl += `<li>
    <img src="../img/${category}/${category + i}.png" alt="" />
  </li>`;
  }

  imagesUl += "</ul>";

  return imagesUl;
};

const createProfessionalCards = (user, category) => {
  const cardsWrapper = document.querySelector(".main");
  const defaultProfileImage = "../img/default-profile.jpg";

  let cardTemplate = `
  <section class="professional-card">
    <div class="professional-card__image">
      <img src=${user.profile_image || defaultProfileImage} alt="" />
    </div>
    <div class="professional-card__infos">
      <h3 class="professional-card__name">${user.name}</h3>
      <p class="professional-card__location">${
        user.neighborhood || "Não informado"
      } - ${user.city || ""}</p>`;

  const images = getProfessionalGaleryImages(category);
  const feedback = getProfessionalMostRecentFeedback(user);

  images && (cardTemplate += images);
  feedback && (cardTemplate += feedback);

  cardTemplate += `<button class="professional-card__contact" onclick="redirect('${user.email}')">Entrar em Contato</button>
    </div>
  </section>
  `;

  cardsWrapper.innerHTML += cardTemplate;
};

const formatCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

window.onload = () => {
  const titleElement = document.querySelector(".service__category--title");
  const imageElement = document.querySelector(".service__category--image");

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const users = getUsers();

  if (category) {
    titleElement.innerHTML = `${formatCategory(category)} na sua região`;
    imageElement.src = `../img/icons/service_type/${category}.svg`;

    const filteredUsers = users.filter(
      (user) => (user.user_type = "profissional" && user.category === category)
    );

    if (!filteredUsers.length) {
      return redirectTo("../pages/404.html");
    }

    filteredUsers.forEach((user) => createProfessionalCards(user, category));
  }
};
