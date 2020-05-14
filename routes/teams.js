const express = require("express");
const router = express.Router();
const Team = require("../src/models/teams.js");
const Player = require("../src/models/player.js");

// Getting all teams

router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one team

router.get("/:id", getTeam, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id, function (err, adventure) {
    });
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating one team

router.post("/", async (req, res) => {
  team = new Team({
    name: req.body.name,
    colorOne: req.body.colorOne,
    colorTwo: req.body.colorTwo,
    dob: new Date(),
  });
  let savedTeam;
  try {
    savedTeam = await team.save();
    res.status(201).json(savedTeam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  let player;
  let position;

  for (let i = 0; i < 19; i++) {
    switch (true) {
      case i < 3:
        position = "G";
        break;

      case i < 9:
        position = "D";
        break;

      case i < 15:
        position = "M";
        break;

      case i < 19:
        position = "A";
        break;
    }
    player = new Player({ team: savedTeam.name, position: position });
    await player.save();
  }
});

router.patch("/:id", (req, res) => {});

async function getTeam(req, res, next) {
  let team
  try {
    team = await Team.findById(req.params.id);
    if (team == null)
    return res.status(404).json({ message: 'Unable to find team'})
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.team = team
  next()
}

module.exports = router;
