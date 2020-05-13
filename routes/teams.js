const express = require("express");
const router = express.Router();
const Team = require("../src/models/teams.js");
const Player = require("../src/models/player.js");

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
    name: "gremio",
    colorOne: "teal", // placeholder
    dob: new Date(),
  });
  const savedTeam = await team.save();

  let player;
  let position;

  for (let i = 0; i < 19; i++) {
    switch (true) {
      case i < 3:
        position = 'G'
        break;
      
      case i < 9:
        position = 'D'
        break;

      case i < 15:
        position = 'M'
        break;

      case i < 19:
        position = 'A'
        break;
    }
    player = new Player({ team: savedTeam.name, position: position });
    await player.save();
  }
});

router.patch("/:id", (req, res) => {});

module.exports = router;
