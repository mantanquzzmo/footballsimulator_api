const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true},
    colorOne: { type: String, required: true},
    colorTwo: { type: String, required: false},
    dob: Date
});

const teamModel = new mongoose.model('Team', teamSchema);


module.exports = teamModel