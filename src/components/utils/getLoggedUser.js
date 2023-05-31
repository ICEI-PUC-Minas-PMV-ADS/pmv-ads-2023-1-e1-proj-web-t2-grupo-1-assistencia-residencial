function getLoggedUser() {
  return localStorage.getItem("@loggedUser");
}

export default getLoggedUser;
