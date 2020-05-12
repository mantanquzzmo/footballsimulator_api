const express = require("express");
const router = express.Router();
const Team = require("../src/models/teams.js");

// Getting all teams

router.get("/", (req, res) => {
  res.send("Hello from teams");
});

// Getting one team

router.get("/:id", (req, res) => {
  res.send(`Hello from ${req.params.id}`);
});

// Creating one team

router.post("/", async (req, res) => {
  team = new Team({
    name: "Gremio",
    colorOne: "teal",
    dob: new Date(),
  });
  const savedTeam = await team.save();
  console.log(savedTeam);
});

// Updating one

router.patch("/:id", (req, res) => {});

module.exports = router;
