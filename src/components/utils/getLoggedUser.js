function getLoggedUser() {
  const userData = localStorage.getItem("@loggedUser");
  const parsedUserData = JSON.parse(userData);

  return parsedUserData;
}

export default getLoggedUser;
