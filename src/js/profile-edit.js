import { getLoggedUser } from "../utils/userStorage.js";
import { defaultProfileImagePath } from "../utils/usersDatabase.js";

const handleFormSubmit = (event) => {
  event.preventDefault();

  const user = getLoggedUser();

  const formData = Object.fromEntries(new FormData(event.target).entries());
  console.log(formData);
};

(() => {
  const profileImage = document.querySelector("#profile-image");
  const form = document.querySelector("#profile-edit-form");
  const user = getLoggedUser();

  profileImage.src = defaultProfileImagePath;

  if (!user) return;

  if (user.type && user.type === "cliente") {
    document.querySelector(".dados-profissionais").style.display = "none";
  }

  for (let key in user) {
    if (user.hasOwnProperty(key)) {
      let field = form.elements[key];

      if (field) {
        field.value = user[key];
      }
    }
  }

  form.addEventListener("submit", handleFormSubmit);
})();
