const express = require("express");
const mongoose = require("mongoose");
const driver = require('dotenv').config()

const app = express();
key = process.env.SERVER_KEY
console.log(process.env.SERVER_KEY)

mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://mantanquzzmo:${key}@cluster0-eh0if.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Mongoose default connection is open');
});

app.listen(3001, () => console.log("Football server is on."));
