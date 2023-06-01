function redirectIfNotLogged() {
  const user = JSON.parse(localStorage.getItem("@loggedUser"));

  if (!user) {
    window.location.href = "./login.html";
  }
}

function redirectIfLogged() {
  const user = JSON.parse(localStorage.getItem("@loggedUser"));

  if (user) {
    window.location.replace("../../index.html");
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem("@users"));
}

function setUsers(users) {
  localStorage.setItem("@users", JSON.stringify(users));
}

function addNewUser(newUser) {
  const users = getUsers();

  users.push(newUser);
  setUsers(users);
}

export { getUsers, addNewUser, redirectIfLogged, redirectIfNotLogged };
