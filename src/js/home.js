import { redirectTo, serviceCategories } from "../utils/index.js";

function redirectToSelectProfessional(category) {
  const linkToRedirect = "src/pages/select-professional.html?";
  const params = new URLSearchParams();

  params.append("category", category.key);

  redirectTo(linkToRedirect + params);
}

const ul = document.querySelector(".services__list");
serviceCategories.forEach((category) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const spanIcon = document.createElement("span");
  const spanName = document.createElement("span");

  li.classList.add("services__list--item");
  spanIcon.classList.add("service__icon");
  spanName.classList.add("service-name");
  img.src = `../img/icons/service_type/${category.img}`;

  spanName.textContent = category.label;

  li.appendChild(spanIcon);
  li.appendChild(spanName);
  spanIcon.appendChild(img);

  li.addEventListener("click", () => {
    redirectToSelectProfessional(category);
  });

  ul.appendChild(li);
});
