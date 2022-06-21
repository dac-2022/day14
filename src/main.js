const express = require("express");
const app = express();
const user = require("./user");
app.use(express.json());

app.get("/user", (req, res) => {
  const list = user.getAllUser();
  res.json(list);
});

app.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundUser = user.getUserById(userId);
  foundUser ? res.json(foundUser) : res.json({ msg: "User not found" });
});

app.post("/user", (req, res) => {
  user.addUser(req.body);
  res.json({ msg: "user added successfully" });
});

// :userId => Path Parameter
app.put("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  user.updateUser(userId, req.body);
  res.json({ msg: "user updated successfully" });
});

app.listen(4000, () => console.log("server started"));
