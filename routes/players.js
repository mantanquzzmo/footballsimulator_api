const express = require("express");
const router = express.Router();
const Player = require("../src/models/player.js");

// Getting all teams

// Getting one team

router.get("/:id", getTeam, async (req, res) => {
  let player
  try {
    player = await Player.findById(req.params.id, function (err, adventure) {
    });
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating one team

module.exports = router;
