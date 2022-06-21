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
  let findItem = null;
  for (let i = 0; i < userList.length; i++) {
    let item = userList[i];

    if (item.id == userId) {
      findItem = item;
      break;
    }
  }

  return findItem;
};

const updateUser = (userId, userBody) => {
  let findItem;
  for (let i = 0; i < userList.length; i++) {
    let item = userList[i];
    if (item.id == userId) {
      findItem = item;
      break;
    }
  }

  if (findItem) {
    findItem.username = userBody.username;
    findItem.password = userBody.password;
    findItem.email = userBody.email;
    findItem.mobile = userBody.mobile;
  }
};

module.exports = { addUser, getAllUser, getUserById, updateUser };
