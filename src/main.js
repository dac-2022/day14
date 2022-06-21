const express = require("express");
const app = express();

// will help u to parse the body of the request :: POST METHOD
app.use(express.json());

// MEMORY DATABASE :: LIST DATABASE :: RESET ON EVERY START
const userList = [];

app.get("/user", (req, res) => {
  res.json(userList);
});

app.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;

  for (let i = 0; i < userList.length; i++) {
    let item = userList[i];

    if (item.id == userId) {
      res.json(item);
      return;
    }
  }

  res.json({ msg: "User not found" });
});

app.post("/user", (req, res) => {
  // logic to add new user
  const newUser = req.body;
  newUser.id = userList.length + 1;

  userList.push(newUser);
  res.json({ msg: "user added successfully" });
});

// :userId => Path Parameter
app.put("/user/:userId", (req, res) => {
  const userId = req.params.userId;

  let findItem;
  for (let i = 0; i < userList.length; i++) {
    let item = userList[i];
    if (item.id == userId) {
      findItem = item;
      break;
    }
  }

  if (findItem) {
    findItem.username = req.body.username;
    findItem.password = req.body.password;
    findItem.email = req.body.email;
    findItem.mobile = req.body.mobile;
  }

  res.json({ msg: "user updated successfully" });
});

app.listen(4000, () => console.log("server started"));
