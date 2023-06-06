const usersKey = "@users";
const loggedUserKey = "@loggedUser";

const getUsers = () => {
  const users = localStorage.getItem(usersKey);

  return JSON.parse(users);
};

const setUsers = (users) => {
  users = JSON.stringify(users);
  localStorage.setItem(usersKey, users);
};

const addUser = (user) => {
  let users = getUsers();
  users.push(user);

  setUsers(users);
};

const getUserByEmail = (email) => {
  const users = getUsers();

  return users.find((user) => user.email === email);
};

const updateUser = (newUserData) => {
  let users = getUsers();
  let user = getUserByEmail(newUserData.email);

  user = {
    ...user,
    ...newUserData,
  };

  const userIndex = users.findIndex(({ email }) => email === user.email);
  users[userIndex] = user;

  setUsers(users);
};

const setLoggedUser = (user) => {
  localStorage.setItem(loggedUserKey, JSON.stringify(user));
};

const getLoggedUser = () => {
  const loggedUser = localStorage.getItem(loggedUserKey);

  return JSON.parse(loggedUser);
};

const removeLoggedUser = () => {
  localStorage.removeItem(loggedUserKey);
};

export {
  getUsers,
  setUsers,
  addUser,
  updateUser,
  getUserByEmail,
  getLoggedUser,
  setLoggedUser,
  removeLoggedUser,
};
