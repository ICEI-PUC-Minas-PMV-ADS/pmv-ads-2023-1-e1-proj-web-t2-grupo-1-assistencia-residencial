import { getUsers, setUsers } from "../utils/userStorage.js";
import { users } from "../utils/usersDatabase.js";

window.onload = function () {
  const registeredUsers = getUsers();

  !registeredUsers && setUsers(users);
};
