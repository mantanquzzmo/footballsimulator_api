const express = require("express");
const router = express.Router();
const User = require("../src/models/users.js");

// Getting all teams

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one user

router.get("/:id", getUser, async (req, res) => {
  try {
    const user = await User.findById(req.params.id, function (
      err,
      adventure
    ) {});
    res.status(200).send({ name: `${user.name}`, email: `${user.email}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating one team

router.post("/", async (req, res) => {
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dob: new Date(),
  });
  let createdUser;
  try {
    createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", (req, res) => {});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null)
      return res.status(404).json({ message: "Unable to find team" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
