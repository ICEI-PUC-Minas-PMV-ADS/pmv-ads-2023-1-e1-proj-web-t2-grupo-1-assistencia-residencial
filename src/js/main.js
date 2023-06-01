import { users } from "./database.js";
import { getUsers } from "./utils.js";

window.onload = function () {
  const registeredUsers = getUsers();

  if (!registeredUsers) {
    localStorage.setItem("@users", JSON.stringify(users));
  }
};
