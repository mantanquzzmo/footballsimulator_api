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
    name: "gremio",
    colorOne: "teal", // placeholder
    dob: new Date(),
  });
  const savedTeam = await team.save();


  let goalkeeper
  for (let i = 0; i < 2; i++) {
    goalkeeper = new Player({team: savedTeam.name, position: "GK" })
    await goalkeeper.save()
  }

  let defender
  for (let i = 0; i < 6; i++) {
    defender = new Player({team: savedTeam.name, position: "DEF" })
    await defender.save()
  }
  let midfielder
  for (let i = 0; i < 6; i++) {
    midfielder = new Player({team: savedTeam.name, position: "MID" })
    await goalkeeper.save()
  }
  let attacker
  for (let i = 0; i < 6; i++) {
    attacker = new Player({team: savedTeam.name, position: "ATT" })
    await atacker.save()
  }
  
});


router.patch("/:id", (req, res) => {});

module.exports = router;
