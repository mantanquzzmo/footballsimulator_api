const express = require("express");
const router = express.Router();
const Team = require('../src/models/teams.js');
const Player = require('../src/models/player.js');

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

  player = new Player({team: savedTeam.name })
  const savedPlayer = await player.save()
});


router.patch("/:id", (req, res) => {});

module.exports = router;
