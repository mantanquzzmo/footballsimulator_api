const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
key = process.env.SERVER_KEY;

mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  `mongodb+srv://mantanquzzmo:${key}@cluster0-eh0if.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log('Connected to MongoDB'));

app.use(express.json());

app.listen(3001, () => {
  console.log("Football server is running.");
});
