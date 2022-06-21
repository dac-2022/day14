// MEMORY DATABASE :: LIST DATABASE :: RESET ON EVERY START
const userList = [];

const addUser = (user) => {
  user.id = userList.length + 1;
  userList.push(user);
};
const getAllUser = () => {
  return userList;
};
const getUserById = (userId) => {
  return userList.find((item) => item.id == userId);
};

const updateUser = (userId, userBody) => {
  let findItem = userList.find((item) => item.id == userId);

  if (findItem) {
    findItem.username = userBody.username;
    findItem.password = userBody.password;
    findItem.email = userBody.email;
    findItem.mobile = userBody.mobile;
  }
};

module.exports = { addUser, getAllUser, getUserById, updateUser };
