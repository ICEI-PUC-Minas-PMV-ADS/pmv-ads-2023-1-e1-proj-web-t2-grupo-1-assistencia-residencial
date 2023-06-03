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

export { redirectIfLogged, redirectIfNotLogged };
