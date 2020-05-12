const express = require('express')
const router = express.Router()

// Getting all teams

router.get('/', (req, res) => {
  res.send('Hello from teams')
})

// // Getting one team

// router.get('/:id', (req, res) => {
  
// })

// // Creating one team

// router.post('/', (req, res) => {
  
// })

// // Updating one

// router.patch('/:id', (req, res) => {
  
// })

module.exports = router