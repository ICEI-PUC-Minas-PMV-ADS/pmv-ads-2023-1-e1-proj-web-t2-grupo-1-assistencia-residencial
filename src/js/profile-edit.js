import { getLoggedUser } from "../utils/userStorage.js";
import { defaultProfileImagePath } from "../utils/usersDatabase.js";

(function preloadUserData() {
  const profileImage = document.querySelector("#profile-image");
  const form = document.querySelector("#profile-edit-form");
  const user = getLoggedUser();

  profileImage.src = defaultProfileImagePath;

  if (!user) return;

  for (let key in user) {
    if (user.hasOwnProperty(key)) {
      let field = form.elements[key];

      if (field) {
        field.value = user[key];
      }
    }
  }
})();
