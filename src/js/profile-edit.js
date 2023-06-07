import { setLoggedUser } from "../utils/userStorage.js";
import { getLoggedUser, updateUser } from "../utils/userStorage.js";
import { defaultProfileImagePath } from "../utils/usersDatabase.js";

const handleFormSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const user = getLoggedUser();

  const formData = Object.fromEntries(new FormData(form).entries());

  if (user && user.email) {
    updateUser(formData);
    setLoggedUser(formData);
    alert("Dados atualizados com sucesso!");

    window.location.reload();
  } else {
    alert("Erro ao atualizar dados!");
  }
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
