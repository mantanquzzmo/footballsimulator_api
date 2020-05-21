const express = require("express");
const router = express.Router();
const Player = require("../src/models/player.js");

// Getting all players

router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    console.log(players)
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one player

router.get("/:id", getPlayer, async (req, res) => {
  let player
  try {
    player = await Player.findById(req.params.id, function (err, adventure) {
    });
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// middleware

async function getPlayer(req, res, next) {
  let player
  try {
    team = await Player.findById(req.params.id);
    if (player == null)
    return res.status(404).json({ message: 'Unable to find player'})
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.player = player
  next()
}

module.exports = router;
